// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const { google } = require("googleapis");
import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';
import SMTPTransport from 'nodemailer';

const OAuth2 = google.auth.OAuth2;

import {
  generateClientEmailTemplate,
  generateCompanyEmailTemplate,
} from '@/data/emailtemplates';

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();

  const transporter = SMTPTransport.createTransport({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.SENDER_EMAIL,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken,
    },
  });
  return transporter;
};

export default async function Contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, phone, message } = req.body;

  if (req.method == 'POST') {
    const clientEmailTemplate = generateClientEmailTemplate(email);
    const companyEmailTemplate = generateCompanyEmailTemplate(
      name,
      email,
      phone,
      message
    );
    try {
      const transporter = await createTransporter();
      await Promise.all([
        transporter.sendMail(clientEmailTemplate),
        transporter.sendMail(companyEmailTemplate),
      ]);

      return res.status(200).send({
        status: 'success',
      });
    } catch (error) {
      return res.send(error);
    }
  }
}
