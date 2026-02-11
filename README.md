# Relay

> **Start Chatting without frictions.**
> One click to create a room. One link to invite your team. Zero barriers to communication.

🌐 **Live Demo:** [https://getrealy.vercel.app](https://getrealy.vercel.app)

---

## ✨ Features

- **🚀 Instant Rooms**: Create and join chat rooms in seconds. No unnecessary barriers.
- **🔒 Privacy First**: Designed for private, ephemeral communication.
- **⚡ Real-Time**: Powered by high-performance WebSockets for instant message delivery.
- **📂 File Sharing**: Seamlessly share images and files (AWS S3 + CloudFront).
- **🔑 Secure Authentication**: Optional Google and GitHub login for managing persistent rooms.
- **🎨 Modern UI**: Beautiful, responsive interface built with Tailwind CSS and Framer Motion.
- **📊 User Dashboard**: Track your room usage and manage active sessions.

---

## 🛠 Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS, Framer Motion
- **Components:** Radix UI, Lucide React
- **State Management:** Zustand

### Backend & Infrastructure
- **API Server:** Node.js, Express
- **WebSocket Server:** Native `ws` library for high-performance real-time communication
- **Database:** PostgreSQL (Neon Serverless)
- **ORM:** Prisma
- **Caching & Pub/Sub:** Redis (Upstash)
- **Storage:** AWS S3 + CloudFront CDN
- **Monorepo:** Turborepo

### Deployment
- **Frontend:** Vercel
- **Backend:** Railway

---

## 🚀 Quick Start

Follow these steps to run Relay locally on your machine.

### Prerequisites
- Node.js 18+
- pnpm (Preferred package manager)
- PostgreSQL (Local or Cloud)
- Redis (Local or Cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/relay.git
   cd relay
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   Copy the example environment files and update them with your credentials.
   
   **Root/Monorepo:**
   ```bash
   cp .env.example .env
   ```
   
   **Frontend (Apps/www):**
   ```bash
   cp apps/www/.env.example apps/www/.env
   ```
   
   **Server (Apps/server):**
   ```bash
   cp apps/server/.env.example apps/server/.env
   ```

4. **Database Setup**
   Initialize the database via Prisma.
   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Start Development Server**
   Run the frontend, backend, and websocket server concurrently.
   ```bash
   pnpm dev
   ```

The application should now be running at `http://localhost:3000`.

---