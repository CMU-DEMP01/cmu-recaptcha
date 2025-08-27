# Captcha Application

This project is a Next.js application that integrates Google reCAPTCHA v2 to provide a secure way to verify user interactions. The application includes a user-friendly interface for submitting forms while ensuring that submissions are made by real users.

## Project Structure

```
capcha
├── .env                  # Environment variables for the application
├── package.json          # npm configuration file
├── next.config.js       # Next.js configuration settings
├── pages                 # Contains all the page components
│   ├── _app.js          # Initializes pages and global styles
│   ├── index.js         # Main entry point for the application
│   └── api              # API routes for server-side logic
│       └── verify-captcha.js # Verifies reCAPTCHA responses
├── components            # Reusable React components
│   ├── CaptchaForm.js   # Component for the reCAPTCHA form
│   └── Layout.js        # Layout component for wrapping content
├── public                # Static files (images, icons, etc.)
├── styles                # CSS files for styling the application
│   ├── globals.css      # Global styles for the application
│   └── Home.module.css  # Scoped styles for the home page
└── README.md            # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd capcha
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add your Google reCAPTCHA keys and redirect URL:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   REDIRECT_URL=https://your.redirect.url
   ```

4. **Run the application:**
   ```
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

The application provides a form that users can fill out. Upon submission, the reCAPTCHA widget will verify that the user is not a bot. If the verification is successful, the form data will be processed accordingly.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.