import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // 1. AÑADE LOS NUEVOS CAMPOS AQUÍ
  const { name, company, email, subject, msg } = req.body;

  // 2. ACTUALIZA LA VALIDACIÓN (company y subject son opcionales según definimos antes)
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

  // 3. ACTUALIZA EL CUERPO DEL CORREO
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: `Portafolio: ${subject || 'Nuevo mensaje'} - De: ${name}`,
    text: `
      Has recibido un nuevo mensaje desde tu portafolio:

      Nombre: ${name}
      Empresa: ${company || 'No especificada'}
      Correo: ${email}
      Motivo: ${subject}

      Mensaje:
      ${msg}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).send('¡Mensaje enviado con éxito!');
  } catch (error) {
    console.error('Error al enviar:', error);
    return res.status(500).send('Error interno del servidor');
  }
}