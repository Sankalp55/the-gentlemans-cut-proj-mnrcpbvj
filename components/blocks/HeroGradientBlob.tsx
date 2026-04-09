import * as React from "react";

export type HeroGradientBlobProps = {
  className?: string;
};

export function HeroGradientBlob({ className }: HeroGradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={
        className ??
        "pointer-events-none absolute inset-0 overflow-hidden"
      }
    >
      <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-24 right-[-80px] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-emerald-400/20 via-sky-400/20 to-violet-500/20 blur-3xl" />
    </div>
  );
}

export default HeroGradientBlob;
