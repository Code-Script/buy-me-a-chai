
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

## � Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB database
- Razorpay account

### Installation

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
```env
# Required Environment Variables
MONGODB_URI=your_mongodb_uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Quick Start Guide

1. Configure environment variables
2. Start the development server
3. Visit http://localhost:3000
4. Sign in and complete your profile
5. Share your unique chai link!

## 📚 API Reference

### Payment Endpoints

#### Create Payment Order
```http
POST /api/razorpay
```
Creates a new payment order in Razorpay

**Request Body**
```json
{
  "amount": "number",
  "currency": "string",
  "receipt": "string"
}
```

**Response**
```json
{
  "id": "string",
  "amount": "number",
  "currency": "string",
  "receipt": "string",
  "status": "string"
}
```

### Authentication Endpoints

All authentication is handled through NextAuth.js at:
```http
POST /api/auth/[...nextauth]
```

Supports:
- Session management
- OAuth providers
- JWT handling

## 📁 Project Structure

```
buy-me-a-chai/
├── app/                 # Next.js 14 App Router
│   ├── page.js         # Homepage
│   ├── layout.js       # Root layout
│   ├── [username]/     # User profiles
│   ├── dashboard/      # User dashboard
│   └── api/           # API routes
├── components/         # React components
├── db/                # Database setup
├── models/            # Mongoose models
└── public/            # Static files
```

Key Components:
- `Dashboard.js`: Payment tracking interface
- `PaymentPage.js`: Razorpay integration
- `SessionWrapper.js`: Auth management

## 🤝 Contributing

We love your input! Here's how to contribute:

1. Fork the repo
2. Create your branch: `git checkout -b feature/amazing`
3. Make changes and test thoroughly
4. Commit: `git commit -m 'Add amazing feature'`
5. Push: `git push origin feature/amazing`
6. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Add tests for new features
- Update documentation
- Keep PRs focused and atomic

### Local Development

1. Set up environment variables (see above)
2. Start MongoDB locally or use Atlas
3. Run development server
4. Make your changes
5. Test thoroughly

## 🛡️ Security Features

- **Payment Security**
  - Razorpay's secure checkout
  - Payment data encryption
  - Webhook verification

- **User Security**
  - NextAuth.js session management
  - OAuth 2.0 authentication
  - CSRF protection

- **API Security**
  - Rate limiting
  - CORS configuration
  - Input validation

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

