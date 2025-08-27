
# 🛡️ Captcha Application

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/CMU-DEMP01/cmu-recaptcha)](https://github.com/CMU-DEMP01/cmu-recaptcha/issues)
[![GitHub stars](https://img.shields.io/github/stars/CMU-DEMP01/cmu-recaptcha)](https://github.com/CMU-DEMP01/cmu-recaptcha/stargazers)

**An application** that integrates **Google reCAPTCHA v2** to securely verify user interactions.  
This project ensures that form submissions are protected against bots while providing a clean, user-friendly interface.

---

## 📂 Project Structure

```

captcha
├── .env                      # Environment variables (ignored in git)
├── package.json              # npm configuration file
├── next.config.js            # Next.js configuration
├── pages/                    # Page components
│   ├── \_app.js               # Global styles & app initialization
│   ├── index.js              # Main entry point
│   └── api/                  # API routes
│       └── verify-captcha.js # reCAPTCHA server verification
├── components/               # Reusable React components
│   ├── CaptchaForm.js        # Captcha-enabled form
│   └── Layout.js             # Layout wrapper
├── public/                   # Static assets (images, icons, etc.)
├── styles/                   # Styling
│   ├── globals.css           # Global styles
│   └── Home.module.css       # Scoped styles
└── README.md                 # Documentation

````

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```sh
   git clone https://github.com/CMU-DEMP01/cmu-recaptcha.git
   cd capcha


2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:

   ```env
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   REDIRECT_URL=https://your.redirect.url
   ```

4. **Run the application**

   ```sh
   npm run dev
   ```

   Open ➝ [http://localhost:3000](http://localhost:3000)

---

## 🚀 Usage

* The app provides a form with **Google reCAPTCHA v2**.
* Users must complete the captcha before submitting the form.
* On success, form data is securely processed.
* Protects your app against **spam** and **bot abuse**.

---

## 📸 Demo

🎥 **Demo video:**  
[▶️ Watch Demo](https://github.com/CMU-DEMP01/cmu-recaptcha/raw/master/Recaptcha.mp4)  

![App Screenshot](https://github.com/CMU-DEMP01/cmu-recaptcha/raw/master/pages/screenshot.png)

 
```bash



## 🤝 Contributing

Contributions are welcome!

* Open an **issue** for bug reports or feature requests.
* Submit a **pull request** with improvements.

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## 🌟 Acknowledgements

* [React](https://reactjs.org/)
* [Google reCAPTCHA](https://www.google.com/recaptcha/)


