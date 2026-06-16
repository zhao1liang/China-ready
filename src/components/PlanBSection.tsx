import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Car,
  CheckCircle2,
  CreditCard,
  MessageCircle,
  Smartphone,
} from "lucide-react";

const COMPARISON_ROWS = [
  {
    situation: "Street food stall",
    withPay: "✅ Scan and pay",
    withoutPay: "💵 Cash",
  },
  {
    situation: "Restaurant",
    withPay: "✅ Scan and pay",
    withoutPay: "💳 Ask for card terminal or 💵 cash",
  },
  {
    situation: "Metro",
    withPay: "✅ Scan to enter",
    withoutPay: "🎫 Window ticket or machine",
  },
  {
    situation: "Taxi",
    withPay: "✅ In-app payment",
    withoutPay: "💵 Cash (always accepted)",
  },
  {
    situation: "Hotel",
    withPay: "✅ Any method",
    withoutPay: "✅ International card always accepted",
  },
  {
    situation: "Didi rideshare",
    withPay: "✅ In-app",
    withoutPay: "📱 DiDi International app + your card",
  },
  {
    situation: "Online shopping",
    withPay: "✅ Easy",
    withoutPay: "❌ Very difficult without local setup",
  },
  {
    situation: "Small shops",
    withPay: "✅ Usually",
    withoutPay: "💵 Cash",
  },
];

