const fetch = global.fetch || require('node-fetch');

const escapeHtml = (str) => {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS,POST,PUT,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

exports.handler = async function (event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { type, data } = body || {};
  if (!type || !data) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Missing type or data' }) };
  }

  const BOT = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT = process.env.TELEGRAM_CHAT_ID;

  if (!BOT || !CHAT) {
    return { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Missing credentials' }) };
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
        text = `New submission (${escapeHtml(type)}): \n` + JSON.stringify(data);
    }
  } catch (err) {
    text = `New submission (${escapeHtml(type)}): \n` + JSON.stringify(data);
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT, text, disable_notification: false }),
    });

    const tgJson = await response.json();
    const tgOk = response.ok && tgJson && tgJson.ok;

    if (!tgOk) {
      return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ ok: false, telegram: false, telegramError: tgJson }) };
    }

    return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ ok: true, telegram: true, result: tgJson }) };
  } catch (err) {
    return { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify({ ok: false, telegram: false, error: String(err) }) };
  }
};
