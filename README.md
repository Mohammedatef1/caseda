## Caseda

**Design, customize, and preview premium phone cases in minutes – from first upload to final checkout.**

Production-grade configuration and customization flow for phone cases, built with **Next.js 15 App Router**, **TypeScript**, **Prisma**, **Stripe**, and **UploadThing**.

---

### Features

- **End-to-end case configurator**: Guided multi-step flow (`upload → design → preview → thank-you`) for creating custom phone cases.
- **Image upload & processing**: Drag-and-drop uploads powered by UploadThing with support for large, high-quality images.
- **Visual design tools**: Interactive canvas to position, scale, and tweak artwork on device mockups with smooth animations.
- **Real-time preview**: Live, responsive preview of the final phone case, including device frame and environment context.
- **Persistent data layer**: Prisma-backed database for storing user designs, orders, and configuration metadata.
- **Production-ready checkout**: Stripe integration for secure payments and extensible pricing logic.
- **Modern UI/UX**: Tailwind-based design system, Radix UI primitives, and micro-animations for a polished experience.
- **Type-safe validation**: Zod schemas for validating configuration options and user input across the flow.

---

### Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI / UX**:
  - Tailwind CSS (v4, via `@tailwindcss/postcss` + `postcss.config.mjs`)
  - Radix UI primitives (`@radix-ui/react-*`)
  - Framer Motion / `motion` for animations
  - Custom components in `src/components` (e.g. `Phone`, `Navbar`, `Reviews`, `ui/*`)
- **Data & Backend**:
  - Prisma ORM (`prisma/schema.prisma`) with generated client in `prisma/generated`
  - `src/db` and `src/lib` for backend utilities
- **File Uploads**: UploadThing (`uploadthing`, `@uploadthing/react`, `src/app/api/uploadthing`)
- **Payments**: Stripe (`src/lib/stripe.ts`)
- **State / Data Fetching**: React Query (`@tanstack/react-query`, `QueryProvider`)
- **Runtime**: Node.js 18+ (recommended 20+)

---

### Project Structure (High-Level)

- **`src/app`**
  - `page.tsx`: Landing page / marketing.
  - `configure/*`: Multi-step configuration flow
    - `upload/page.tsx`: Image upload step.
    - `design/*`: Case design tools & actions.
    - `preview/*`: Preview & confirmation.
  - `api/uploadthing/*`: UploadThing API routes.
  - `thank-you/page.tsx`: Post-purchase thank you page.
  - `config/products.tsx`: Product configuration / options.
  - `validators/*`: Zod validators for options/inputs.
- **`src/components`**: Shared UI and layout components.
- **`src/lib`**: Stripe, UploadThing, and utility helpers.
- **`prisma/schema.prisma`**: Database schema.

Use this as a reference when navigating or extending the app.

---

### Installation

1. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Set up environment variables**

   Create a `.env` file in the project root:

  ### Environment Variables

  Exact variable names may differ depending on how you wire up `src/lib/stripe.ts`, `src/lib/uploadThing.ts`, and Prisma, but a typical `.env` for this project will look like:

  ```bash
  # Database
  DATABASE_URL=your-db-url

  # Stripe
  STRIPE_SECRET_KEY=stribe-secret
  STRIPE_WEBHOOK_SECRET=stribe-webhook-secret
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=public-stripe-key

  # UploadThing
  UPLOADTHING_SECRET=upladthing-secret
  UPLOADTHING_APP_ID=uploadthing-app-id

  # Next.js
  NEXT_PUBLIC_APP_URL="https://your-production-domain.com"
  ```

3. **Database setup (Prisma)**

   ```bash
   # adjust this to your database (PostgreSQL, MySQL, etc.) in prisma/schema.prisma

   npx prisma migrate deploy   # in production
   # or
   npx prisma migrate dev      # in development
   ```

---

### Scripts

- **`pnpm dev`** – Run the development server with Turbopack

  ```bash
  pnpm dev
  # http://localhost:3000
  ```

- **`pnpm build`** – Create a production build

  ```bash
  pnpm build
  ```

- **`pnpm start`** – Start the production server (after `build`)

  ```bash
  pnpm start
  # by default on port 3000
  ```

Use the same commands with `npm` instead of `pnpm` if you prefer npm.

---

### Running in Development

1. Ensure your `.env` is configured and the database is reachable.
2. Run migrations (`npx prisma migrate dev`).
3. Start the dev server:

   ```bash
   pnpm dev
   ```

4. Open `http://localhost:3000` in your browser.

---

### License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.
