import { TeamGrid } from '@/components/blocks/TeamGrid'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTABanner } from '@/components/blocks/CTABanner'

export const metadata = {
  title: 'Team — The Gentlemans Cut',
  description:
    'Meet the barbers behind the craft: specialists in fades, scissor work, beard symmetry, and traditional hot towel shaves.',
}

export default function TeamPage() {
  return (
    <div>
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground">Team</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Meet the barbers behind the craft.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Different hair types and style goals need different strengths. Our team specializes in
            fades, scissor work, beard symmetry, and traditional straight-razor technique—so you can
            book with confidence and get consistent results.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact#booking"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-primary-foreground font-medium"
            >
              Book With a Barber
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-3 font-medium"
            >
              See Services
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TeamGrid
            headline="Barber profiles"
            subheadline="Book your preferred barber—or choose “first available” and we’ll match you based on your goals."
            members={[
              {
                name: 'Adrian Cole',
                role: 'Master Barber • Fades & Texture',
                bio: 'Known for clean blends and texture that grows out naturally. Detail-first, always—especially around the temples and neckline.',
                imageUrl: 'https://images.pexels.com/photos/1432670/pexels-photo-1432670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
              {
                name: 'Malik Rivers',
                role: 'Barber • Beard Sculpt & Line Work',
                bio: 'Beard symmetry and edge work with a natural finish—sharp without looking drawn on. Great for first-time beard shaping.',
                imageUrl: 'https://images.pexels.com/photos/32778341/pexels-photo-32778341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
              {
                name: 'Kenji Sato',
                role: 'Senior Barber • Classic & Modern',
                bio: 'Classic shapes, modern styling, and calm consultations that nail the brief. Ideal if you want a cut that looks professional and effortless.',
                imageUrl: 'https://images.pexels.com/photos/20552667/pexels-photo-20552667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
              {
                name: 'Rafael Ortiz',
                role: 'Barber • Shaves & Scalp Care',
                bio: 'Traditional straight-razor technique paired with modern scalp health treatments. Excellent for sensitive skin and comfort-focused routines.',
                imageUrl: 'https://images.pexels.com/photos/12969342/pexels-photo-12969342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              },
            ]}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Adrian Cole', availability: 'Tue–Sat', specialties: 'Skin fades • Texture • Scissor refinement' },
              { name: 'Malik Rivers', availability: 'Wed–Sun', specialties: 'Beard sculpt • Line-ups • Hot towel finish' },
              { name: 'Kenji Sato', availability: 'Mon–Fri', specialties: 'Classic taper • Medium scissor • Styling' },
              { name: 'Rafael Ortiz', availability: 'Thu–Sun', specialties: 'Hot towel shaves • Scalp detox • Sensitive-skin' },
            ].map((m) => (
              <div key={m.name} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="font-semibold">{m.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">Availability: {m.availability}</div>
                <div className="mt-3 text-sm">{m.specialties}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How we work</h2>
            <p className="mt-3 text-muted-foreground">
              Consistency isn’t an accident—it’s standards, timing, and a process that protects the
              details.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Consultation first',
                description:
                  'We align on the look and maintenance plan before we cut—so there are no surprises at the end.',
              },
              {
                title: 'Sanitation standards',
                description:
                  'Tools disinfected, stations reset, fresh towels and capes—every client, every time.',
              },
              {
                title: 'No-rush timing',
                description:
                  'Buffered appointments protect quality. If you need extra time, we’ll recommend the right booking.',
              },
              {
                title: 'Education included',
                description:
                  'We show you how to style it at home quickly, plus what to do between visits to keep it sharp.',
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-semibold">{v.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="Why clients book the same barber every time"
            testimonials={[
              {
                quote:
                  'Adrian fixed a cut I hated and turned it into my best look. The consultation alone was worth it.',
                name: 'Sam W.',
                role: 'Haircut consultation + fade',
                company: 'Returning client',
              },
              {
                quote: 'Malik’s beard work is unmatched—balanced and clean.',
                name: 'Omar H.',
                role: 'Beard grooming',
                company: 'Regular',
              },
              {
                quote: 'Kenji nails classic cuts with modern texture.',
                name: 'Ryan C.',
                role: 'Scissor cut',
                company: 'Professional client',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTABanner
            headline="Book with confidence."
            description='Pick a barber—or choose “first available” and we’ll match you based on your goals.'
            ctaLabel="Start Booking"
            ctaHref="/contact#booking"
          />
        </div>
      </section>
    </div>
  )
}
