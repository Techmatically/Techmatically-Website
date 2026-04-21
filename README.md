# Techmatically

A modern company website for Techmatically, built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

This project presents Techmatically's software, IT, infrastructure, and packaged business solutions through a clean multi-page marketing experience with animated sections, reusable layout components, and a contact flow ready to be extended.

---

## Highlights

- Modern landing page with animated hero and reveal-on-scroll sections
- Dedicated service pages for About, IT Services, Development Services, Hardware & Networking, and Solutions
- Reusable site-wide header, footer, container, and page header components
- Contact page UI for inquiries plus a starter API route at `/api/contact`
- Responsive layout built for desktop and mobile screens
- Tailwind CSS v4 styling with custom brand tokens and motion accents

---

## Built With

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Icons

---

## Pages

- `/` - Homepage
- `/about` - Company overview, vision, mission, and quality approach
- `/it-services` - IT consulting, outsourcing, and installation services
- `/development-services` - Application and portal development offerings
- `/hardware-networking` - Networking, maintenance, and partner-led solutions
- `/solutions` - Packaged business and ERP-style solution modules
- `/contact` - Contact information and inquiry form
- `/api/contact` - Placeholder POST endpoint for future form handling

---

## Project Structure

```text
techmatically/
|-- app/
|   |-- (pages)/
|   |-- api/contact/
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- common/
|   |-- motion/
|   |-- contact/
|   `-- site/
|-- lib/
|   `-- navigation.ts
|-- public/
`-- README.md
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Set Environment Variables

```bash
SMTP_HOST=mail.SMTP-HOST.com
SMTP_PORT= your-port
SMTP_USER=notification@SMTP_USER.com
SMTP_PASS= Your-password
SMTP_RECEIVER=mail@SMTP_RECEIVER.com
```

### 4. Open the app

Visit [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

```bash
npm run dev    # Start local development server
npm run build  # Create production build
npm run start  # Run production server
npm run lint   # Run ESLint
```

---

## Design Notes

This project uses a clean corporate visual style with:

- Gradient brand accents
- Motion-based section reveals
- Reusable content containers
- Sticky navigation and call-to-action focused layout
- Light and dark theme-aware color tokens through CSS variables

---

## Contact Form Status

The UI for the contact page is in place, and the repository already includes a starter `POST /api/contact` route.

Right now, the API validates input and returns a success response, but it does not yet send email or store submissions. It is ready to be connected to a provider such as Resend, SendGrid, or a CRM workflow later.

---

## Customization

A few easy places to personalize the site:

- Update navigation links in `lib/navigation.ts`
- Adjust branding colors in `app/globals.css`
- Replace the logo and media in `public/`
- Expand page content inside `app/(pages)/`
- Connect the contact form to a real backend workflow

---

## Deployment

You can deploy this project on any platform that supports Next.js, including:

- Vercel
- Netlify
- Docker-based hosting
- Traditional Node.js server environments

For production deployment, build the app with:

```bash
npm run build
npm run start
```

---

## Roadmap

Potential next improvements:

- Connect the contact form to email or CRM delivery
- Add real project screenshots and service visuals
- Improve SEO metadata per page
- Add analytics and conversion tracking
- Add content management support for easier updates

---

## License

This project is currently private and intended for Techmatically.
