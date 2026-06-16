"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  MapPin,
  Plane,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

type ChecklistItem = {
  title: string;
  description: string;
};

type Phase = {
  label: string;
  tagClass: string;
  cardClass: string;
  icon: typeof Calendar;
  items: ChecklistItem[];
};

const PHASES: Phase[] = [
  {
    label: "2 Weeks Before",
    tagClass: "bg-tip-bg text-tip-text",
    cardClass: "border-tip-text/15 bg-tip-bg/20",
    icon: Calendar,
    items: [
      {
        title: "Download WeChat and register your account",
        description:
          "Don't wait until you land — registration requires SMS verification which can be unreliable on Chinese networks.",
      },
      {
        title: "Contact your bank about China payments",
        description:
          "Send this exact message: \"Please enable international online transactions and allow payments through third-party payment aggregators including WeChat Pay and Alipay.\" Banks that block this won't tell you — your card just fails silently.",
      },
      {
        title: "Order a physical Revolut or Wise card if you don't have one",
        description:
          "Takes 5–10 days to arrive. Physical card works with WeChat Pay. Virtual card does not. Order now, not the night before your trip.",
      },
      {
        title: "Complete WeChat Pay identity verification (passport selfie)",
        description:
          "Do this at home with good lighting. See the Matte Surface Trick in Step 3 below. Much harder to troubleshoot on the road.",
      },
      {
        title: "Try linking your international card to WeChat Pay",
        description:
          "If it fails, you have two weeks to troubleshoot or get a backup card. Failing at 11pm before your flight is a bad time to discover this.",
      },
    ],
  },
  {
    label: "3 Days Before",
    tagClass: "bg-orange-100 text-orange-800",
    cardClass: "border-orange-200 bg-orange-50/50",
    icon: Clock,
    items: [
      {
        title: "Test WeChat Pay with a small transaction",
        description:
          "Send a tiny amount to a friend who uses WeChat, or check that your wallet is active. Confirm the card is still linked.",
      },
      {
        title: "Download Alipay and attempt foreign card setup",
        description:
          "Alipay is accepted everywhere WeChat Pay is. Having both means if one fails at a restaurant, you have a backup. (Setup guide in the Plan B section below.)",
      },
      {
        title: "Download offline maps for your destination",
        description:
          "Download your city in Google Maps or Maps.me while on home WiFi. These work without internet once downloaded. Also download Amap (高德地图) — it has better local data in China.",
      },
      {
        title: "Withdraw some local currency before you fly",
        description:
          "ATMs in China accept international cards, but machines can be out of service or have long queues at airports. Bring ¥500–1000 RMB (~$70–140 USD) as emergency cash. This covers taxis, street food, and small shops for 2–3 days.",
      },
    ],
  },
  {
    label: "Day of Departure",
    tagClass: "bg-error-bg text-error-title",
    cardClass: "border-error-bg bg-error-bg/20",
    icon: Plane,
    items: [
      {
        title: "Turn off your VPN before opening WeChat",
        description:
          "Set a reminder on your phone. A connected VPN breaks WeChat Pay silently — no error message, payment just fails.",
      },
      {
        title: "Screenshot this page or save it offline",
        description:
          'Chinese internet blocks Google. You won\'t be able to load most foreign websites without a VPN once you land. Save this guide now: screenshot each section, or use your browser\'s "Save Page" / "Read Later" feature.',
      },
      {
        title: "Note your hotel's address in Chinese characters",
        description:
          "Copy it from Booking.com or your hotel confirmation. Taxi drivers and rideshare apps need the Chinese address. Example: 北京市朝阳区三里屯路19号 — store it in your Notes app.",
      },
    ],
  },
  {
    label: "After Landing",
    tagClass: "bg-green-100 text-green-800",
    cardClass: "border-green-200 bg-green-50/50",
    icon: MapPin,
    items: [
      {
        title: "Connect to airport WiFi before going through customs",
        description:
          "Most Chinese international airports have free WiFi. Use it to confirm WeChat Pay still works. If it doesn't, you're still near airport help desks.",
      },
      {
        title: "Find an ATM inside the arrivals hall if you need cash",
        description:
          "Bank of China and ICBC ATMs reliably accept international cards. Withdraw ¥500–1000 as backup before heading to your hotel.",
      },
      {
        title: "Get a local SIM or activate eSIM",
        description:
          "Having a Chinese phone number helps with some app verifications. China Unicom and China Mobile sell tourist SIMs at most airports. Cost: ~¥50–100 for 30 days of data. Alternative: buy a Hong Kong or international data SIM before your trip — these work in China without any registration.",
      },
      {
        title: "Do NOT turn on your VPN until you're settled at the hotel",
        description:
          "Set up payments first, VPN second. WeChat Pay detects VPN connections and will block your session.",
      },
    ],
  },
];

