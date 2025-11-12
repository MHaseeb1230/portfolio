This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Install dependencies

```bash
npm install
# or yarn / pnpm / bun
```

### 2. Configure environment variables

Create a `.env.local` file in the project root (the file is git ignored) and add your Vapi public key:

```
NEXT_PUBLIC_VAPI_PUBLIC_KEY=pk_live_xxx
```

You can generate or rotate the key from your [Vapi dashboard](https://vapi.ai/). Keep production secrets in your hosting provider’s environment settings (e.g. Vercel → Project → Settings → Environment Variables).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview the site. The app uses Next.js App Router with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load the Geist typeface, so the dev server must be running (don’t open the build output directly from the filesystem).

### 4. Production build

```bash
npm run build
npm run start
```

The build command uses the standard Next.js compiler; run `npm run start` to serve the optimised bundle locally prior to deployment.

## Deployment

Deploy straight to [Vercel](https://vercel.com/) for the best experience:

1. Push this repo to GitHub (the `.env.local` file stays local).
2. Import the project in Vercel and add `NEXT_PUBLIC_VAPI_PUBLIC_KEY` to the project’s environment variables.
3. Vercel will build and deploy automatically on each push.

Refer to the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for alternative hosting options.
