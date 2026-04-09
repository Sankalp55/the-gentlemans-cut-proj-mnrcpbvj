import type { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { StatsCounter } from '@/components/blocks/StatsCounter'

export const metadata: Metadata = {
  title: 'About | Barber Booking',
  description: 'Learn more about our barbershop and what we offer.',
}

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">About us</h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            We’re a modern barbershop focused on consistent quality, easy booking,
            and a great experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/book">Book an appointment</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">View services</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-950/40">
          <h2 className="text-lg font-medium">By the numbers</h2>
          <div className="mt-4">
            <StatsCounter
              stats={[
                { label: 'Avg. rebook rate', value: '78', suffix: '%' },
                { label: 'Typical appointment time', value: '45', suffix: '–60m' },
                { label: 'Barbers on staff', value: '4' },
                { label: 'Services offered', value: '6', suffix: '+' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Our approach</h2>
        <p className="mt-3 max-w-3xl text-neutral-600 dark:text-neutral-300">
          Clean fades, classic cuts, and modern styles—done with attention to
          detail. We keep things simple: pick a service, choose a time, and show
          up.
        </p>
      </section>
    </main>
  )
}
