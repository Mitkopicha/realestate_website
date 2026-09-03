import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, contactPerson, message } = body;

    const data = await resend.emails.send({
      from: 'Nordic Capital Advisors <onboarding@resend.dev>',
      to: ['office@nordic-capital-advisors.com', 'dimitar.dutchev@gmail.com'],
      subject: `Ново запитване от сайта: ${name}`,
      html: `
        <h2>Ново запитване от уебсайта</h2>
        <p><strong>Име:</strong> ${name}</p>
        <p><strong>Имейл:</strong> ${email}</p>
        <p><strong>Телефон / WhatsApp:</strong> ${phone || 'Не е посочен'}</p>
        <p><strong>Предпочитан контакт:</strong> ${contactPerson}</p>
        <hr />
        <p><strong>Съобщение:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}