
# Buy Me a Chai ☕️

A modern Next.js application that lets creators receive support through virtual chai (tea) donations. Simple, elegant, and perfect for small appreciations!

![Buy Me a Chai Demo](public/demo-placeholder.png)

## � Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Quick Authentication** - Seamless sign-in with NextAuth.js
- **Secure Payments** - Integrated Razorpay for safe transactions
- **Personal Dashboard** - Track your received chais and supporters
- **Custom Profiles** - Unique page at `/username` for each creator
- **Real-time Updates** - Instant payment notifications
- **Mobile Ready** - Responsive design for all devices
- **PWA Support** - Install as a standalone app

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - React 18
  - Tailwind CSS
  - Progressive Web App (PWA)

- **Backend**
  - Next.js API Routes
  - MongoDB with Mongoose
  - NextAuth.js
  - Razorpay SDK

- **DevOps**
  - Vercel Deployment
  - Environment Configuration
  - PostCSS Optimization

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Code-Script/buy-me-a-chai.git
cd buy-me-a-chai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with:
```env
# MongoDB
MONGODB_URI=[your_mongo_connection_string]

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=[your_nextauth_secret]

# Razorpay
RAZORPAY_KEY_ID=[YOUR_RAZORPAY_KEY_ID]
RAZORPAY_KEY_SECRET=[YOUR_RAZORPAY_KEY_SECRET]

# Any other provider keys
```

Replace placeholders with your real credentials.

## Usage

Run the development server:

```powershell
npm run dev
```

Open http://localhost:3000 in your browser.

Typical flow:

1. Sign in (via the configured provider / NextAuth).
2. Navigate to `/dashboard` to see incoming payments and generate a payment link.
3. Use the payment flow which talks to the backend `/api/razorpay` route.

## API Endpoints

The project includes a few API routes under `app/api` (Next.js route handlers). Key endpoints:

- `POST /api/razorpay` — create a new Razorpay order
	- Request: JSON with amount and metadata
	- Response: Razorpay order object (id, amount, etc.)

- `POST /api/auth/[...nextauth]/route` — NextAuth route handler
	- Handles authentication callbacks, sessions, and providers

Notes:
- Exact request/response shapes are implemented in the route handlers under `app/api/*`. Inspect `app/api/razorpay/route.js` and `app/api/auth/[...nextauth]/route.js` for details.
- Add CSRF/webhook verification for production webhooks.

## Project Structure

Top-level layout (key files/folders):

- `app/` — Next.js App Router pages & API route handlers
	- `layout.js`, `page.js` — entry points
	- `[username]/page.js` — user profile / public page
	- `api/` — route handlers (`auth`, `razorpay`, ...)
- `components/` — React components used across pages
	- `Navbar.js`, `Footer.js`, `Dashboard.js`, `PaymentPage.js`, `SessionWrapper.js`
- `db/` — database connection helpers
	- `connectDb.js` — connects to MongoDB
- `models/` — Mongoose models
	- `User.js`, `Payment.js`
- `public/` — static assets (images, icons)
- `postcss.config.mjs`, `next.config.mjs`, `jsconfig.json` — build & tooling config

This structure intentionally follows Next.js conventions for the App Router.

## Screenshots / Demo

Add real screenshots to `public/` and reference them here. Example markdown:

![Homepage placeholder][image-home]

[image-home]: public/demo-placeholder.png "Homepage"

Or link to a short demo GIF or video.

## Contributing

Contributions are welcome! A simple contributor workflow:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Environment Variables

Required environment variables:

- `MONGODB_URI`: MongoDB connection string
- `NEXTAUTH_URL`: Your app's URL
- `NEXTAUTH_SECRET`: Random string for session security
- `RAZORPAY_KEY_ID`: Razorpay API key
- `RAZORPAY_KEY_SECRET`: Razorpay secret key

## 🔒 Security

- All payments are processed through Razorpay's secure system
- User data is protected with NextAuth.js
- Sessions are encrypted and secure
- CORS and rate limiting implemented on API routes

## 📱 PWA Support

The application is PWA-ready with:
- Offline support
- Install prompt
- Fast loading times

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Author: Code-Script
- Repo: https://github.com/Code-Script/buy-me-a-chai
- For questions or help, open an issue or contact via GitHub profile.

---

If you'd like, I can also:

- Add a `LICENSE` file (MIT) and example `.env.local.example` file
- Add small screenshots captured from a running dev server

Feel free to ask me to make those additions — I can add them directly.

