import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, msg } = req.body;

  if (!name || !email || !msg) {
    return res.status(400).send('Faltan campos requeridos');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: `Portafolio Personal - Mensaje de: ${name}`,
    text: `Has recibido un nuevo mensaje desde tu portafolio:\n\nNombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${msg}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).send('¡Mensaje enviado con éxito!');
  } catch (error) {
    console.error('Error al enviar:', error);
    return res.status(500).send('Error interno del servidor');
  }
}
