import { PricingTable } from '@/components/blocks/PricingTable'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Services built for precision—and repeatability.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Straightforward pricing, thoughtful upgrades, and results you can count on. We keep
              the menu simple: core services that cover most goals, plus add-ons that dial in the
              details without turning your appointment into an upsell.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact#booking"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 font-medium"
              >
                Request a Booking
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 font-medium hover:bg-muted transition-colors"
              >
                See Real Results
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Haircut',
                description: 'Consultation + cut + wash (optional) + style finish.',
                price: '$45',
                duration: '45 min',
              },
              {
                title: 'Beard Grooming',
                description: 'Shape, line-up, trim, and conditioning finish.',
                price: '$30',
                duration: '30 min',
              },
              {
                title: 'Hair Styling',
                description: 'Blow-dry + product set + direction for your daily routine.',
                price: '$25',
                duration: '25 min',
              },
              {
                title: 'Hair Coloring',
                description: 'Gray blending or full color (consult required).',
                price: 'From $85',
                duration: '60–120 min',
              },
              {
                title: 'Hot Towel Shave',
                description: 'Hot towel prep + straight razor shave + soothing finish.',
                price: '$55',
                duration: '45 min',
              },
              {
                title: 'Scalp Treatment',
                description: 'Exfoliate + cleanse + massage + hydration or anti-buildup focus.',
                price: '$40',
                duration: '35 min',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold">{s.title}</h2>
                  <div className="text-right">
                    <div className="text-lg font-semibold">{s.price}</div>
                    <div className="text-sm text-muted-foreground">{s.duration}</div>
                  </div>
                </div>
                <p className="mt-3 text-muted-foreground">{s.description}</p>
                <div className="mt-6">
                  <a
                    href="/contact#booking"
                    className="inline-flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium hover:bg-background border border-border transition-colors"
                  >
                    Request this service
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div id="scalp" className="mt-14 rounded-xl border border-border bg-muted p-8">
            <h3 className="text-2xl font-semibold">Scalp care that supports better cuts</h3>
            <p className="mt-3 text-muted-foreground max-w-3xl">
              Dryness, buildup, and tension change how hair sits and how clean a fade looks. Our
              scalp treatment is designed to reset the foundation—so your style looks better and
              feels better between visits.
            </p>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <li className="rounded-lg border border-border bg-background p-4">
                <span className="font-medium text-foreground">Exfoliation</span>
                <div className="mt-1">Lifts buildup so product performs the way it should.</div>
              </li>
              <li className="rounded-lg border border-border bg-background p-4">
                <span className="font-medium text-foreground">Massage</span>
                <div className="mt-1">Reduces tension and helps you leave feeling reset.</div>
              </li>
              <li className="rounded-lg border border-border bg-background p-4">
                <span className="font-medium text-foreground">Hydration</span>
                <div className="mt-1">Targets dryness and flaking without heavy residue.</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Popular combos"
            subheadline="Best value packages—built from what clients actually book."
            tiers={[
              {
                name: 'The Standard',
                price: '$65',
                period: 'per visit',
                features: ['Consultation', 'Detailed line-up', 'Finish styling', 'Aftercare tips'],
                ctaLabel: 'Book The Standard',
                ctaHref: '/contact#booking',
              },
              {
                name: 'The Ritual',
                price: '$95',
                period: 'per visit',
                highlighted: true,
                features: [
                  'Hot towel prep',
                  'Straight razor finish',
                  'Soothing post-shave',
                  'Premium styling',
                ],
                ctaLabel: 'Book The Ritual',
                ctaHref: '/contact#booking',
              },
              {
                name: 'Reset',
                price: '$110',
                period: 'per visit',
                features: [
                  'Exfoliation + cleanse',
                  'Massage + hydration',
                  'Style finish',
                  'Routine recommendations',
                ],
                ctaLabel: 'Book Reset',
                ctaHref: '/contact#booking',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Add-ons & upgrades</h2>
            <p className="mt-4 text-muted-foreground">
              Dial in the details—add during your booking request. If you’re unsure, mention your
              goal and we’ll confirm what fits the time block.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Neck cleanup (between cuts)',
                description: 'Quick clean line refresh.',
                meta: '$15 • 15 min',
              },
              {
                title: 'Eyebrow tidy',
                description: 'Natural clean-up—no over-thinning.',
                meta: '$10 • 10 min',
              },
              {
                title: 'Beard conditioning treatment',
                description: 'Softness + shape retention.',
                meta: '$12 • 10 min',
              },
              {
                title: 'Scalp detox boost',
                description: 'Extra exfoliation for heavy buildup.',
                meta: '$15 • 10 min',
              },
            ].map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <div className="text-sm text-muted-foreground">{a.meta}</div>
                </div>
                <p className="mt-2 text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Service questions"
            subheadline="Quick answers before you book."
            items={[
              {
                question: 'Do you do walk-ins?',
                answer:
                  'Limited. Booking requests are recommended to lock in a time. If you walk in, we’ll fit you in if the chair is open.',
              },
              {
                question: 'How should I prep for a hot towel shave?',
                answer:
                  'Arrive with a clean face if possible. If you have sensitive skin, note it in your booking request so we can adjust products.',
              },
              {
                question: 'Is hair coloring same-day?',
                answer:
                  'Some services require a quick consult first. Send photos and goals in the booking notes so we can confirm timing.',
              },
              {
                question: 'What if I’m not sure what haircut fits me?',
                answer:
                  'That’s normal. We’ll recommend based on face shape, lifestyle, and how often you want maintenance.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Book once. Rebook with confidence."
            description="Tell us what you want and when you’re free—we’ll confirm quickly and match the right time block."
            ctaLabel="Request a Booking"
            ctaHref="/contact#booking"
          />
        </div>
      </section>
    </div>
  )
}
