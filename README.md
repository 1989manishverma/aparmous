# Jashn Golf Estate

Next.js rebuild of the V13 Signature Experiences production site: six-scroll editorial landing page, mobile carousels, day/night elevation toggle, and lead forms.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Lead emails

Forms POST to `/api/lead` and email **office@aparamous.com** and **aparamous@gmail.com**.

Copy `.env.example` to `.env.local` and set SMTP values before going live. Without SMTP, local development still accepts forms and logs them in the terminal.

## Production

```bash
npm run build
npm start
```
