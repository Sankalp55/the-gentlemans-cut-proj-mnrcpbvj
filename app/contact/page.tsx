import { ContactForm } from '@/components/blocks/ContactForm'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'

export const metadata = {
  title: 'Contact & Booking — The Gentlemans Cut',
  description:
    'Send a booking request, view shop hours, and get in touch. Client-side form only; we confirm by text/email.',
}

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-muted-foreground">Contact & Booking</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Book your appointment.</h1>
            <p className="mt-4 text-muted-foreground">
              Fast booking, clear pricing, and a calm experience from start to finish. Send a request
              with your preferred date/time and any notes about your hair goals or skin sensitivities.
              We’ll confirm by text or email.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-primary-foreground font-medium"
              >
                Jump to Booking Form
              </a>
              <a
                href="tel:+10000000000"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-3 font-medium"
              >
                Call the Shop
              </a>
            </div>
          </div>

          <div id="visit" className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Visit The Gentlemans Cut</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted-foreground">Address</span>
                <span className="text-right">123 Midnight Ave, Suite 4, Your City</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted-foreground">Phone</span>
                <span className="text-right">+1 (000) 000-0000</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted-foreground">Email</span>
                <span className="text-right">hello@noirrazor.com</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-muted-foreground">Hours</span>
                <span className="text-right">Mon–Fri 10–7 • Sat 9–6 • Sun 11–4</span>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-background">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=123%20Midnight%20Ave&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Tip: If you’re booking for a wedding party or group, add notes with headcount and timing
              so we can coordinate back-to-back slots.
            </p>
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="Booking request"
            subheadline="Client-side form only. We’ll confirm by text/email. We only use your info to confirm your appointment."
            contactInfo={[
              { label: 'Phone', value: '+1 (000) 000-0000' },
              { label: 'Email', value: 'hello@noirrazor.com' },
              { label: 'Hours', value: 'Mon–Fri 10–7 • Sat 9–6 • Sun 11–4' },
            ]}
          />

          <div className="mt-10 rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">What to include in your notes</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The more context you share, the more accurately we can confirm the right service and
              timing.
            </p>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="rounded-lg border border-border bg-background p-4">
                Reference: “low skin fade” / “classic taper” / “medium scissor length”
              </li>
              <li className="rounded-lg border border-border bg-background p-4">
                Beard: current length + whether you want sharp edges or a softer natural line
              </li>
              <li className="rounded-lg border border-border bg-background p-4">
                Skin/scalp: sensitivity, dryness, irritation, or product allergies
              </li>
              <li className="rounded-lg border border-border bg-background p-4">
                Timing: event date, travel schedule, or how long you want the cut to last
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Booking FAQ"
            items={[
              {
                question: 'How far in advance should I book?',
                answer:
                  'Weekdays often have same-week openings; weekends typically book 1–2 weeks out. If you have an event, booking earlier helps us match timing.',
              },
              {
                question: 'What if I’m not sure what service to choose?',
                answer:
                  'Choose Haircut or Signature and add notes. We’ll confirm the right option with you based on your goals and the time needed.',
              },
              {
                question: 'Do you handle sensitive skin?',
                answer:
                  'Yes. Tell us in the notes and we’ll adjust products and shaving technique to prioritize comfort.',
              },
              {
                question: 'What’s your cancellation policy?',
                answer:
                  'Please give at least 12 hours notice so we can offer the slot to another client.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTABanner
            headline="Walk out sharper—today."
            description="Send a booking request now and we’ll confirm your time shortly."
            ctaLabel="Send Booking Request"
            ctaHref="/contact#booking"
          />
        </div>
      </section>
    </div>
  )
}
