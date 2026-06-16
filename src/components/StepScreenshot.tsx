import type { ReactNode } from "react";

type StepScreenshotProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function StepScreenshot({
  src,
  alt,
  caption,
}: StepScreenshotProps) {
  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
      <div className="flex justify-center bg-gradient-to-b from-slate-100/80 to-slate-50 p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-auto w-full max-w-[220px] rounded-lg border border-slate-200/80 shadow-md sm:max-w-[240px]"
        />
      </div>
      {caption && (
        <figcaption className="border-t border-slate-100 px-4 py-2.5 text-center text-xs text-slate-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function StepScreenshotRow({ children }: { children: ReactNode }) {
  return <div className="my-5 grid gap-4 sm:grid-cols-2">{children}</div>;
}
