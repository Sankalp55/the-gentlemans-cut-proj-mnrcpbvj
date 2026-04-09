import Image from 'next/image'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function GalleryPage() {
  const cuts = [
    { alt: 'Low taper fade with textured top', src: '/images/gallery/cut-01.jpg' },
    { alt: 'Classic side part scissor cut', src: '/images/gallery/cut-02.jpg' },
    { alt: 'Mid fade with cropped fringe', src: '/images/gallery/cut-03.jpg' },
    { alt: 'Buzz cut with sharp line-up', src: '/images/gallery/cut-04.jpg' },
    { alt: 'Curly hair shape-up and taper', src: '/images/gallery/cut-05.jpg' },
    { alt: 'Pompadour with clean temple fade', src: '/images/gallery/cut-06.jpg' },
  ]

  const beards = [
    '/images/gallery/beard-01.jpg',
    '/images/gallery/beard-02.jpg',
    '/images/gallery/shave-01.jpg',
  ]

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Real work. Real texture. Clean lines.
            </h1>
            <p className="mt-4 text-muted-foreground">
              A selection of recent cuts, shaves, and beard work—shot in consistent lighting so
              results are honest. Bring a reference photo if you want, but we’ll always translate it
              to your hair type, growth pattern, and maintenance schedule.
            </p>
            <div className="mt-8">
              <a
                href="/contact#booking"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-3 font-medium"
              >
                Book a Look
              </a>
            </div>
          </div>

          <div className="mt-14">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">Cuts & fades</h2>
                <p className="mt-2 text-muted-foreground">
                  Tapers, skin fades, classic scissor work, and modern texture.
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Tip: If you want a fade that grows out clean, tell us how often you plan to come in.
              </p>
            </div>

            <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
              {cuts.map((img) => (
                <div
                  key={img.src}
                  className="mb-6 break-inside-avoid rounded-xl border border-border bg-card shadow-sm overflow-hidden"
                >
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Beards & shaves</h2>
            <p className="mt-2 text-muted-foreground">
              Shape, density control, and razor finishes—built to match your jawline.
            </p>
          </div>

          <div className="mt-10">
            <ParallaxScroll images={beards} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our consistency comes from process.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Same steps, every chair—so you know what you’re getting. The goal isn’t a “good day”
              haircut. It’s repeatable work that looks sharp now and still sits right as it grows.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Consult', description: 'Goal, length, maintenance schedule.' },
              { title: 'Cut', description: 'Structure first, detail second.' },
              { title: 'Refine', description: 'Line-up, blend checks, symmetry.' },
              { title: 'Finish', description: 'Style + product + quick routine tips.' },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Want this level of clean?"
            description="Request a booking and tell us the look you’re going for."
            ctaLabel="Request Booking"
            ctaHref="/contact#booking"
          />
        </div>
      </section>
    </div>
  )
}