const TOTAL_ITEMS = PHASES.reduce((sum, phase) => sum + phase.items.length, 0);

type IndexedPhase = Omit<Phase, "items"> & {
  items: (ChecklistItem & { index: number })[];
};

const PHASES_WITH_INDEX = PHASES.reduce<IndexedPhase[]>((acc, phase) => {
  const offset = acc.length
    ? acc[acc.length - 1].items[acc[acc.length - 1].items.length - 1].index + 1
    : 0;
  return [
    ...acc,
    {
      ...phase,
      items: phase.items.map((item, i) => ({ ...item, index: offset + i })),
    },
  ];
}, []);

function storageKey(index: number) {
  return `checklist_item_${index}`;
}

export default function PaymentChecklist() {
  const [checked, setChecked] = useState<boolean[]>(
    () => new Array(TOTAL_ITEMS).fill(false)
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = Array.from({ length: TOTAL_ITEMS }, (_, i) => {
      return localStorage.getItem(storageKey(i)) === "true";
    });
    setChecked(saved);
    setHydrated(true);
  }, []);

  function toggle(index: number) {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      localStorage.setItem(storageKey(index), String(next[index]));
      return next;
    });
  }

  const doneCount = hydrated ? checked.filter(Boolean).length : 0;
  const progress = Math.round((doneCount / TOTAL_ITEMS) * 100);

  return (
    <section className="border-b border-slate-200 bg-section-muted px-4 py-16 sm:px-0">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          icon={CheckCircle2}
          iconClassName="bg-success-green/15 text-success-green"
          title="Your China Payment Checklist"
          subtitle="Do these in order. Takes about 30 minutes total."
        />

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-slate-text">Progress</span>
            <span className="text-slate-muted">
              {doneCount} / {TOTAL_ITEMS} done
            </span>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-success-green transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {PHASES_WITH_INDEX.map((phase) => {
            const PhaseIcon = phase.icon;
            return (
              <div
                key={phase.label}
                className={`rounded-2xl border p-5 shadow-sm ${phase.cardClass}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${phase.tagClass}`}
                  >
                    <PhaseIcon className="h-4 w-4" aria-hidden />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${phase.tagClass}`}
                  >
                    {phase.label}
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {phase.items.map((item) => {
                    const isChecked = hydrated && checked[item.index];
                    return (
                      <li key={item.index}>
                        <label
                          className={`flex cursor-pointer gap-3 rounded-xl border p-4 transition-colors ${
                            isChecked
                              ? "border-success-green/30 bg-success-green/5"
                              : "border-slate-200/80 bg-white hover:border-slate-300"
                          }`}
                        >
                          <span className="mt-0.5 shrink-0">
                            {isChecked ? (
                              <CheckCircle2
                                className="h-5 w-5 text-success-green"
                                aria-hidden
                              />
                            ) : (
                              <Circle
                                className="h-5 w-5 text-slate-300"
                                aria-hidden
                              />
                            )}
                          </span>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggle(item.index)}
                            className="sr-only"
                          />
                          <span>
                            <span
                              className={`font-semibold ${isChecked ? "text-success-green line-through decoration-success-green/40" : "text-slate-text"}`}
                            >
                              {item.title}
                            </span>
                            {!isChecked && (
                              <span className="mt-1 block text-sm text-slate-muted leading-relaxed">
                                {item.description}
                              </span>
                            )}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
