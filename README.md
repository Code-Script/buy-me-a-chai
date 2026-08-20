# Buy Me a Chai ☕

A creator-support platform built with Next.js. Creators can sign in, customise a public profile, connect Razorpay credentials, and receive chai donations from supporters.

## Features

- Google and GitHub sign-in with NextAuth
- Public creator pages at `/<username>`
- Profile, cover image, and Razorpay account configuration from the dashboard
- Razorpay Checkout payment flow with server-side payment verification
- Top supporters list for completed payments
- Responsive interface styled with Tailwind CSS

## Tech stack

- Next.js 16 and React 19
- NextAuth v5
- MongoDB and Mongoose
- Razorpay
- Tailwind CSS 4

## Getting started

### Prerequisites

- Node.js 18 or newer
- A MongoDB database (local or Atlas)
- Razorpay credentials for receiving payments
- Google and/or GitHub OAuth credentials for sign-in

### Installation

```bash
git clone https://github.com/Code-Script/buy-me-a-chai.git
cd buy-me-a-chai
npm install
```

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb_connection_string

AUTH_SECRET=a_long_random_secret
AUTH_URL=http://localhost:3000
NEXT_PUBLIC_URL=http://localhost:3000

GOOGLE_CLIENT_ID=google_oauth_client_id
GOOGLE_CLIENT_SECRET=google_oauth_client_secret

GITHUB_ID=github_oauth_client_id
GITHUB_SECRET=github_oauth_client_secret
```

`NEXT_PUBLIC_URL` must be updated to your deployed site URL in production. Each creator adds their own Razorpay Key ID and Key Secret through the dashboard; do not commit payment credentials to `.env.local` or the repository.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Sign in, set a unique username in the dashboard, add your Razorpay credentials, then share `http://localhost:3000/<username>`.

### Production

```bash
npm run build
npm start
```

## Payment flow

1. A supporter opens a creator's public page and submits a donation.
2. The app creates a Razorpay order using that creator's configured credentials.
3. Razorpay Checkout completes the transaction.
4. `/api/razorpay` verifies the Razorpay signature and marks the payment as complete.
5. Completed payments appear in the creator's top-supporters list.

## Project structure

```text
app/                 Next.js routes, pages, and API handlers
actions/             Server actions for users and payments
components/          Dashboard, payment page, navigation, and shared UI
db/                  MongoDB connection helper
models/              Mongoose User and Payment models
auth.js               NextAuth configuration
public/              Static images and media
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with Turbopack. |
| `npm run build` | Create a production build. |
| `npm start` | Start the production server. |
| `npm run lint` | Run the configured Next.js lint command. |

## Security notes

- Keep OAuth and Razorpay secrets out of source control.
- Use HTTPS and a production `NEXT_PUBLIC_URL` when deploying.
- Razorpay payment completion is only recorded after signature verification on the server.

## Contributing

1. Create a feature branch.
2. Make and test your changes locally.
3. Run `npm run build` before opening a pull request.
4. Describe any required environment-variable or database changes in the pull request.

## License

This project is private. Add a license file before distributing or open-sourcing it.
