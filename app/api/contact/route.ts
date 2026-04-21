import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      message,
      website, // 👈 honeypot field, only bots will see and fill this
    } = await req.json();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !message
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }
    // 🛡️HONEYPOT CHECK (NEW)

    if (website && website.trim() !== "") {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const companyDisplay =
      company && company.trim() !== "" ? company : "Not Provided";

const mailOptions = {
  from: `"Techmatically Leads" <${process.env.SMTP_USER}>`,
  to: process.env.SMTP_RECEIVER,
  replyTo: email,
  subject: `New Lead: ${firstName} ${lastName}`,
  html: `
  <div style="margin:0;padding:0;background-color:#f4f6f8;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
      <tr>
        <td align="center">
          
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;font-family:Arial, sans-serif;">
            
            <!-- Header -->
            <tr>
              <td style="background:#2563eb;color:#ffffff;padding:20px;text-align:center;">
                <tr>
                <td style="background:#f4f6f8;padding:20px;text-align:center;color:white;">
    
                  <img 
                    src="https://www.techmatically.com/wp-content/uploads/2023/11/techmatically_logo.png"
                    alt="Techmatically"
                    style="max-width:150px;height:auto;display:block;margin:0 auto 10px;"
                  />

                    <p style="margin:0;font-size:14px;opacity:0.9;font-color:black;">
                    New Contact Form Submission
                  </p>

                </td>
              </tr>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:20px;color:#333;">
                
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Company:</strong> ${companyDisplay}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>

                <div style="margin-top:20px;padding:15px;background:#f9fafb;border-left:4px solid #2563eb;border-radius:6px;">
                  <strong>Message:</strong>
                  <p style="margin-top:10px;line-height:1.5;">${message}</p>
                </div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:15px;text-align:center;font-size:12px;color:#888;">
                Sent from Techmatically Website
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </div>
  `,
};

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Success" },
      { status: 200 }
    );

  } catch (error) {
    console.error("SMTP Error:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
        details:
          error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}