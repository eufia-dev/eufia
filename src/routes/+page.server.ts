import type { Actions } from './$types';
import type { Action } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } from '$env/static/private';

export const actions: Actions = {
  default: (async ({ request }) => {
    const data = await request.formData();

    const company = data.get('company');
    if (typeof company === 'string' && company.trim() !== '') {
      await new Promise((r) => setTimeout(r, 400));
      return { success: true };
    }

    const website = data.get('website');
    if (typeof website === 'string' && website.trim() !== '') {
      await new Promise((r) => setTimeout(r, 400));
      return { success: true };
    }

    const information = data.get('information');
    if (typeof information === 'string' && information.trim() !== '') {
      await new Promise((r) => setTimeout(r, 400));
      return { success: true };
    }

    const email = data.get('email');
    const message = data.get('message');
 
    if (!email || typeof email !== 'string' || !email.trim()) {
      return { success: false, error: 'Email requerido' };
    }

    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: true,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: SMTP_FROM,
        to: 'info@eufia.eu',
        subject: 'Nuevo contacto - EUFIA Control Horario',
        text: `Email: ${email}\nMensaje: ${message ?? ''}`,
        html: `<p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong><br/>${message ?? ''}</p>`
      });

      return { success: true };
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
      
      return { success: false, error: 'Error interno del servidor' };
    }
  }) satisfies Action
};