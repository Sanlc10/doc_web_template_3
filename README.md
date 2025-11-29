# Dr. Marco Lopez - Rheumatology Landing Page

A premium, luxurious landing page for Dr. Marco Lopez, a board-certified rheumatologist. Built with Next.js, React, Tailwind CSS, and shadcn/ui.

## Features

- **Premium Design System**: Custom color palette (deep teal, warm bronze, sage green) with elegant typography (Playfair Display + Inter)
- **Smooth Animations**: Framer Motion scroll-triggered animations throughout
- **Responsive Design**: Fully responsive across all devices
- **Interactive Contact Form**: With real-time validation using React Hook Form and Zod
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Accessible**: WCAG 2.1 AA compliant design

## Sections

1. **Hero** - Stunning introduction with doctor photo, floating background elements, and CTAs
2. **About** - Biography and credentials grid showcasing Dr. Lopez's qualifications
3. **Services** - Comprehensive rheumatology services with detailed descriptions
4. **Contact** - Interactive form with office information and map placeholder
5. **Footer** - Complete practice information and legal links

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (New York style)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **Typography**: Google Fonts (Playfair Display, Inter, Italiana)

## Getting Started

### Development Server

The server is already running at:
- Local: http://localhost:3000
- Network: http://172.29.176.1:3000

To start it again in the future:
```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Updating Content

1. **Doctor's Photo**: Replace the placeholder in `components/sections/Hero.tsx` with an actual image
2. **Office Information**: Edit contact details in `components/sections/Contact.tsx`
3. **Biography**: Update the text in `components/sections/About.tsx`
4. **Services**: Modify services in `config/services.ts`

### Colors

The color palette is defined in `app/globals.css`:
- **Primary (Teal)**: Medical trust + sophistication
- **Secondary (Bronze)**: Luxury + warmth
- **Accent (Sage)**: Healing + organic

### Typography

Fonts are configured in `app/layout.tsx`:
- Headings: Playfair Display (elegant serif)
- Body: Inter (modern sans-serif)
- Accent: Italiana (decorative)

## Contact Form

The contact form API route is at `app/api/contact/route.ts`. Currently, it logs submissions to the console.

### To enable email notifications:

1. Install an email service (e.g., Resend, SendGrid):
   ```bash
   npm install resend
   ```

2. Update `app/api/contact/route.ts` to send emails

3. Add environment variables to `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   ```

## Project Structure

```
├── app/
│   ├── api/contact/route.ts     # Contact form API
│   ├── globals.css              # Design system
│   ├── layout.tsx               # Root layout + fonts
│   └── page.tsx                 # Main landing page
├── components/
│   ├── forms/
│   │   └── ContactForm.tsx      # Contact form with validation
│   ├── sections/
│   │   ├── Hero.tsx             # Hero section
│   │   ├── About.tsx            # About section
│   │   ├── Services.tsx         # Services section
│   │   ├── Contact.tsx          # Contact section
│   │   └── Footer.tsx           # Footer
│   ├── shared/
│   │   ├── AnimatedSection.tsx  # Scroll animation wrapper
│   │   └── SectionHeading.tsx   # Consistent section headers
│   └── ui/                      # shadcn/ui components
├── config/
│   └── services.ts              # Services data
├── lib/
│   ├── animations.ts            # Framer Motion variants
│   ├── utils.ts                 # Utility functions
│   └── validations.ts           # Zod schemas
└── public/images/               # Add images here
```

## Performance

- Lighthouse Performance target: 90+
- All images should be optimized (use Next.js Image component)
- Fonts are optimized with `next/font`
- Animations use CSS and Framer Motion for smooth 60fps

## Accessibility

- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast ratio: 4.5:1+
- Alt text for all images

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms

- Netlify
- Railway
- Self-hosted with Docker

## Next Steps

1. Replace placeholder doctor photo with professional headshot
2. Update office address, phone, and email
3. Add real content to biography section
4. Connect contact form to email service
5. Add Google Maps integration
6. Set up analytics (Google Analytics 4)
7. Configure custom domain

## License

© 2025 Dr. Marco Lopez. All rights reserved.
