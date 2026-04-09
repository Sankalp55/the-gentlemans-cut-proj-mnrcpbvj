import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { StatsCounter } from '@/components/blocks/StatsCounter';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about us.'
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="text-muted-foreground max-w-2xl">
          We’re a modern barbershop focused on great service, consistent results,
          and a welcoming experience.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/book">Book an appointment</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services">View services</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <StatsCounter
          stats={[
            { label: 'Avg. appointment time', value: '45', suffix: ' min' },
            { label: 'Regular client rate', value: '72', suffix: '%' },
            { label: 'Beard services monthly', value: '180', suffix: '+' },
            { label: '5-star reviews', value: '300', suffix: '+' }
          ]}
        />
      </section>
    </main>
  );
}
