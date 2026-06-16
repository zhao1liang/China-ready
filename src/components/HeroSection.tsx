import { CreditCard, QrCode, ShieldCheck, Wifi, WifiOff } from "lucide-react";

const FEATURES = [
  { icon: CreditCard, label: "Visa · MC · Amex" },
  { icon: QrCode, label: "Scan & pay anywhere" },
  { icon: ShieldCheck, label: "No Chinese bank account" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-14 text-center sm:px-0 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-2xl">
        <span className="inline-block rounded-full bg-china-red px-3 py-1 text-sm font-semibold text-white shadow-lg shadow-china-red/20">
          WeChat Pay Guide 2026
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          WeChat Pay for Foreigners
        </h1>
        <p className="mt-4 text-lg text-hero-muted">
          Everything you need before landing in China — setup, pitfalls, and
          Plan B.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {FEATURES.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-green-400" aria-hidden />
              {label}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-left text-sm text-green-100">
            <div className="flex items-center gap-2 font-semibold text-white">
              <WifiOff className="h-4 w-4 shrink-0" aria-hidden />
              In China
            </div>
            <p className="mt-1.5 text-green-100/90">
              Turn VPN <strong className="text-white">off</strong> before WeChat
              Pay — payments fail silently with VPN on.
            </p>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-left text-sm text-amber-100">
            <div className="flex items-center gap-2 font-semibold text-white">
              <Wifi className="h-4 w-4 shrink-0" aria-hidden />
              Banned countries
            </div>
            <p className="mt-1.5 text-amber-100/90">
              In India etc., you may need VPN <strong className="text-white">on</strong>{" "}
              just to open WeChat. Opposite rule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
