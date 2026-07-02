import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';

// ¡Esta es la línea que falta! Debes tenerla justo antes de usar app.post
const app = express();
app.use(express.json());

app.post('/api/send', async (req, res) => {
  const { name, company, email, subject, msg } = req.body;

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

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `Portafolio: ${subject || 'Nuevo mensaje'} - De: ${name}`,
      text: `Nombre: ${name}\nEmpresa: ${company || 'No especificada'}\nCorreo: ${email}\nMotivo: ${subject || 'No especificado'}\n\nMensaje:\n${msg}`,
    });
    return res.status(200).send('¡Mensaje enviado con éxito!');
  } catch (error) {
    console.error('Error al enviar:', error.message);
    return res.status(500).send('Error al enviar el correo');
  }
});

app.listen(3001, () => console.log('API lista en http://localhost:3001'));