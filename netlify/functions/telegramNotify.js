/* Netlify Function: telegramNotify
   Expects POST JSON: { type: 'volunteer'|'psychologist'|'partner'|'chapter', data: {...} }
   Requires env vars: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
*/
const escapeHtml = (str) => {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (err) {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { type, data } = body;
  if (!type || !data) {
    return { statusCode: 400, body: 'Missing type or data' };
  }

  const BOT = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT = process.env.TELEGRAM_CHAT_ID;
  if (!BOT || !CHAT) {
    return {
      statusCode: 500,
      body: 'Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID',
    };
  }

  let text = '';
  try {
    switch (type) {
      case 'volunteer':
        text =
          `New volunteer application:\n` +
          `Full name: ${escapeHtml(data.full_name)}\n` +
          `Email: ${escapeHtml(data.email)}\n` +
          `Phone: ${escapeHtml(data.phone)}\n` +
          `City: ${escapeHtml(data.city)}\n` +
          `Motivation: ${escapeHtml(data.motivation)}\n` +
          `Availability: ${escapeHtml(data.availability)}\n` +
          `Skills: ${escapeHtml(data.skills)}`;
        break;
      case 'psychologist':
        text =
          `New psychologist application:\n` +
          `Full name: ${escapeHtml(data.full_name)}\n` +
          `Email: ${escapeHtml(data.email)}\n` +
          `Phone: ${escapeHtml(data.phone)}\n` +
          `City: ${escapeHtml(data.city)}\n` +
          `Specialization: ${escapeHtml(data.specialization)}\n` +
          `Experience years: ${escapeHtml(data.experience_years)}\n` +
          `License: ${escapeHtml(data.license_number)}\n` +
          `About: ${escapeHtml(data.about)}`;
        break;
      case 'partner':
        text =
          `New partner inquiry:\n` +
          `Company: ${escapeHtml(data.company_name)}\n` +
          `Contact: ${escapeHtml(data.contact_name)}\n` +
          `Email: ${escapeHtml(data.email)}\n` +
          `Phone: ${escapeHtml(data.phone)}\n` +
          `Type: ${escapeHtml(data.company_type)}\n` +
          `Message: ${escapeHtml(data.message)}`;
        break;
      case 'chapter':
        text =
          `New chapter application:\n` +
          `Full name: ${escapeHtml(data.full_name)}\n` +
          `Email: ${escapeHtml(data.email)}\n` +
          `Phone: ${escapeHtml(data.phone)}\n` +
          `City: ${escapeHtml(data.city)}\n` +
          `Institution: ${escapeHtml(data.institution)}\n` +
          `Team size: ${escapeHtml(data.team_size)}\n` +
          `Proposal: ${escapeHtml(data.proposal)}`;
        break;
      default:
        text =
          `New submission (${escapeHtml(type)}): \n` + JSON.stringify(data);
    }
  } catch (err) {
    text = `New submission (${escapeHtml(type)}): \n` + JSON.stringify(data);
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT,
        text,
        disable_notification: false,
      }),
    });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.warn('Telegram API error', json);
      return { statusCode: 502, body: 'Telegram API error' };
    }
  } catch (err) {
    console.warn('Failed to send Telegram message', err);
    return { statusCode: 502, body: 'Failed to contact Telegram' };
  }

  return { statusCode: 200, body: 'OK' };
};