function PlanCard({
  borderColor,
  icon: Icon,
  iconBg,
  children,
}: {
  borderColor: string;
  icon: LucideIcon;
  iconBg: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 border-l-4 bg-white p-6 shadow-sm ${borderColor}`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

export default function PlanBSection() {
  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-success-green/30 border-l-4 border-l-success-green bg-[#F0FDF4] p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-success-green text-white shadow-md shadow-success-green/25">
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h2 className="text-2xl font-bold text-slate-text">
            WeChat Pay Won&apos;t Work For You? You&apos;ll Be Fine.
          </h2>
          <p className="mt-2 text-sm text-slate-muted leading-relaxed">
            Honest answer: WeChat Pay makes China easier. It&apos;s not required
            to survive. Here&apos;s how to travel China without it.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8 text-sm text-slate-muted leading-relaxed">
        <div>
          <h3 className="text-lg font-bold text-slate-text">
            Can you travel China without WeChat Pay?
          </h3>
          <p className="mt-3">
            <strong className="text-slate-text">
              Yes. Millions of tourists do it every year.
            </strong>
          </p>
          <p className="mt-3">
            The honest picture: WeChat Pay works at 80+ million merchants. But
            China also has ATMs, bank card terminals, and a government-mandated
            policy that businesses must accept cash from anyone who wants to pay
            with it.
          </p>
          <p className="mt-3">
            You&apos;ll have more friction without WeChat Pay. You won&apos;t be
            stuck.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-text">Your Backup Stack</h3>
          <div className="mt-4 space-y-4">
            <PlanCard
              borderColor="border-l-success-green"
              icon={Banknote}
              iconBg="bg-green-100 text-success-green"
            >
              <h4 className="text-base font-bold text-slate-text">
                Cash — The Universal Fallback
              </h4>
              <p className="mt-2">
                Works everywhere. Required by law to be accepted.
              </p>
              <p className="mt-4 font-semibold text-slate-text">
                How to get RMB in China:
              </p>
              <p className="mt-2">
                ATMs across China accept international Visa and Mastercard.
                Best ATMs: Bank of China (中国银行), ICBC (工商银行), China
                Construction Bank (建设银行). These three have the highest
                acceptance rate for foreign cards.
              </p>
              <p className="mt-2">
                Withdraw ¥500–1000 at a time to minimize transaction fees. Your
                bank will charge ~1–3% foreign transaction fee per withdrawal.
              </p>
              <p className="mt-4 font-semibold text-slate-text">
                What cash covers:
              </p>
              <ul className="mt-2 space-y-1">
                <li>✅ Street food and local restaurants</li>
                <li>✅ Small shops and markets</li>
                <li>✅ Taxis (negotiate price first or confirm meter is on)</li>
                <li>✅ Temple and attraction entry fees</li>
                <li>✅ Convenience stores</li>
              </ul>
              <p className="mt-4 font-semibold text-slate-text">
                What cash doesn&apos;t cover:
              </p>
              <ul className="mt-2 space-y-1">
                <li>❌ Some self-checkout kiosks (QR code only)</li>
                <li>
                  ❌ Certain metro lines in newer cities (though most have manned
                  windows)
                </li>
                <li>❌ Didi (rideshare) — app-based only</li>
              </ul>
            </PlanCard>

            <PlanCard
              borderColor="border-l-tip-text"
              icon={CreditCard}
              iconBg="bg-tip-bg text-tip-text"
            >
              <h4 className="text-base font-bold text-slate-text">
                International Bank Cards — More Than You Think
              </h4>
              <p className="mt-2">
                China&apos;s card terminal network has expanded significantly.
                Many merchants who display WeChat Pay and Alipay QR codes also
                have card terminals behind the counter. Ask.
              </p>
              <p className="mt-4 font-semibold text-slate-text">
                Where cards reliably work:
              </p>
              <ul className="mt-2 space-y-1">
                <li>✅ International hotels (all of them)</li>
                <li>✅ Larger restaurants and chain restaurants</li>
                <li>✅ Shopping malls</li>
                <li>
                  ✅ Foreign brand stores (Nike, Zara, Starbucks, McDonald&apos;s,
                  KFC)
                </li>
                <li>✅ Convenience stores (FamilyMart, 7-Eleven, Lawson)</li>
                <li>✅ Hospital registration desks</li>
              </ul>
              <p className="mt-4 font-semibold text-slate-text">
                Cards that work best:
              </p>
              <p className="mt-2">
                Visa and Mastercard have the widest acceptance. American Express
                works at international hotels and larger merchants. UnionPay (if
                your bank offers it) works everywhere with zero friction.
              </p>
              <p className="mt-4 font-semibold text-slate-text">Pro tip:</p>
              <p className="mt-2">
                Ask &quot;可以刷卡吗?&quot; (kěyǐ shuākǎ ma?) — &quot;Can I use
                a card?&quot; Most restaurant staff will check and point you to
                the terminal if available.
              </p>
            </PlanCard>

            <PlanCard
              borderColor="border-l-purple-600"
              icon={Smartphone}
              iconBg="bg-purple-100 text-purple-700"
            >
              <h4 className="text-base font-bold text-slate-text">
                Alipay — Often Easier Than WeChat for Foreigners
              </h4>
              <p className="mt-2">
                Since 2023, Alipay has made significant improvements for foreign
                users. In many ways it&apos;s now simpler than WeChat Pay for
                first-time setup.
              </p>
              <p className="mt-4 font-semibold text-slate-text">
                Why Alipay might work when WeChat Pay doesn&apos;t:
              </p>
              <ul className="mt-2 space-y-1">
                <li>Less strict on friend verification requirements</li>
                <li>Cleaner international card onboarding flow</li>
                <li>
                  Dedicated &quot;Tour Pass&quot; feature designed specifically
                  for foreigners
                </li>
              </ul>
              <p className="mt-4 font-semibold text-slate-text">
                How to set up Alipay with a foreign card:
              </p>
              <ol className="mt-2 list-decimal space-y-2 pl-5">
                <li>
                  Download Alipay from your home country&apos;s App Store.
                </li>
                <li>
                  Sign up with your foreign phone number. Select your country
                  code and enter your number. Unlike WeChat, Alipay rarely
                  requires a friend to verify you.
                </li>
                <li>
                  Tap &quot;Tour Pass&quot; on the home screen. This is
                  Alipay&apos;s dedicated feature for foreign visitors. It lets
                  you top up a balance using your international card and spend
                  from that balance — no Chinese bank account needed.
                </li>
                <li>
                  Link your international card and top up. Accepted: Visa,
                  Mastercard, Maestro. Minimum top-up: ¥100 RMB (~$14 USD).
                  Maximum balance: ¥5,000 RMB at any time.
                </li>
                <li>
                  Use the QR code the same way as WeChat Pay. Tap Pay → show
                  your screen or scan the merchant QR code.
                </li>
              </ol>
              <p className="mt-4">
                <strong className="text-slate-text">Note on Alipay limits:</strong>{" "}
                The Tour Pass has a ¥50,000 RMB (~$7,000 USD) annual limit. More
                than enough for any tourist trip.
              </p>
            </PlanCard>

            <PlanCard
              borderColor="border-l-orange-500"
              icon={Car}
              iconBg="bg-orange-100 text-orange-700"
            >
              <h4 className="text-base font-bold text-slate-text">
                Getting Around Without the Apps
              </h4>
              <p className="mt-4 font-semibold text-slate-text">
                Taxis (no app needed):
              </p>
              <p className="mt-2">
                Hail from the street or taxi stands outside hotels, malls, and
                train stations. Show the driver your destination in Chinese
                characters (saved in your phone). Confirm the meter is running
                before you move. Pay with cash. Drivers always accept cash.
                Typical fare: ¥15–40 for most city trips.
              </p>
              <p className="mt-4 font-semibold text-slate-text">
                DiDi without WeChat Pay:
              </p>
              <p className="mt-2">
                DiDi (China&apos;s Uber) has an international version. Download
                &quot;DiDi — Ride Hailing App&quot; from your home app store.
                Register with your foreign phone number. Link your international
                Visa or Mastercard directly. Works without WeChat Pay or Alipay
                entirely.
              </p>
              <p className="mt-4 font-semibold text-slate-text">
                Metro systems:
              </p>
              <p className="mt-2">
                All major Chinese cities have manned ticket windows. Show your
                destination on the metro map (screenshot it), pay cash, get a
                token. Some metro systems also have machines that accept
                international cards — look for the Visa/Mastercard logo on the
                machine.
              </p>
              <p className="mt-4 font-semibold text-slate-text">
                Train tickets:
              </p>
              <p className="mt-2">
                Book on Trip.com (English language, accepts international cards).
                Or buy at the station window — bring your passport, it&apos;s
                required. Say the city name and date, staff will help. No app or
                WeChat Pay required.
              </p>
            </PlanCard>

            <PlanCard
              borderColor="border-l-indigo-500"
              icon={MessageCircle}
              iconBg="bg-indigo-100 text-indigo-700"
            >
              <h4 className="text-base font-bold text-slate-text">
                Staying in Touch — When WeChat Isn&apos;t an Option
              </h4>
              <p className="mt-2">
                WeChat is how most people in China chat — but if your account is
                banned, your phone won&apos;t run the app, or verification
                failed, you still have options. One traveler in Shanghai was
                stuck with only email and a mutual friend as a relay. The
                workaround that worked: <strong>Alipay messaging</strong>.
              </p>
              <p className="mt-4 font-semibold text-slate-text">
                Alipay chat (often overlooked):
              </p>
              <ol className="mt-2 list-decimal space-y-2 pl-5">
                <li>
                  Download Alipay and set up with your foreign phone + card (see
                  Tour Pass above — no friend scan needed for most foreigners).
                </li>
                <li>
                  Tap the + icon → Add Friend → search by your friend&apos;s
                  phone number or scan their Alipay QR code.
                </li>
                <li>
                  Once added, open their profile → Message. It&apos;s not WeChat,
                  but it works for text, photos, and voice notes inside China.
                </li>
              </ol>
              <p className="mt-4 font-semibold text-slate-text">
                Other fallbacks:
              </p>
              <ul className="mt-2 space-y-1">
                <li>✅ Email — slow but reliable across borders</li>
                <li>✅ Mutual friend relay — awkward but works in a pinch</li>
                <li>
                  ⚠️ WhatsApp / Telegram — both usually need VPN inside China;
                  your friend in Shanghai may need VPN too
                </li>
                <li>
                  ❌ Never register WeChat on a PC virtual machine — accounts
                  get banned and are hard to recover
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-slate-text">Samsung / Android note:</strong>{" "}
                WeChat generally runs on Samsung A-series phones via Google Play.
                If the app &quot;doesn&apos;t work,&quot; it&apos;s often an{" "}
                <em>account ban</em> (VM signup, verification flags) rather than
                the hardware. A fresh account on the real device — with card
                verification, not a VM — is the fix, not a new phone.
              </p>
            </PlanCard>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-text">
            The Honest Comparison
          </h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3 pr-4 font-semibold text-slate-text">
                    Situation
                  </th>
                  <th className="py-3 pr-4 font-semibold text-slate-text">
                    With WeChat Pay
                  </th>
                  <th className="py-3 font-semibold text-slate-text">
                    Without WeChat Pay
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.situation} className="border-b border-slate-100">
                    <td className="py-3 pr-4 text-slate-text">
                      {row.situation}
                    </td>
                    <td className="py-3 pr-4">{row.withPay}</td>
                    <td className="py-3">{row.withoutPay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            <strong className="text-slate-text">Bottom line:</strong> Cash +
            international card + DiDi International covers 95% of what a tourist
            actually needs. WeChat Pay handles the remaining friction. It&apos;s
            worth setting up. It&apos;s not worth panicking over.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-text">
            Still Worried? Ask Below.
          </h3>
          <p className="mt-2 text-sm text-slate-muted">
            Drop your specific situation in the comments. Someone who&apos;s been
            in exactly your position will answer.
          </p>
        </div>
      </div>
    </div>
  );
}
