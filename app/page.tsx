import { HeroGradientBlob } from '@/components/blocks/HeroGradientBlob'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'

export default function Page() {
  return (
    <div>
      <HeroGradientBlob
        badge="Premium local barbershop • Appointment-first"
        headline="A modern barbershop built on old-world ritual."
        subheadline="Precision cuts, straight-razor shaves, and scalp care in a dark, refined space. Book in minutes—walk out sharper, calmer, and more confident."
        primaryCta={{ label: 'Book an Appointment', href: '/contact#booking' }}
        secondaryCta={{ label: 'View Services & Pricing', href: '/services#pricing' }}
      />

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <LogoCloud
            headline="Trusted by locals, professionals, and wedding parties."
            logos={[
              { name: 'City Gents Club', imageUrl: 'https://images.pexels.com/photos/35378676/pexels-photo-35378676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
              { name: 'The Atelier Hotel', imageUrl: 'https://images.pexels.com/photos/36169773/pexels-photo-36169773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
              { name: 'Northside Fitness', imageUrl: 'https://images.pexels.com/photos/32026165/pexels-photo-32026165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
              { name: 'Black Tie Events', imageUrl: 'https://images.pexels.com/photos/12960383/pexels-photo-12960383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
              { name: 'Downtown Studios', imageUrl: 'https://images.pexels.com/photos/36169771/pexels-photo-36169771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
            We’re proud to be the go-to shop for clients who need to look sharp for work, photos, and
            big events. Whether you’re a weekly regular or booking for a wedding weekend, we keep the
            experience consistent: on-time, detail-driven, and built around your routine.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="Craft & comfort"
            headline="Details matter—so we obsess over them."
            subheadline="Every appointment follows the same standard: a calm consult, precision work, and a finish that holds up for weeks—not days."
            features={[
              {
                title: 'Consultation-first approach',
                description:
                  'We map face shape, growth patterns, and lifestyle before the first snip—so the cut fits how you actually live.',
              },
              {
                title: 'Ritual hot towel finish',
                description:
                  'Cleanse, steam, and finish with a calming post-shave treatment for a comfortable, clean feel.',
              },
              {
                title: 'Precision fades & scissor work',
                description:
                  'Tight blends, clean lines, and texture that grows out well—so you stay sharp between visits.',
              },
              {
                title: 'Scalp health focus',
                description:
                  'Detox, exfoliation, and massage to reset your scalp and boost comfort—especially if you deal with buildup.',
              },
              {
                title: 'Product guidance (no pressure)',
                description:
                  'We recommend what fits your hair and budget. If you already have a routine, we refine it—no hard sell.',
              },
              {
                title: 'On-time appointments',
                description:
                  'Buffered slots and a no-rush standard. We respect your schedule and protect the quality.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              The shop experience—before you step in.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Noir, quiet, and intentional. Warm lighting, clean stations, and modern tools—paired
              with traditional technique. If you want sharp without loud, you’re in the right place.
            </p>
          </div>

          <div className="mt-12">
            <StickyScrollReveal
              content={[
                {
                  title: 'Clean stations',
                  description:
                    'Sanitized tools, fresh capes, and a reset between clients. We treat hygiene like part of the craft.',
                },
                {
                  title: 'Straight-razor ritual',
                  description:
                    'Hot towel, quality lather, and a measured finish. The goal is a close shave without irritation.',
                },
                {
                  title: 'Scalp treatment zone',
                  description:
                    'Detox + exfoliation + massage designed to reduce buildup and calm dryness—especially helpful in colder months.',
                },
                {
                  title: 'Signature finishing',
                  description:
                    'Matte, natural, or slick—your call. We show you how to recreate it at home in under three minutes.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Transparent pricing"
            subheadline="No surprises. Add-ons are available during your consultation based on your goals and timing."
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

          <div className="mt-10 rounded-xl border border-border bg-card px-6 py-6 shadow-sm">
            <h3 className="text-lg font-semibold">Popular add-ons</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Add-ons are confirmed in the chair to match your hair/skin needs and the time you’ve
              booked.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              {[
                { name: 'Hot towel add-on', price: '+$10' },
                { name: 'Beard line-up', price: '+$15' },
                { name: 'Scalp detox', price: '+$20' },
                { name: 'Gray blending', price: 'from $35' },
              ].map((a) => (
                <div key={a.name} className="rounded-lg border border-border bg-background p-4">
                  <div className="font-medium">{a.name}</div>
                  <div className="text-muted-foreground">{a.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="Clients come for the cut—stay for the craft."
            subheadline="We aim for results that look sharp in the chair and still look intentional weeks later."
            testimonials={[
              {
                quote:
                  'Best fade I’ve had in years. Clean lines, no rush, and the hot towel finish is unreal.',
                name: 'Marcus L.',
                role: 'Skin fade + beard shape',
                company: 'Local client',
              },
              {
                quote:
                  'They actually listened. The style grew out perfectly and still looks sharp weeks later.',
                name: 'Ethan R.',
                role: 'Scissor cut + styling',
                company: 'Regular',
              },
              {
                quote:
                  'Beard grooming was meticulous—symmetry, edges, and a natural finish.',
                name: 'Javier S.',
                role: 'Beard sculpt + line-up',
                company: 'First visit',
              },
              {
                quote:
                  'Scalp treatment helped with dryness immediately. Calm, professional, and worth it.',
                name: 'Noah K.',
                role: 'Scalp detox',
                company: 'Monthly member',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Questions before you book"
            subheadline="If you don’t see your question here, send a booking request with notes and we’ll confirm the best service for you."
            items={[
              {
                question: 'Do you take walk-ins?',
                answer:
                  'Limited walk-ins are sometimes possible, but appointments are strongly recommended for guaranteed time slots—especially evenings and weekends.',
              },
              {
                question: 'How long does a Signature appointment take?',
                answer:
                  'Typically 45–60 minutes depending on hair density, beard length, and whether you’re adding a hot towel or scalp step.',
              },
              {
                question: 'Do you do skin fades and longer styles?',
                answer:
                  'Yes. We do tight skin fades, tapers, and classic cuts, plus medium-length scissor work and textured styles that grow out clean.',
              },
              {
                question: 'What’s included in hair coloring?',
                answer:
                  'We offer gray blending and tone refresh. For larger color changes, we’ll schedule a consultation first to plan timing and maintenance.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTABanner
            headline="Ready to look sharper in one visit?"
            description="Choose a service, pick a time, and we’ll handle the rest—consultation, craft, and a finish that lasts."
            ctaLabel="Book Now"
            ctaHref="/contact#booking"
          />
        </div>
      </section>
    </div>
  )
}
