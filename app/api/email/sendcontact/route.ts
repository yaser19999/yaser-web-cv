import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  try {
    const formData = await req.json();
    const { name, email, message } = formData;

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact ${email} <onboarding@resend.dev>`,
      to: 'yaser1999yaser@hotmail.com',
      subject: name,
      html: message ?? '',
      replyTo: email,
    });
    console.log(data);
    return Response.json({data});
  } catch (error) {
    return Response.json({ error });
  }
}






