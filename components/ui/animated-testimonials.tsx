import * as React from "react";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  title?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  className?: string;
};

/**
 * Minimal, build-safe implementation.
 * Renders testimonials without animation to satisfy imports.
 */
export function AnimatedTestimonials({ testimonials, className }: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      <div className="grid gap-6">
        {testimonials.map((t, idx) => (
          <figure
            key={`${t.name}-${idx}`}
            className="rounded-xl border border-neutral-200/60 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-950/40"
          >
            <blockquote className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {t.name}
              {t.title ? (
                <span className="ml-2 font-normal text-neutral-600 dark:text-neutral-400">
                  — {t.title}
                </span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTestimonials;
