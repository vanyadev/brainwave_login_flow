import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function requestVerification(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  const code = generateRandomCode();

  try {
    await sendVerificationEmail(email, code);

    res.status(200).json({ email, code });
  } catch (error) {
    res
      .status(400)
      .json({ error: `Error sending verification email - ${error}` });
  }
}

function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendVerificationEmail(email: string, code: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vanyadevvarificationapp@gmail.com",
      pass: "ubbn ywve kayz udmn",
    },
  });

  const mailOptions = {
    from: "vanyadevvarificationapp@gmail.com",
    to: email,
    subject: "Submit code",
    text: `Your submit code: ${code}`,
  };

  await transporter.sendMail(mailOptions);
}
