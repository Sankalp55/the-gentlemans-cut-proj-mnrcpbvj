import { HeroLamp } from '@/components/blocks/HeroLamp'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { PricingTable } from '@/components/blocks/PricingTable'
import { InfiniteMovingCards } from '@/components/ui/effects/InfiniteMovingCards'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HeroLamp
        headline="A modern barbershop built on old-school standards."
        subheadline="Cuts, shaves, and scalp care in a dark, refined space. Book fast, show up, leave sharper."
        primaryCta={{ label: 'Book an Appointment', href: '/contact#booking' }}
        secondaryCta={{ label: 'View Services & Pricing', href: '/services' }}
      />

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <LogoCloud
            headline="Trusted by professionals who keep it clean."
            logos={[
              { name: 'Northside Gym', imageUrl: '/images/logos/northside-gym.svg' },
              { name: 'Blackstone Coffee', imageUrl: '/images/logos/blackstone-coffee.svg' },
              { name: 'Harbor Athletics', imageUrl: '/images/logos/harbor-athletics.svg' },
              { name: 'Civic Studio', imageUrl: '/images/logos/civic-studio.svg' },
              { name: 'Ridge & Rail', imageUrl: '/images/logos/ridge-rail.svg' },
              { name: 'Lumen Gallery', imageUrl: '/images/logos/lumen-gallery.svg' },
            ]}
          />
          <p className="mt-6 text-muted-foreground max-w-3xl">
            Local athletes, founders, and wedding parties book Ironwood for consistency. We’re not
            trying to be loud—we’re trying to be reliable. The goal is a cut that reads clean up
            close and still looks intentional weeks later.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="Craft, not chaos"
            headline="The details you feel when you leave the chair."
            subheadline="A disciplined process—consultation, craft, finish—so your cut grows out right."
            features={[
              {
                title: 'Consult-first approach',
                description:
                  'Face shape, hair density, and growth patterns first—then we cut. You’ll know what we’re doing and why it works for your routine.',
              },
              {
                title: 'Razor & towel ritual',
                description:
                  'Hot towel prep, clean lines, and a finish that looks intentional up close—especially around the neckline and beard edges.',
              },
              {
                title: 'Scalp health built in',
                description:
                  'Options for exfoliation and treatment when dryness, buildup, or tension gets in the way of a great cut and comfortable styling.',
              },
              {
                title: 'Style that lasts',
                description:
                  'We’ll recommend the right product and a quick routine you can actually repeat—so you don’t need a “special occasion” to look sharp.',
              },
              {
                title: 'On-time, no chaos',
                description:
                  'Tight schedule, clear booking, and respectful service. You get a calm appointment and a predictable finish time.',
              },
              {
                title: 'Premium, not pretentious',
                description:
                  'A refined, masculine space focused on results. You’ll get detail-level work without the attitude.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Everything you need for a clean booking flow.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We keep booking straightforward: tell us what you want, when you want it, and who you
              prefer. We confirm quickly and make sure the time block matches the service—especially
              for color and longer treatments.
            </p>
          </div>

          <div className="mt-10">
            <StickyScrollReveal
              content={[
                {
                  title: 'Booking request that respects your time',
                  description:
                    'Choose your service, preferred barber, and a date/time window. Add notes like reference photos, sensitivities, and your maintenance schedule—so the consult starts before you sit down.',
                },
                {
                  title: 'Service menu clarity',
                  description:
                    'Transparent pricing and realistic durations. You’ll know what’s included, what’s optional, and what’s best as a combo for value and results.',
                },
                {
                  title: 'Aftercare guidance (so it stays clean)',
                  description:
                    'We don’t just style and wave. You’ll leave with simple product picks and a 2–5 minute routine that matches your hair type and lifestyle.',
                },
                {
                  title: 'Gallery proof, consistent lighting',
                  description:
                    'Real work, consistent outcomes. Our gallery is built to show texture, blends, and line work without hiding behind filters.',
                },
              ]}
            />
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
          <p className="mt-6 text-muted-foreground max-w-3xl">
            Not sure which combo fits? Pick “Haircut” in the booking request and describe your goal.
            We’ll confirm the right service length before your appointment.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Regulars don’t gamble with their barber.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A few words from clients who keep coming back—because the cut is consistent, the
              experience is calm, and the schedule stays on track.
            </p>
          </div>

          <div className="mt-10">
            <InfiniteMovingCards
              direction="left"
              speed="normal"
              items={[
                {
                  quote:
                    'Best fade in the city—clean lines, no rush, and it grows out perfectly.',
                  name: 'Marcus T.',
                  title: 'Product Lead',
                },
                {
                  quote: 'The hot towel shave is unreal. Calm experience, sharp finish.',
                  name: 'Evan R.',
                  title: 'Photographer',
                },
                {
                  quote: 'Consistent every time. Booking is easy and they respect the schedule.',
                  name: 'Derrick S.',
                  title: 'Coach',
                },
                {
                  quote: 'They actually listen. My beard finally has shape that fits my face.',
                  name: 'Jonah K.',
                  title: 'Founder',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Quick answers before you book."
            subheadline="If you still have a question, send it in the booking notes—our team will confirm details fast."
            items={[
              {
                question: 'Do you do walk-ins?',
                answer:
                  'Limited. Booking requests are recommended to lock in a time. If you walk in, we’ll fit you in if the chair is open—otherwise we’ll offer the next best slot.',
              },
              {
                question: 'How should I prep for a hot towel shave?',
                answer:
                  'Arrive with a clean face if possible. If you have sensitive skin or a history of irritation, mention it in your booking request so we can adjust products and technique.',
              },
              {
                question: 'What if I’m not sure what haircut fits me?',
                answer:
                  'That’s normal. We’ll recommend based on face shape, hair density, growth patterns, and how often you want maintenance. Reference photos help a lot.',
              },
              {
                question: 'Do you work with all hair types?',
                answer:
                  'Yes. Our barbers are trained across textures and densities. Add notes about your hair goals and any problem areas (cowlicks, thinning, dryness) so we can match you well.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Ready to look sharper in 45 minutes?"
            description="Send a booking request—our team confirms quickly."
            ctaLabel="Book Now"
            ctaHref="/contact#booking"
          />
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Prefer to choose a barber first? Meet the team, then request your time.
            <a className="ml-2 underline underline-offset-4 hover:text-foreground" href="/team">
              Meet the Barbers
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
