import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, company, email, phone, message } = await req.json();

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const companyDisplay = company && company.trim() !== "" ? company : "Not Provided";

    const mailOptions = {
      from: `"Techmatically Leads" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_RECEIVER, 
      replyTo: email,
      subject: `New Lead: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <hr />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Company:</strong> ${companyDisplay}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f9f9f9; border-left: 4px solid #3b82f6;">
            <strong>Message:</strong><br />
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error instanceof Error ? error.message : "Unknown error" }, 
      { status: 500 }
    );
  }
}