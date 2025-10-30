
# Buy Me a Chai ☕️

Elegant, minimal Next.js app to let friends buy you a chai — with user sessions, a dashboard, and Razorpay integration for payments.

<!-- Short demo image placeholder -->
![App demo placeholder](public/demo-placeholder.png)

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Tech Stack / Dependencies](#tech-stack--dependencies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Screenshots / Demo](#screenshots--demo)
- [Contributing](#contributing)
- [License](#license)
- [Contact / Author](#contact--author)

## Project Summary

Buy Me a Chai is a small Next.js application that provides a lightweight way for users to accept small payments (a "chai") from friends. It includes:

- User authentication (NextAuth)
- A simple dashboard to view payments
- Razorpay integration to handle payments
- MongoDB connection for persistence

This repository is intended as a small production-ready example or starter template you can adapt.

## Features

- User sign-in / session management
- Create and manage payment orders via Razorpay
- Dashboard showing incoming payments and basic info
- Clean component-based UI (React + Next.js app directory)
- Config driven (environment variables for keys and DB)

## Tech Stack / Dependencies

- Next.js (App Router)
- React
- NextAuth.js (authentication)
- Razorpay SDK (payments)
- MongoDB (Mongoose) — connection in `db/connectDb.js`
- PostCSS (styles)

For the exact dependency versions, see `package.json`.

## Installation

Clone the repo and install dependencies:

```powershell
git clone https://github.com/Code-Script/buy-me-a-chai.git
cd buy-me-a-chai/buy-me-a-chai
npm install
```

Notes:
- You can use `yarn` or `pnpm` if you prefer.

## Configuration

Create a `.env.local` in the project root and add the required environment variables. Example:

```env
# MongoDB
MONGODB_URI=[your_mongo_connection_string]

# NextAuth
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
# or: npm run build && npm run start
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
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make changes and add tests where applicable
4. Commit and push: `git push origin feat/my-feature`
5. Open a Pull Request describing your changes

Please follow these guidelines:

- Keep changes focused to a single concern per PR
- Include descriptive commit messages
- Run linters and formatters before pushing
- Add or update documentation for new behavior

If you want help picking a first issue, open an issue and tag it `good first issue`.

## License

This project is open source. Use the following license or replace it with your preferred license.

MIT License — see `LICENSE` (or add one) for full terms.

## Contact / Author

- Author: Code-Script
- Repo: https://github.com/Code-Script/buy-me-a-chai
- For questions or help, open an issue or contact via GitHub profile.

---

If you'd like, I can also:

- Add a `LICENSE` file (MIT) and example `.env.local.example` file
- Add small screenshots captured from a running dev server

Feel free to ask me to make those additions — I can add them directly.

