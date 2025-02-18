import client from '@sendgrid/client';
import { VercelRequest, VercelResponse } from '@vercel/node';

client.setApiKey(process.env.SENDGRID_API_KEY || '');

/**
 * Subscribe to a newsletter for a sepecifc campaign
 */

export default async function subscribe(
  req: VercelRequest,
  res: VercelResponse
) {
  if (!req.body.email || !req.body.campaign) {
    res.status(400).json({ success: false, error: 'Champs manquants' });
  }
  client
    .request({
      url: `/v3/marketing/field_definitions`,
      method: 'GET',
    })
    .then(
      ([_, body]) =>
        body.custom_fields.filter(
          (f: { name: string }) => f.name === 'campaign'
        )[0].id
    )
    .then((campaignId) =>
      client.request({
        url: `/v3/marketing/contacts`,
        method: 'PUT',
        body: {
          contacts: [
            {
              email: req.body.email,
              custom_fields: { [campaignId]: req.body.campaign },
            },
          ],
        },
      })
    )
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(400).json({
        success: false,
        error:
          "Erreur d'enregistrement de l'e-mail, veuillez contacter l'administrateur du site.",
      });
    });
}
