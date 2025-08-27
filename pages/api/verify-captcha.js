export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });

    const { token, captcha } = req.body || {};
    const userToken = token || captcha;
    if (!userToken) return res.status(400).json({ success: false, message: 'reCAPTCHA token is required' });

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) return res.status(500).json({ success: false, message: 'Server missing reCAPTCHA secret key' });

    const params = new URLSearchParams();
    params.append('secret', secretKey);
    params.append('response', userToken);

    try {
        const r = await fetch('https://www.google.com/recaptcha/api/siteverify', { method: 'POST', body: params });
        const data = await r.json();

        if (data.success) {
            return res.status(200).json({ success: true, message: 'Captcha verified successfully', data });
        }

        return res.status(400).json({ success: false, message: 'Captcha verification failed', data });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Verification request failed', error: String(err) });
    }
}