const escapeHtml = (str) => {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;

  console.log(
    `[${new Date().toISOString()}] Received ${type} submission:`,
    data
  );

  if (!type || !data) {
    return res.status(400).json({ error: 'Missing type or data' });
  }

  const BOT = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT = process.env.TELEGRAM_CHAT_ID;

  if (!BOT || !CHAT) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return res.status(500).json({ error: 'Missing credentials' });
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

  // Send message to Telegram
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT,
          text,
          disable_notification: false,
        }),
      }
    );

    const tgJson = await response.json();
    const tgOk = response.ok && tgJson && tgJson.ok;

    if (!tgOk) {
      console.warn('❌ Telegram API error', tgJson);
      return res
        .status(200)
        .json({ ok: false, telegram: false, telegramError: tgJson });
    }

    console.log(
      `✅ Successfully sent ${type} notification to Telegram (chat_id: ${CHAT})`
    );
    return res.status(200).json({ ok: true, telegram: true, result: tgJson });
  } catch (err) {
    console.error('❌ Failed to send Telegram message', err);
    return res
      .status(500)
      .json({ ok: false, telegram: false, error: String(err) });
  }
}
