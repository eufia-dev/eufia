import nodemailer from 'nodemailer';

export async function POST({ request }) {
  try {
    const { email, message } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email requerido' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? 'smtp.example.com',
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        : undefined
    });

    await transporter.sendMail({
      from: 'web@eufia.eu',
      to: 'info@eufia.eu',
      subject: 'Nuevo contacto desde eufia.eu',
      text: `Email: ${email}\nMensaje: ${message ?? ''}`,
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong><br/>${
        message ?? ''
      }</p>`
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
} 