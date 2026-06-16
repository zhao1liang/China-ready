import { MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4 sm:px-0">
        <span className="flex items-center gap-2 font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-china-red text-sm">
            <MapPin className="h-4 w-4" aria-hidden />
          </span>
          ChinaReady
        </span>
        <span className="rounded-full bg-success-green px-3 py-1 text-xs font-semibold text-white shadow-sm">
          ✓ Free · No signup
        </span>
      </div>
    </nav>
  );
}
