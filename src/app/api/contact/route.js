import nodemailer from 'nodemailer';
import { writeFile } from 'fs/promises';

export async function POST(req) {
  const formData = await req.formData();
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const company = formData.get('company');
  const file = formData.get('file');

  let attachmentPath = '';

  if (file && typeof file === 'object') {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    attachmentPath = `/tmp/${file.name}`;
    await writeFile(attachmentPath, buffer);
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  const mailOptions = {
    from: email,
    to: 'xavics48@gmail.com',
    subject: `Contact Form Submission from ${fullName}`,
    text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${company || 'N/A'}`,
    attachments: file
      ? [
          {
            filename: file.name,
            path: attachmentPath,
          },
        ]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response('Email failed', { status: 500 });
  }
}
