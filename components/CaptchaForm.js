import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const styles = {
    form: {
        maxWidth: 480,
        margin: '0 auto',
        padding: 20,
        border: '1px solid #e6e6e6',
        borderRadius: 8,
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
    },
    field: { marginBottom: 12, display: 'flex', flexDirection: 'column' },
    label: { marginBottom: 6, fontWeight: 600, color: '#333' },
    input: { padding: '8px 10px', borderRadius: 4, border: '1px solid #ccc', fontSize: 14 },
    button: { marginTop: 14, padding: '10px 14px', borderRadius: 6, background: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer' },
    msg: { marginTop: 12 }
};

const CaptchaForm = () => {
    const [token, setToken] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const recaptchaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((s) => ({ ...s, [name]: value }));
    };

    const handleCaptchaChange = (value) => {
        setToken(value);
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (!token) {
            setMessage('Please complete the reCAPTCHA before submitting.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/verify-captcha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, token })
            });

            const data = await res.json();
            if (res.ok && (data.success || data.message === 'Captcha verified successfully')) {
                setMessage('Form submitted successfully! Redirecting...');
                // optionally redirect to env REDIRECT_URL
                const redirect = process.env.NEXT_PUBLIC_REDIRECT_URL || process.env.REDIRECT_URL;
                if (redirect) setTimeout(() => window.location.href = redirect, 900);
            } else {
                setMessage(data.message || 'Failed to verify reCAPTCHA. Please try again.');
                // reset recaptcha so user can try again
                if (recaptchaRef.current) recaptchaRef.current.reset();
                setToken(null);
            }
        } catch (err) {
            setMessage('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form} aria-label="captcha-form">
            <div style={styles.field}>
                <label style={styles.label} htmlFor="name">Name</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} style={styles.input} required />
            </div>

            <div style={styles.field}>
                <label style={styles.label} htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} style={styles.input} required />
            </div>

            <div style={{ marginTop: 8 }}>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                />
            </div>

            <button type="submit" style={styles.button} disabled={loading} aria-busy={loading}>{loading ? 'Submitting...' : 'Submit'}</button>

            {message && <p style={styles.msg}>{message}</p>}
        </form>
    );
};

export default CaptchaForm;