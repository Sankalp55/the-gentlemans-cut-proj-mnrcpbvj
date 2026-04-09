import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarMinimal } from '@/components/blocks/NavbarMinimal'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ironwood Barber Co. | Premium Cuts, Shaves & Scalp Care',
  description:
    'A dark, modern barbershop for precision haircuts, beard grooming, styling, coloring, hot towel shaves, and scalp treatments. Book your appointment at Ironwood Barber Co.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <NavbarMinimal
          logo="Ironwood Barber Co."
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Team', href: '/team' },
            { label: 'About', href: '/about' },
            { label: 'Contact / Book', href: '/contact#booking' },
          ]}
          ctaLabel="Book"
          ctaHref="/contact#booking"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Ironwood Barber Co."
          description="Precision cuts. Ritual-level shaves. Quiet confidence. Ironwood is a calm, detail-first barbershop built for consistent results—so your look holds up in the mirror and in real life."
          columns={[
            {
              title: 'Services',
              links: [
                { label: 'Services & Pricing', href: '/services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Scalp Treatments', href: '/services#scalp' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Team', href: '/team' },
                { label: 'Contact & Booking', href: '/contact#booking' },
              ],
            },
            {
              title: 'Hours',
              links: [
                { label: 'Mon–Fri: 10–7', href: '/contact' },
                { label: 'Sat: 10–5', href: '/contact' },
                { label: 'Sun: Closed', href: '/contact' },
              ],
            },
          ]}
          copyright="© 2026 Ironwood Barber Co. All rights reserved."
        />
      </body>
    </html>
  )
}
