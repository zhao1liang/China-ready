import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

function StoryBlock({
  tag,
  title,
  subtitle,
  quote,
  footnote,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: {
  tag: string;
  title: string;
  subtitle: string;
  quote: ReactNode;
  footnote?: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-gradient-to-r from-china-red/5 to-transparent px-6 py-5">
        <span className="inline-block rounded-full bg-china-red/10 px-3 py-1 text-xs font-semibold text-china-red">
          {tag}
        </span>
        <h3 className="mt-3 text-xl font-bold text-slate-text">{title}</h3>
        <p className="mt-1 text-sm text-slate-muted">{subtitle}</p>
      </div>

      <div className="px-6 py-5">
        <blockquote className="relative rounded-xl bg-slate-50 px-5 py-4 text-sm text-slate-text leading-relaxed">
          <span
            className="absolute -top-2 left-4 text-4xl leading-none text-china-red/20"
            aria-hidden
          >
            &ldquo;
          </span>
          <div className="relative">{quote}</div>
        </blockquote>

        {footnote && (
          <p className="mt-4 text-xs text-slate-muted italic">{footnote}</p>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-error-bg/80 bg-error-bg/10 p-4">
            <h4 className="flex items-center gap-2 font-bold text-error-title">
              <AlertTriangle className="h-4 w-4" aria-hidden />
              {leftTitle}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-muted">
              {leftItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-error-title">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-tip-text/20 bg-tip-bg/40 p-4">
            <h4 className="flex items-center gap-2 font-bold text-tip-text">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              {rightTitle}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-muted">
              {rightItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-tip-text">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TravelerStory() {
  return (
    <section className="border-t border-slate-200 bg-section-muted px-4 py-16 sm:px-0">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          icon={AlertTriangle}
          iconClassName="bg-china-red/10 text-china-red"
          title="Real Traveler Stories"
          subtitle="China is wonderful when nothing goes wrong — these are the moments when the digital tools fight back."
        />

        <div className="mt-10 space-y-6">
          <StoryBlock
            tag="Real traveler story · WeChat verification"
            title="Five Friends, Zero Verifications"
            subtitle="作为一个科技如此发达的国家，为什么还有那么多外国人在用微信时遇到问题？"
            quote={
              <>
                <p>
                  My trip has been absolutely wonderful — people are great,
                  everything is convenient{" "}
                  <em>if nothing goes wrong</em>. I&apos;m lucky to have Chinese
                  and overseas friends on WeChat who meet the verification
                  requirements. Yet after at least{" "}
                  <strong>five different friends</strong> tried — VPN off every
                  time — it still failed.
                </p>
                <p className="mt-3">
                  The friend completes the scan. The next loading page says:{" "}
                  <strong>
                    &quot;Non compliant activities were detected.&quot;
                  </strong>{" "}
                  I submitted a report to WeChat&apos;s help centre. Online
                  sources say they rarely respond. I&apos;m heartbroken — I
                  can&apos;t reach many of my Chinese friends anymore.
                </p>
                <p className="mt-3">
                  And the process itself is absurd: your friend has{" "}
                  <strong>under 3 minutes</strong> to complete the scan. I&apos;d
                  be mid-conversation on Instagram — &quot;OK, verify now!&quot; —
                  then scramble to kill VPN and finish on WeChat before the
                  timer expired. Ridiculous. There&apos;s also a monthly cap on
                  how many friends can help verify you.
                </p>
              </>
            }
            footnote="There's often nothing anyone can do. If this happened to you, share below — at least the next traveler won't feel alone."
            leftTitle="What happened"
            leftItems={[
              "Friend verification appears to succeed, then the next screen blocks you",
              "\"Non compliant activities were detected\" — no clear explanation",
              "~3 minute countdown — coordinating across apps while killing VPN is a recipe for failure",
              "5+ qualified helpers, VPN off each attempt — same outcome",
            ]}
            rightTitle="PSA — know this first"
            rightItems={[
              "Friend scan must finish in ~3 minutes — have VPN off and both phones ready before you start",
              "Coordinate on WeChat, not Instagram DMs — no time to switch apps mid-countdown",
              "Uninstall + reinstall = you lose ALL chat history permanently",
              "Each friend: one verify per 30 days; your account also has a monthly cap on friend verifications",
            ]}
          />

          <StoryBlock
            tag="Real traveler story · Beijing"
            title="Falling for the Oldest Scam in Beijing"
            subtitle="中了北京最老套的骗局 — shared by a visitor on his last day in China"
            quote={
              <>
                <p>
                  Met a girl on Tinder, moved to WeChat the same day. Good
                  English, verified profile. I let her pick the place — we
                  walked into the first spot we saw: <strong>Ace Club</strong>{" "}
                  in a mall. Everything on the menu was wildly overpriced. She
                  suggested &quot;just a beer&quot; (¥280 each). I thought two
                  beers would be fine.
                </p>
                <p className="mt-3">
                  She didn&apos;t stop drinking — like water — and kept saying
                  &quot;don&apos;t worry.&quot; When the bill came, it was huge.
                  I only have myself to blame. Other matches had never been
                  this eager to meet immediately. Lesson learned: watch the
                  details.
                </p>
              </>
            }
            footnote="He didn't ask for a refund or go to the police — he had agreed to keep drinking."
            leftTitle="Red flags"
            leftItems={[
              "Moves from Tinder to WeChat on the same day — unusually fast",
              "Insists on choosing the venue because you \"don't know the area\"",
              "First bar/club you see in a mall — often a partner venue",
              "Menu prices are extreme; she suggests \"just one beer\" (¥280+ each)",
              "She drinks fast and says \"don't worry\" while the tab grows",
            ]}
            rightTitle="How to avoid it"
            rightItems={[
              "You pick the place — use Google Maps / Dianping reviews first",
              "Set a budget cap before you sit down; check prices per item",
              "Split the bill or pay as you go — never \"open tab\" with someone you just met",
              "If the bill shocks you, refuse extra rounds and pay only what you ordered",
            ]}
          />

          <StoryBlock
            tag="Real traveler story · India & VPN"
            title="Dad's iPhone Works Without VPN. Mine Doesn't."
            subtitle="微信在印度被封禁——但同一屋檐下，两部 iPhone 表现完全不同"
            quote={
              <>
                <p>
                  WeChat is banned in India. My US iPhone needs a VPN to use it
                  at all. I&apos;d heard that a Chinese-made phone in India can
                  run WeChat without VPN — but today I watched my dad&apos;s{" "}
                  <strong>iPhone 13 Pro Max</strong> use WeChat with{" "}
                  <strong>NordVPN turned off</strong>.
                </p>
                <p className="mt-3">
                  I&apos;d assumed he had VPN on this whole time. He doesn&apos;t
                  understand routing or VPNs — I was worried he&apos;d hit problems.
                  Now I&apos;m genuinely confused: how is his phone connecting
                  when mine won&apos;t without a tunnel?
                </p>
              </>
            }
            footnote="Nobody has a definitive answer — but you're not crazy for seeing two phones behave differently on the same Wi‑Fi."
            leftTitle="What we know"
            leftItems={[
              "WeChat is banned in India — most US-region phones need VPN to connect",
              "Same home network, two iPhones — one works bare, one doesn't",
              "Chinese-brand Android phones are often reported to connect without VPN",
              "\"It works\" may mean chat only — Pay, verify, and updates can still fail",
            ]}
            rightTitle="Plausible explanations"
            rightItems={[
              "Sales region matters — HK/China iPhones may run a different WeChat build via a different App Store",
              "Apple ID country can differ between family members' phones",
              "Indian ISP blocks are inconsistent — partial connections sometimes slip through",
              "Inside China: VPN OFF. In banned countries: VPN often ON. Opposite rules.",
            ]}
          />

          <StoryBlock
            tag="Real traveler story · Shanghai"
            title="WeChat Banned — How Do I Reach My Friend?"
            subtitle="三星 A13 用不了微信，PC 虚拟机注册的账号被封——还能怎么联系上海的朋友？"
            quote={
              <>
                <p>
                  I have a friend staying in Shanghai and need to stay in touch.
                  WeChat isn&apos;t an option — my Samsung A13 doesn&apos;t
                  work with it, and the account I created on my PC was{" "}
                  <strong>banned for using a virtual machine</strong> (apparently
                  that&apos;s flagged as abuse). I tried Zangi but it seems
                  unavailable there now.
                </p>
                <p className="mt-3">
                  Right now we only have email, or asking a mutual friend to pass
                  messages. There has to be something better.
                </p>
              </>
            }
            footnote="Community answer that worked for others: add your friend on Alipay and chat there until you find a permanent solution."
            leftTitle="Why WeChat failed"
            leftItems={[
              "VM / emulator signup → account ban, often permanent",
              "Banned account poisons the device — feels like \"phone incompatible\"",
              "Zangi and similar apps come and go — don't rely on obscure messengers",
              "Email works but feels like 2005",
            ]}
            rightTitle="What to try instead"
            rightItems={[
              "Alipay: add friend by phone number → built-in messaging works in China",
              "Set up Alipay with foreign phone + Tour Pass — no WeChat friend scan",
              "WhatsApp/Telegram only if both sides accept VPN hassle inside China",
              "New WeChat account on real phone only — never VM; try card verification",
            ]}
          />
        </div>
      </div>
    </section>
  );
}