import React from 'react';
import Head from 'next/head';
import CaptchaForm from '../components/CaptchaForm';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>Captcha Verification for CMU </title>
                <meta name="description" content="A simple captcha verification application using Google reCAPTCHA v2." />
            </Head>

            <section style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 520 }}>
                    <h2 style={{ marginTop: 0 }}>Please complete the form</h2>
                    <CaptchaForm />
                </div>
            </section>
        </Layout>
    );
};

export default Home;