import React from 'react';

const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: '#f7f8fb',
    padding: '36px 12px'
};

const headerStyle = { marginBottom: 18, textAlign: 'center' };

const footerStyle = { marginTop: 28, fontSize: 12, color: '#666' };

const Layout = ({ children }) => {
    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <h1 style={{ margin: 0 }}>CMU Captcha Verification</h1>
                <p style={{ margin: 6, color: '#444' }}>Protect your websites  with Google reCAPTCHA v2</p>
            </header>

            <main style={{ width: '100%', maxWidth: 960 }}>{children}</main>

            <footer style={footerStyle}>
                <p>&copy; {new Date().getFullYear()} CMU DEMP. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;