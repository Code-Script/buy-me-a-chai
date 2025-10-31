
# Buy Me a Chai 🍵

A modern web application built with Next.js that allows creators to receive support from their audience through small chai (tea) donations. Think of it as a minimalist, chai-themed support platform!

![Buy Me a Chai Preview](public/preview.png)

## 🚀 Features

- **Easy Authentication**: Quick sign-in with NextAuth.js
- **Secure Payments**: Integrated with Razorpay for safe transactions
- **User Dashboard**: Track your received chais and supporters
- **Custom Profile**: Personalized page at `/username`
- **Real-time Updates**: Instant payment notifications
- **Mobile Responsive**: Works seamlessly on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Payments**: Razorpay
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

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
# MongoDB Connection
MONGODB_URI=your_mongodb_uri

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Razorpay Keys
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
```

## 🚀 Getting Started

1. Run the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. Sign in and set up your profile

4. Share your unique chai link with supporters!

## 📁 Project Structure

```
buy-me-a-chai/
├── app/                   # Next.js 14 app directory
│   ├── page.js           # Homepage
│   ├── layout.js         # Root layout
│   ├── [username]/       # Dynamic user profiles
│   ├── dashboard/        # User dashboard
│   └── api/              # API routes
├── components/           # Reusable React components
├── db/                   # Database configuration
├── models/              # Mongoose models
└── public/              # Static assets
```

## 🔑 API Routes

### Payment Endpoints

`POST /api/razorpay`
- Creates a new payment order
- Returns Razorpay order details

### Authentication Endpoints

`/api/auth/*`
- Handles NextAuth.js authentication
- Manages user sessions

## 💻 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🤝 Contributing

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

- **Code-Script** - [GitHub Profile](https://github.com/Code-Script)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Razorpay for payment processing
- MongoDB for database services
- The open-source community

---

⭐ Star this repo if you find it helpful!

Need help? Open an issue or contact us through GitHub.

