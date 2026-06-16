"use client";

import { useState, type ReactNode } from "react";
import {
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Lightbulb,
} from "lucide-react";

interface AccordionItemProps {
  step: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  stepNumber?: number;
  accent?: "red" | "blue" | "slate";
}

const ACCENT_STYLES = {
  red: "bg-china-red text-white",
  blue: "bg-tip-text text-white",
  slate: "bg-slate-600 text-white",
};

export function AccordionItem({
  step,
  title,
  children,
  defaultOpen = false,
  stepNumber,
  accent = "red",
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-xl border transition-shadow ${
        open
          ? "border-china-red/20 bg-white shadow-md shadow-china-red/5"
          : "border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-white"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
        aria-expanded={open}
      >
        {stepNumber !== undefined ? (
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${ACCENT_STYLES[accent]}`}
          >
            {stepNumber}
          </span>
        ) : (
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${ACCENT_STYLES.slate}`}
          >
            <AlertTriangle className="h-4 w-4" aria-hidden />
          </span>
        )}
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold uppercase tracking-wide text-slate-muted">
            {step.replace(":", "")}
          </span>
          <span className="mt-0.5 block font-bold text-slate-text">{title}</span>
        </span>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-slate-muted" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-slate-muted" />
        )}
      </button>
      <div className={`accordion-content px-4 sm:px-5 ${open ? "open" : ""}`}>
        <div className="accordion-inner">
          <div className="border-t border-slate-100 pb-5 pt-4 text-sm text-slate-muted leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}

export function WarnBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 flex gap-3 rounded-xl border border-warn-text/20 bg-warn-bg px-4 py-3 text-sm text-warn-text leading-relaxed">
      <AlertTriangle
        className="mt-0.5 h-4 w-4 shrink-0 text-warn-text"
        aria-hidden
      />
      <div>{children}</div>
    </div>
  );
}

export function TipBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 flex gap-3 rounded-xl border border-tip-text/20 bg-tip-bg px-4 py-3 text-sm text-tip-text leading-relaxed">
      <Lightbulb
        className="mt-0.5 h-4 w-4 shrink-0 text-tip-text"
        aria-hidden
      />
      <div>{children}</div>
    </div>
  );
}
