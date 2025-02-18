export const generateCompanyEmailTemplate = (
  name: string,
  email: string,
  number: string,
  message: string
) => ({
  from: `${name} <${email}>`,
  to: process.env.CONTACT_EMAIL,
  subject: `${name} vient de nous contacter depuis le site web`,
  text:
    'Nom: ' +
    name +
    '\n' +
    'Email: ' +
    email +
    '\n' +
    'Num: ' +
    number +
    '\n' +
    'Message:  ' +
    message,
});

export const generateClientEmailTemplate = (email: string) => ({
  from: `Clinique Muller <${process.env.SENDER_EMAIL}>`,
  to: email,
  subject: 'Nous avons bien reçu votre message',
  html: '<p style="color: black; text-align: center;font-weight: bold;" >Merci d&apos;avoir pris contact avec nous</p><p style="color: black;">La réponse sera envoyée à l&apos;adresse électronique que vous avez indiquée dans les plus brefs délais. Si cela est urgent, nous vous invitons à nous appeler au +41 11 11 111 11. Nous serons ravis de vous aider ! </p> <p style="color: black;">À très vite, </p><p style="color: black;">L&apos;équipe de Clinique Muller</p>',
});
