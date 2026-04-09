import { ContactForm } from '@/components/blocks/ContactForm'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Book your chair.</h1>
            <p className="mt-4 text-muted-foreground">
              Send a booking request and we’ll confirm your time and barber. If you’re not sure what
              to choose, pick “Haircut” and explain your goal—our team will guide you and confirm
              the right service length.
            </p>
            <div className="mt-8">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 font-medium"
              >
                Jump to Booking Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 md:py-28 px-4 md:px-8 bg-muted scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="Booking request"
            subheadline="Client-side only. We’ll follow up to confirm availability. If you prefer, you can also email or call—details below."
            contactInfo={[
              { label: 'Phone', value: '(555) 014-2299' },
              { label: 'Email', value: 'book@ironwoodbarber.co' },
              { label: 'Hours', value: 'Mon–Fri 10–7 • Sat 10–5 • Sun closed' },
              { label: 'Location', value: '221 Ironwood Ave, Suite B, Your City' },
            ]}
          />

          <div className="mt-8 rounded-xl border border-border bg-background p-6">
            <h2 className="text-lg font-semibold">What to include (for faster confirmation)</h2>
            <p className="mt-2 text-muted-foreground">
              In the message field, tell us: service, preferred barber (or “no preference”), your
              ideal date/time window, and any notes like reference photos, cowlicks, sensitive skin,
              or beard growth direction. The more context we have, the cleaner the result.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              If your form submission doesn’t go through on your device, email us directly at{' '}
              <a className="underline underline-offset-4 hover:text-foreground" href="mailto:book@ironwoodbarber.co">
                book@ironwoodbarber.co
              </a>{' '}
              with the same details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Policies</h2>
            <p className="mt-4 text-muted-foreground">
              Clear expectations keep the schedule clean. These policies protect your time and the
              next client’s appointment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Late arrivals',
                description:
                  '10+ minutes late may reduce service time or require reschedule to keep the day on track.',
              },
              {
                title: 'Cancellations',
                description:
                  'Please cancel at least 12 hours in advance when possible so we can offer the slot to someone else.',
              },
              {
                title: 'Consults for color',
                description:
                  'Some color services require a quick consult to confirm timing and price. Add photos and goals in your request.',
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Not sure what to book?"
            description='Choose “Haircut” and explain your goal in notes—we’ll guide you.'
            ctaLabel="Start a Booking Request"
            ctaHref="/contact#booking"
          />
        </div>
      </section>
    </div>
  )
}
