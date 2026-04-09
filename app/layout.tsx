import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarSticky } from '@/components/blocks/NavbarSticky'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Gentlemans Cut — Premium Cuts, Beards & Hot Towel Shaves',
  description:
    'A dark, refined barbershop offering precision haircuts, beard grooming, styling, coloring, hot towel shaves, and scalp treatments. Book your appointment online.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <NavbarSticky
          logo="The Gentlemans Cut"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Team', href: '/team' },
            { label: 'About', href: '/about' },
            { label: 'Contact & Booking', href: '/contact' },
          ]}
          ctaLabel="Book Now"
          ctaHref="/contact#booking"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="The Gentlemans Cut"
          description="Precision cuts, ritual-level shaves, and scalp care in a dark, refined space. Book in minutes—walk out sharper."
          columns={[
            {
              title: 'Shop',
              links: [
                { label: 'Gallery', href: '/gallery' },
                { label: 'Team', href: '/team' },
                { label: 'About', href: '/about' },
              ],
            },
            {
              title: 'Services',
              links: [
                { label: 'Services Overview', href: '/services' },
                { label: 'Pricing', href: '/services#pricing' },
                { label: 'Service FAQ', href: '/services#faq' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'Our Standards', href: '/about#standards' },
                { label: 'Our Story', href: '/about#story' },
                { label: 'Contact & Booking', href: '/contact' },
              ],
            },
            {
              title: 'Contact',
              links: [
                { label: 'Book an Appointment', href: '/contact#booking' },
                { label: 'Visit the Shop', href: '/contact#visit' },
                { label: 'Call: +1 (000) 000-0000', href: 'tel:+10000000000' },
              ],
            },
          ]}
          copyright="© 2026 The Gentlemans Cut. All rights reserved."
        />
      </body>
    </html>
  )
}
