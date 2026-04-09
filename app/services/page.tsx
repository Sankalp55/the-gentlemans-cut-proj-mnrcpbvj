import { PricingTable } from '@/components/blocks/PricingTable'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'

export const metadata = {
  title: 'Services & Pricing — The Gentlemans Cut',
  description:
    'Explore haircuts, beard grooming, hot towel shaves, scalp treatments, and transparent pricing. Book your appointment online.',
}

export default function ServicesPage() {
  return (
    <div>
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-muted-foreground">Services</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Services built for precision—and longevity.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Every service starts with a consultation and ends with a finish tailored to your hair
              type, skin comfort, and daily routine. We focus on clean structure and detail so your
              cut holds its shape as it grows out.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact#booking"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-primary-foreground font-medium"
              >
                Book a Service
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-3 font-medium"
              >
                Jump to Pricing
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground font-medium">Consultation:</span> face shape,
                growth patterns, and maintenance plan.
              </li>
              <li>
                <span className="text-foreground font-medium">Precision work:</span> symmetry checks
                and clean detailing under multiple angles.
              </li>
              <li>
                <span className="text-foreground font-medium">Finish:</span> styling and product
                pairing based on your routine (matte, natural, or slick).
              </li>
              <li>
                <span className="text-foreground font-medium">Timing:</span> buffered appointments
                so you’re never rushed out of the chair.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="Core services"
            headline="What we do"
            subheadline="From tight fades to traditional shaves—each service is designed to look sharp now and still look intentional later."
            features={[
              {
                title: 'Haircuts',
                description:
                  'Fades, tapers, classic cuts, and scissor work with clean neck detailing and balanced shape.',
              },
              {
                title: 'Beard Grooming',
                description:
                  'Sculpt, shape, and soften with a natural finish that fits your face—sharp without looking overdone.',
              },
              {
                title: 'Hair Styling',
                description:
                  'Blow-dry, texture, and product selection matched to your daily routine so it’s easy to maintain.',
              },
              {
                title: 'Hair Coloring',
                description:
                  'Gray blending, tone refresh, and natural-looking color work (consult required for complex changes).',
              },
              {
                title: 'Hot Towel Shaves',
                description:
                  'Traditional straight-razor shave with hot towels and a skin-calming finish designed to reduce irritation.',
              },
              {
                title: 'Scalp Treatments',
                description:
                  'Detox + exfoliation + massage to reset scalp comfort and reduce buildup—especially helpful for dryness.',
              },
            ]}
          />
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Transparent pricing"
            subheadline="No surprises. Add-ons are available during your consultation."
            tiers={[
              {
                name: 'Essential',
                price: '$35',
                period: 'per visit',
                features: ['Consultation', 'Cut (clipper/scissor)', 'Neck cleanup', 'Style finish'],
                ctaLabel: 'Book Essential',
                ctaHref: '/contact#booking?service=essential',
              },
              {
                name: 'Signature',
                price: '$55',
                period: 'per visit',
                highlighted: true,
                features: [
                  'Consultation',
                  'Haircut',
                  'Beard shape',
                  'Hot towel finish',
                  'Style finish',
                ],
                ctaLabel: 'Book Signature',
                ctaHref: '/contact#booking?service=signature',
              },
              {
                name: 'Ritual',
                price: '$75',
                period: 'per visit',
                features: [
                  'Consultation',
                  'Haircut',
                  'Beard sculpt',
                  'Scalp detox mini',
                  'Hot towel finish',
                  'Premium style finish',
                ],
                ctaLabel: 'Book Ritual',
                ctaHref: '/contact#booking?service=ritual',
              },
            ]}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Hot towel add-on', price: '+$10', note: 'Extra comfort and a cleaner finish.' },
              { name: 'Beard line-up', price: '+$15', note: 'Edges and symmetry refinement.' },
              { name: 'Scalp detox', price: '+$20', note: 'Buildup reset + massage.' },
              { name: 'Gray blending', price: 'from $35', note: 'Natural-looking tone control.' },
            ].map((a) => (
              <div
                key={a.name}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="font-semibold">{a.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{a.note}</div>
                <div className="mt-4 text-sm font-medium">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How an appointment flows
            </h2>
            <p className="mt-3 text-muted-foreground">
              A repeatable process keeps results consistent across barbers and services.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Consult',
                description: 'Style goals, growth patterns, and maintenance plan.',
              },
              {
                title: 'Craft',
                description: 'Precision cutting with symmetry checks and clean detailing.',
              },
              {
                title: 'Ritual',
                description: 'Hot towel, calming finish, and product pairing.',
              },
              {
                title: 'Refine',
                description: 'Final adjustments under different lighting angles.',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="text-sm text-muted-foreground">Step</div>
                <div className="mt-1 text-lg font-semibold">{step.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Service FAQ"
            items={[
              {
                question: 'Do you take walk-ins?',
                answer:
                  'Limited walk-ins are possible, but booking is recommended for guaranteed time slots—especially evenings and weekends.',
              },
              {
                question: 'How long does a Signature appointment take?',
                answer:
                  'Typically 45–60 minutes depending on hair density and beard length, plus any add-ons confirmed during your consult.',
              },
              {
                question: 'Do you do skin fades and longer styles?',
                answer:
                  'Yes—everything from tight fades to medium-long scissor work and textured styles designed to grow out clean.',
              },
              {
                question: 'What’s included in hair coloring?',
                answer:
                  'We offer gray blending and tone refresh. Complex color changes require a consultation to plan timing and upkeep.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTABanner
            headline="Pick a service. We’ll tailor the finish."
            description="Send a booking request with your goals and we’ll confirm the best option, timing, and barber match."
            ctaLabel="Book a Service"
            ctaHref="/contact#booking"
          />
        </div>
      </section>
    </div>
  )
}
