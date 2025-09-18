import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const {
    name,
    email,
    company,
    projectType,
    budget,
    timeline,
    subject,
    message,
  } = await req.json();

  try {
    await resend.emails.send({
      from: 'Portfolio Site <onboarding@resend.dev>', // replace after verifying domain
      to: 'echukwuma561@gmail.com',
      replyTo: email,
      subject: `📬 New message: ${subject}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ""}
        ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ""}
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
