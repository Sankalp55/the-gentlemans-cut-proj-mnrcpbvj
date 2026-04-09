import { CTABanner } from '@/components/blocks/CTABanner'
import { InfiniteMovingCards } from '@/components/ui/effects/InfiniteMovingCards'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'

export const metadata = {
  title: 'Gallery — The Gentlemans Cut',
  description:
    'Browse recent fades, beard sculpts, hot towel shaves, and styling finishes. Book your appointment to get the look.',
}

const recentWorkImages = [
  'https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/3520699/pexels-photo-3520699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/9783835/pexels-photo-9783835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/36733382/pexels-photo-36733382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/19353800/pexels-photo-19353800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/6498730/pexels-photo-6498730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/4389462/pexels-photo-4389462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/18721086/pexels-photo-18721086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/5092815/pexels-photo-5092815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/33980844/pexels-photo-33980844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/36729604/pexels-photo-36729604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
]

export default function GalleryPage() {
  return (
    <div>
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-muted-foreground">Gallery</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Cuts that photograph like they feel: sharp.
            </h1>
            <p className="mt-4 text-muted-foreground">
              A selection of recent work—fades, beards, shaves, and styling finishes. Bring a
              reference you like, then we’ll tailor it to your hair density, growth pattern, and
              maintenance comfort.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact#booking"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-primary-foreground font-medium"
              >
                Book This Look
              </a>
              <a
                href="/services#pricing"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-3 font-medium"
              >
                View Pricing
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">What you’ll see here</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We keep the gallery realistic: clean blends, natural beard finishes, and styling that
              holds up outside the chair. If you want something specific—part line, longer fringe,
              or a softer taper—note it in your booking request.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {['Haircuts', 'Beards', 'Shaves', 'Styling', 'Color', 'Shop vibe'].map((tag) => (
                <div key={tag} className="rounded-lg border border-border bg-background px-3 py-2">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent work</h2>
            <p className="mt-3 text-muted-foreground">
              A rotating set of recent finishes. Ask for a similar shape and we’ll adapt it to your
              face and hairline.
            </p>
          </div>

          <div className="mt-10">
            <ParallaxScroll images={recentWorkImages} />
          </div>
        </div>
      </section>

      <section id="shop-vibe" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The space</h2>
            <p className="mt-3 text-muted-foreground">
              Low light, warm tones, and a clean station—every time. The goal is a calm environment
              where the details stand out.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Waiting lounge',
                description: 'Quiet, comfortable, and intentionally minimal.',
              },
              {
                title: 'Stations',
                description: 'Reset between clients with disinfected tools and fresh linens.',
              },
              {
                title: 'Tools & products',
                description: 'Modern tools paired with classic technique and skin comfort steps.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-semibold">{card.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                <div className="mt-4 aspect-[16/10] rounded-lg border border-border bg-background" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What clients say after the mirror check
            </h2>
            <p className="mt-3 text-muted-foreground">
              The common theme: clean lines, calm experience, and results that last.
            </p>
          </div>

          <div className="mt-10">
            <InfiniteMovingCards
              direction="left"
              speed="normal"
              items={[
                {
                  quote: 'The beard line-up is surgical. Cleanest edges in the city.',
                  name: 'Dylan P.',
                  title: 'Beard grooming',
                },
                {
                  quote: 'My taper stayed crisp for weeks—finally found my shop.',
                  name: 'Caleb T.',
                  title: 'Haircut',
                },
                {
                  quote: 'Hot towel shave is a full reset. Calm skin, zero irritation.',
                  name: 'Andre M.',
                  title: 'Shave',
                },
                {
                  quote: 'They nailed the reference photo but made it fit my hairline.',
                  name: 'Jordan S.',
                  title: 'Fade + texture',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTABanner
            headline="Want results like these?"
            description="Pick your service and we’ll tailor the cut to your hair, face shape, and maintenance comfort."
            ctaLabel="Book an Appointment"
            ctaHref="/contact#booking"
          />
        </div>
      </section>
    </div>
  )
}
