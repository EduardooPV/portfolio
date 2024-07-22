import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";

dotenv.config();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const USERNAME = process.env.GMAIL_USERNAME;
  const PASSWORD = process.env.GMAIL_PASSWORD;

  if (!USERNAME || !PASSWORD) {
    return res.status(500).json({ error: "Missing environment variables" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
  });

  const formattedMessage = req.body.message.replace(/\n/g, "</br>");

  const mailData = {
    from: USERNAME,
    to: "du__du@live.com",
    subject: `Mensagem de: ${req.body.name}`,
    html: `<div>
      <div>Contato através do Portfolio</div>
      </br>
      <div>${formattedMessage}</div>
      </br>
      <div>Enviado por: ${req.body.email}</div>
    </div>`,
  };

  try {
    await transporter.sendMail(mailData);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ error: "Error sending email" });
  }
}
