import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

const RATE_LIMIT = 2;
const WINDOW_MS = 24 * 60 * 60 * 1000;
const ipStore = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const record = ipStore.get(ip) || { count: 0, startTime: now };

  if (now - record.startTime > WINDOW_MS) {
    record.count = 0;
    record.startTime = now;
  }

  record.count++;
  ipStore.set(ip, record);

  return record.count <= RATE_LIMIT;
}

export async function POST(request) {
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
  const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT;

  if (!EMAIL_USER || !EMAIL_PASSWORD || !EMAIL_RECIPIENT) {
    console.error("Missing email environment variables.");
    return NextResponse.json(
      { success: false, message: "Server email configuration error." },
      { status: 500 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const allowed = checkRateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many requests. Try again after 24 hours.",
      },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();
    const subject = (body.subject || "Contact Form Submission").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields: name, email, or message.",
        },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format." },
        { status: 400 }
      );
    }

    if (name.length > 100 || subject.length > 150 || message.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields exceed character limits.",
        },
        { status: 400 }
      );
    }

    const sanitizedName = validator.escape(name);
    const sanitizedEmail = validator.normalizeEmail(email) || "";
    const sanitizedSubject = validator.escape(subject);
    const sanitizedMessage = validator.escape(message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_RECIPIENT,
      subject: `New Contact: ${sanitizedSubject}`,
      text: `
You have a new contact form submission:

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Message: ${sanitizedMessage}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
