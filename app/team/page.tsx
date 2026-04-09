import { TeamGrid } from '@/components/blocks/TeamGrid'
import { AnimatedTooltip } from '@/components/ui/effects/AnimatedTooltip'
import { InfiniteMovingCards } from '@/components/ui/effects/InfiniteMovingCards'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function TeamPage() {
  const members = [
    {
      name: 'Miles Carter',
      role: 'Master Barber • Owner',
      bio: 'Precision fades and classic scissor work. Known for consults that actually land the right cut—especially for clients who want a style that grows out clean.',
      imageUrl: '/images/team/miles.jpg',
    },
    {
      name: 'Andre Silva',
      role: 'Senior Barber',
      bio: 'Razor detail and beard artistry. Calm chair, meticulous finish, and a strong eye for symmetry—ideal if you care about crisp edges and irritation-free shaves.',
      imageUrl: '/images/team/andre.jpg',
    },
    {
      name: 'Noah Kim',
      role: 'Color & Style Specialist',
      bio: 'Gray blending, natural color work, and styling routines that match your lifestyle. Great for clients who want subtle improvements that look professional, not “dyed.”',
      imageUrl: '/images/team/noah.jpg',
    },
    {
      name: 'Samira Reed',
      role: 'Scalp & Treatment Specialist',
      bio: 'Scalp health focus—detox, hydration, and tension relief with a clean finish. Perfect if dryness, flaking, or product buildup is getting in the way of your best hair.',
      imageUrl: '/images/team/samira.jpg',
    },
  ]

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Meet the barbers behind the craft.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Different specialties—same standard: sharp, respectful, consistent. If you’re not sure
              who to book with, choose “No preference” and describe your goal. We’ll match you with
              the best fit.
            </p>
            <div className="mt-8">
              <a
                href="/contact#booking"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 font-medium"
              >
                Book With a Barber
              </a>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-muted p-8">
            <h2 className="text-2xl font-semibold">Quick pick</h2>
            <p className="mt-2 text-muted-foreground">
              Hover to see specialties—then book your chair.
            </p>
            <div className="mt-6">
              <AnimatedTooltip
                items={[
                  {
                    id: 1,
                    name: 'Miles Carter',
                    designation: 'Fades • Classic cuts • Beard structure',
                    image: '/images/team/miles.jpg',
                  },
                  {
                    id: 2,
                    name: 'Andre Silva',
                    designation: 'Hot towel shaves • Line-ups • Beard grooming',
                    image: '/images/team/andre.jpg',
                  },
                  {
                    id: 3,
                    name: 'Noah Kim',
                    designation: 'Color • Styling • Texture work',
                    image: '/images/team/noah.jpg',
                  },
                  {
                    id: 4,
                    name: 'Samira Reed',
                    designation: 'Scalp treatments • Massage • Sensitive skin care',
                    image: '/images/team/samira.jpg',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TeamGrid
            headline="Barber profiles"
            subheadline="Choose by style, pace, or specialty."
            members={members}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What we stand for</h2>
            <p className="mt-4 text-muted-foreground">
              The culture is simple: craft, respect, and consistency. We’d rather do fewer
              appointments per day and keep the standard high than rush through volume.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'No rush', description: 'We keep the schedule tight so the work stays clean.' },
              {
                title: 'No guesswork',
                description: 'Consultation and confirmation before we start.',
              },
              { title: 'No ego', description: 'Premium service without the attitude.' },
              { title: 'No shortcuts', description: 'Detail checks and finish work every time.' },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Clients book barbers, not buildings.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A few notes about the team experience—communication, consistency, and a finish that
              holds up.
            </p>
          </div>

          <div className="mt-10">
            <InfiniteMovingCards
              direction="right"
              speed="slow"
              items={[
                {
                  quote: 'Miles nailed the shape. It looks good day one and week three.',
                  name: 'Caleb W.',
                  title: 'Engineer',
                },
                {
                  quote: 'Andre’s razor work is the cleanest I’ve had. No irritation.',
                  name: 'Theo P.',
                  title: 'Sales',
                },
                {
                  quote: 'Samira’s scalp treatment fixed the dryness in two visits.',
                  name: 'Omar H.',
                  title: 'Trainer',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Pick your barber. Lock your time."
            description="Tell us your goal and we’ll confirm your appointment."
            ctaLabel="Request a Booking"
            ctaHref="/contact#booking"
          />
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Want to compare services first?
            <a className="ml-2 underline underline-offset-4 hover:text-foreground" href="/services">
              See Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
