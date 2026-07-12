// api/contact.js — Vercel serverless function (Node.js runtime, zero npm
// dependencies — uses the built-in global fetch(), same as any modern
// Node 18+ runtime Vercel provides).
//
// Receives the RSF contact form POST and sends two emails via Brevo's
// transactional email API (same provider MobilityGrid already uses, per
// Shayla's reference screenshots 2026-07-12): one notifying RSF of the new
// inquiry, one confirming receipt to whoever submitted the form.
//
// Needs ONE environment variable, set in Vercel's dashboard (Project ->
// Settings -> Environment Variables), never hardcoded here:
//   BREVO_API_KEY
//
// Sender + lead-notification address confirmed by Shayla 2026-07-12:
// mobilitygrid@gmail.com is used for the actual email sending (mail to the
// customer who filled the form goes out from this address; the lead
// notification also lands here). NOTE: this exact address must be added
// and verified as a sender in whichever Brevo account's BREVO_API_KEY is
// set above (Brevo emails a confirmation link to the inbox), or Brevo will
// reject the send.
//
// This is intentionally DIFFERENT from the address shown on the website's
// own footer (amit@mobilitygrid.in, in Index.html) -- that's just the
// visible/display contact text on the page, not tied to how mail is
// actually sent. Don't "fix" them to match -- confirmed as a deliberate
// split by Shayla 2026-07-12.

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

const SENDER = { name: 'RazorSharpFocus', email: 'mobilitygrid@gmail.com' };
const LEAD_NOTIFY_TO = [{ email: 'mobilitygrid@gmail.com', name: 'RazorSharpFocus Team' }];

async function sendBrevoEmail(apiKey, { to, subject, htmlContent, replyTo }) {
  const res = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ sender: SENDER, to, subject, htmlContent, ...(replyTo ? { replyTo } : {}) }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Brevo send failed (${res.status}): ${body}`);
  }
  return res.json();
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function rowsHtml(rows) {
  return rows.map(([label, value]) => `
    <tr>
      <td style="padding:8px 16px 8px 0;color:#4b5563;font-size:14px;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td>
      <td style="padding:8px 0;color:#0a0f1c;font-size:14px;font-weight:600">${escapeHtml(value)}</td>
    </tr>`).join('');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('[contact] BREVO_API_KEY not set in Vercel environment variables');
    return res.status(500).json({ success: false, message: 'Server not configured' });
  }

  const body = req.body || {};
  // Honeypot: a hidden field real users never fill in; bots often do.
  if (body.botcheck) return res.status(200).json({ success: true });

  const firstName = (body.first_name || '').trim();
  const lastName  = (body.last_name  || '').trim();
  const email     = (body.email      || '').trim();
  const company   = (body.company    || '').trim();
  const role      = (body.role       || '').trim();
  const message   = (body.message    || '').trim();

  if (!firstName || !lastName || !email || !company) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address' });
  }

  const submittedAt = new Date().toLocaleString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata',
  });

  const leadHtml = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
      <p style="color:#0d9488;font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 4px">RazorSharpFocus — The Operating Intelligence Layer</p>
      <h2 style="color:#0a0f1c;font-size:18px;margin:0 0 16px">New Inquiry from ${escapeHtml(firstName)} ${escapeHtml(lastName)}</h2>
      <table cellpadding="0" cellspacing="0">${rowsHtml([
        ['Name', `${firstName} ${lastName}`],
        ['Email', email],
        ['Company', company],
        ['Reaching out as', role || '—'],
        ['Message', message || '(none provided)'],
        ['Submitted', submittedAt],
      ])}</table>
      <p style="margin-top:20px;padding:12px 16px;background:#f0fdfa;border-left:3px solid #0d9488;color:#0a0f1c;font-size:13px">
        <strong>Action required:</strong> Respond within 24 hours, per the website's promise.
      </p>
    </div>`;

  const confirmHtml = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto">
      <p style="color:#0d9488;font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 4px">RazorSharpFocus — The Operating Intelligence Layer</p>
      <p style="color:#0a0f1c;font-size:15px">Dear ${escapeHtml(firstName)} ${escapeHtml(lastName)},</p>
      <p style="color:#4b5563;font-size:14px;line-height:1.6">Thank you for reaching out to RazorSharpFocus. We have received your details and will be in touch within 24 hours to continue the conversation.</p>
      <table cellpadding="0" cellspacing="0">${rowsHtml([
        ['Name', `${firstName} ${lastName}`],
        ['Company', company],
        ['Reaching out as', role || '—'],
      ])}</table>
      <p style="color:#4b5563;font-size:14px;margin-top:20px">Regards,<br/>Team RazorSharpFocus</p>
      <p style="color:#9ca3af;font-size:12px;margin-top:24px">mobilitygrid@gmail.com · razorsharpfocus.com</p>
    </div>`;

  try {
    await sendBrevoEmail(apiKey, {
      to: LEAD_NOTIFY_TO,
      subject: `🔔 New Inquiry | ${company} | ${role || 'RSF Website'}`,
      htmlContent: leadHtml,
      replyTo: { email, name: `${firstName} ${lastName}` },
    });
    await sendBrevoEmail(apiKey, {
      to: [{ email, name: `${firstName} ${lastName}` }],
      subject: 'Thank You for Reaching Out to RazorSharpFocus',
      htmlContent: confirmHtml,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[contact] Brevo send error:', err.message);
    return res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
};
