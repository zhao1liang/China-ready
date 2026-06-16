import {
  Accordion,
  AccordionItem,
  WarnBox,
  TipBox,
} from "@/components/Accordion";
import PlanBSection from "@/components/PlanBSection";
import SectionHeader from "@/components/SectionHeader";
import StepScreenshot, { StepScreenshotRow } from "@/components/StepScreenshot";
import {
  BookOpen,
  CircleX,
  Globe,
  Lightbulb,
  Sparkles,
  Train,
  Wrench,
} from "lucide-react";

const ERRORS = [
  {
    title: "\"This card is not supported for this service\"",
    content:
      "Your card is prepaid or virtual, or your bank has not enabled international third-party payment.",
    fix: "Switch to a physical Visa or Mastercard. Call your bank and explicitly ask to enable \"international third-party payment aggregators.\"",
  },
  {
    title: "SMS code never arrived",
    content:
      "You may be using a VoIP number, or your spam filter caught the message.",
    fix: "Check your junk SMS folder. Let the 60-second timer expire — WeChat will offer a phone call option. Never use Google Voice or Skype numbers.",
  },
  {
    title: "\"Identity verification failed\"",
    content: "Usually caused by glare on your passport photo.",
    fix: "Use the matte surface trick from Step 3. Make sure the two machine-readable lines at the bottom of your passport photo page are fully visible.",
  },
  {
    title: "\"Non compliant activities were detected\"",
    content:
      "Your friend completes the QR verification scan, but the next screen blocks you anyway. Common after VPN use, device changes, rapid retries, or new accounts — WeChat rarely explains why.",
    fix: "VPN fully off before you start the countdown, use cellular data in China, wait 48–72 hours between attempts. Each friend can only verify one person per 30 days, and your account has a monthly cap — don't waste slots. WeChat support rarely responds; there is no guaranteed fix.",
  },
  {
    title: "Friend verification timed out",
    content:
      "WeChat gives your friend roughly 3 minutes to scan your QR code. If you're coordinating over Instagram or WhatsApp, toggling VPN, and switching back to WeChat, the window closes before the scan completes.",
    fix: "Before tapping \"Request verification\": VPN off, verification QR on screen, friend on WeChat with Scan ready. Message them on WeChat itself — not another app. Do a dry run once so nobody panics when the timer starts.",
  },
  {
    title: "Payment rejected at a store",
    content:
      "Foreign cards cannot pay personal QR codes — only registered business accounts. This is the most common surprise for foreigners.",
    fix: "Ask if the merchant has a business payment QR code. If not, use cash. ATMs across China accept international cards.",
  },
  {
    title: "\"Payment limit reached\"",
    content: "The ¥5,000 RMB (~$700 USD) per-transaction limit is fixed.",
    fix: "Split into multiple transactions, or ask if the merchant accepts international credit cards directly. Monthly limits reset on the 1st.",
  },
];

const TIPS = [
  "Can't use WeChat at all? Add your friend on Alipay (search their phone number) and chat there — it's built into the app and works inside China without a WeChat account.",
  "No card option at signup? A US or Canada phone number (with family permission) often skips friend verification too.",
  "Uninstalling and reinstalling WeChat deletes ALL your chat history. There is no cloud backup for foreigners. Screenshot important contacts before you reinstall.",
  "Friend verification is a ~3-minute countdown. VPN off, QR ready, friend on WeChat with Scan open — before you start. Don't coordinate via Instagram DMs mid-rush.",
  "Each helper can verify one person every 30 days, and WeChat caps how many friends can verify your account per month. Plan carefully — don't burn slots on test runs.",
  "VPN rules flip by country: OFF inside China (Pay fails with VPN on), ON in banned countries like India (WeChat may not connect without it). Test on your actual phone before you travel.",
  "Inside China: turn VPN off every time before opening WeChat Pay — even after setup is complete.",
  "Personal QR codes don't work with foreign cards. Street vendors and small sellers often use personal codes. Your card will be rejected. Carry ¥200–300 cash as backup.",
  "Call your bank before you land, not after your card is rejected at a restaurant.",
  "Physical Revolut and Wise cards work well. Their virtual cards do not. Worth ordering a physical card before your trip.",
  "WeChat Pay works at 80 million+ merchants in China — restaurants, metro stations, taxis, convenience stores. Once set up, you rarely need cash.",
  "For high-speed trains: set up Alipay's transit QR code in the correct province after you land — you can't activate it from outside China.",
];

export default function TutorialContent() {
  return (
    <section className="bg-white px-4 py-16 sm:px-0">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          icon={BookOpen}
          iconClassName="bg-china-red/10 text-china-red"
          title="Step-by-Step Setup"
          subtitle="Tap each step to expand — screenshots show exactly what to look for on your phone."
        />

        <div className="mt-8">
        <Accordion>
          <AccordionItem
            step="Step 1"
            stepNumber={1}
            title="Download the Right Version of WeChat"
            defaultOpen
          >
            <p>
              Download WeChat from your country&apos;s App Store (iOS) or Google
              Play (Android).
            </p>
            <p className="mt-2">
              Do NOT download from a Chinese app store — you need the
              international version.
            </p>
            <p className="mt-2">
              After installing, go to Me → Settings → About and confirm you are
              on the latest version.
            </p>
            <WarnBox>
              If a friend in China sends you a download link, ignore it. Always
              download from the official app store.
            </WarnBox>
            <StepScreenshot
              src="/images/wechat/01-signup-splash.png"
              alt="WeChat welcome screen with Log In and Sign Up buttons"
              caption="After installing, you'll see this screen — tap Sign Up (green button)."
            />
          </AccordionItem>

          <AccordionItem
            step="Step 2"
            stepNumber={2}
            title="Register with Your Foreign Phone Number"
          >
            <p>Open WeChat and tap &quot;Sign Up&quot;.</p>
            <StepScreenshot
              src="/images/wechat/02-signup-menu.png"
              alt="WeChat sign up menu with Sign up via Mobile option"
              caption="Tap Sign up via Mobile — ignore Facebook unless you already use it."
            />
            <p className="mt-2">
              Select your country code (e.g. US +1, UK +44, Singapore +65).
            </p>
            <p className="mt-2">
              Enter your number — even if it starts with 0, do NOT add a leading
              &quot;0&quot; after selecting the country code.
            </p>
            <p className="mt-2">
              Example: UK number 07911 123456 → enter 7911 123456
            </p>
            <p className="mt-2">
              You will receive a verification SMS. Enter the 6-digit code.
            </p>
            <StepScreenshot
              src="/images/wechat/03-signup-phone.png"
              alt="WeChat sign up form with country code and phone number fields"
              caption="Enter country/region, phone number, and password — then Accept and Continue."
            />
            <StepScreenshot
              src="/images/wechat/04-captcha.png"
              alt="WeChat security verification captcha popup"
              caption="Complete the security puzzle if prompted — this is normal during signup."
            />
            <StepScreenshot
              src="/images/wechat/05-enable-services.png"
              alt="WeChat Enable Weixin Services screen with toggles"
              caption="For a short trip, Channels + Mini Programs is enough. Tap Done."
            />
            <TipBox>
              <strong>No SMS?</strong> Check your junk/spam folder first. Then
              let the 60-second timer run out — WeChat will offer a
              &quot;verify by phone call&quot; option. Use that.
              <br />
              <br />
              Do NOT use VoIP numbers (Google Voice, Skype, Talkatone) — WeChat
              detects and blocks them.
            </TipBox>
            <TipBox>
              <strong>Skip friend verification later:</strong> This step is not
              equally strict in every country. Two common workarounds: bind your
              own <strong>foreign debit or credit card</strong> when WeChat
              offers card verification (no friend scan needed), or register with
              a <strong>US / Canada</strong> family member&apos;s phone number
              with their permission.
            </TipBox>
          </AccordionItem>

          <AccordionItem
            step="Heads up"
            title="When a Friend Must Scan to Verify You"
            accent="slate"
          >
            <p>
              Sometimes WeChat blocks new or flagged accounts until an existing
              user scans your QR code. This is separate from passport / WeChat
              Pay setup — but just as stressful.
            </p>
            <p className="mt-3 text-sm text-slate-muted">
              <strong className="text-slate-text">Not required everywhere.</strong>{" "}
              Rules vary by country and phone number. You may be able to skip
              friend verification entirely — see the options below.
            </p>
            <TipBox>
              <strong>Easiest skip: verify with your own card.</strong> When
              WeChat prompts you, look for the option to verify identity with a{" "}
              <strong>debit or credit card</strong> instead of a friend scan.
              Foreign Visa / Mastercard cards are accepted. One traveler
              registered this way — no QR code, no 3-minute countdown, no burning
              a friend&apos;s slot.
            </TipBox>
            <TipBox>
              <strong>Other workarounds:</strong> Registering with a{" "}
              <strong>US or Canada</strong> phone number (with family permission
              — see Step 2) also often avoids friend verification.
            </TipBox>
            <WarnBox>
              <strong>~3 minute window.</strong> Once the QR appears, your friend
              must scan and confirm before the timer runs out. If you are
              messaging on Instagram (&quot;OK verify now!&quot;), killing VPN,
              and switching back to WeChat — you will miss it.
            </WarnBox>
            <p className="mt-4 font-semibold text-slate-text">
              Before you tap &quot;Request verification&quot;:
            </p>
            <ul className="mt-2 space-y-1">
              <li>✅ VPN fully off (not just paused)</li>
              <li>✅ Your verification QR already on screen</li>
              <li>✅ Friend on WeChat → Scan → ready to point at your phone</li>
              <li>✅ Coordinating on WeChat itself, not another app</li>
            </ul>
            <TipBox>
              Each friend can help verify{" "}
              <strong>one person every 30 days</strong>. WeChat also limits how
              many different friends can verify <em>your</em> account per month.
              Treat every attempt as precious — no practice runs.
            </TipBox>
          </AccordionItem>

          <AccordionItem
            step="Step 3"
            stepNumber={3}
            title="Verify Your Identity with Your Passport"
          >
            <p>Tap Me → Services → WeChat Pay → Apply Now.</p>
            <p className="mt-2">
              WeChat will ask you to photograph your passport and take a selfie.
            </p>
            <TipBox>
              <strong>Matte surface trick:</strong> Place your passport on a dark
              matte surface (a black T-shirt works perfectly) with good
              lighting. This eliminates glare so WeChat&apos;s AI can read the MRZ
              code (the two lines at the bottom of the photo page) on the first
              try. Most failed verifications are caused by glare. This fixes it.
            </TipBox>
          </AccordionItem>

          <AccordionItem
            step="Step 4"
            stepNumber={4}
            accent="blue"
            title="Link Your International Credit or Debit Card"
          >
            <p>Go to: Me → Services → Wallet → Bank Cards → + (Add Card)</p>
            <StepScreenshot
              src="/images/wechat/06-pay-services.png"
              alt="WeChat Pay and Services screen with Money and Wallet buttons"
              caption="Me → Pay and Services → Wallet"
            />
            <StepScreenshotRow>
              <StepScreenshot
                src="/images/wechat/07-bank-cards.png"
                alt="WeChat Bank Cards screen with Add a Bank Card button"
                caption="Tap + Add a Bank Card"
              />
              <StepScreenshot
                src="/images/wechat/08-add-card.png"
                alt="WeChat Add Your Bank Card form"
                caption="Enter card number → Next"
              />
            </StepScreenshotRow>
            <p className="mt-2 text-sm text-slate-muted">
              The same card can sometimes satisfy{" "}
              <strong className="text-slate-text">account verification</strong>{" "}
              at registration — not just WeChat Pay setup. If WeChat offers
              &quot;verify with bank card,&quot; use your own Visa or Mastercard
              and skip the friend QR scan entirely.
            </p>
            <p className="mt-3 font-semibold text-slate-text">
              Cards that work:
            </p>
            <ul className="mt-2 space-y-1">
              <li>✅ Visa — most reliable</li>
              <li>✅ Mastercard — same as Visa, no issues reported</li>
              <li>✅ American Express — added in 2025</li>
              <li>✅ JCB — supported</li>
              <li>✅ Physical Revolut card — use physical, not virtual</li>
              <li>✅ Physical Wise card — use physical, not virtual</li>
            </ul>
            <p className="mt-3 font-semibold text-slate-text">
              Cards that do NOT work:
            </p>
            <ul className="mt-2 space-y-1">
              <li>❌ Prepaid cards (Vanilla, Paysafe, gift cards)</li>
              <li>❌ Virtual cards of any kind</li>
            </ul>
            <TipBox>
              Before your trip, message your bank and say exactly: &quot;Please
              enable international online transactions and allow payments through
              third-party payment aggregators including WeChat Pay and
              Alipay.&quot; This prevents most card failures in China.
            </TipBox>
          </AccordionItem>

          <AccordionItem
            step="Step 5"
            stepNumber={5}
            accent="blue"
            title="You're Set — Here's How to Pay"
          >
            <p className="font-semibold text-slate-text">
              Method 1: Scan the merchant&apos;s QR code
            </p>
            <p className="mt-2">
              Tap + (top right) → Scan → point at the merchant&apos;s payment QR
              code. Common at street stalls, taxis, and small shops.
            </p>
            <StepScreenshot
              src="/images/wechat/09-pay-scan.png"
              alt="Illustration showing how to scan a merchant QR code in WeChat"
              caption="+ → Scan → scan merchant QR code"
            />
            <p className="mt-4 font-semibold text-slate-text">
              Method 2: Show your payment code
            </p>
            <p className="mt-2">
              Tap + → Money (or Me → Pay and Services → Money). Show your screen
              for the merchant to scan. Common at supermarkets and chain stores.
            </p>
            <StepScreenshotRow>
              <StepScreenshot
                src="/images/wechat/10-pay-money-menu.png"
                alt="WeChat plus menu with Money option highlighted"
                caption="+ → Money"
              />
              <StepScreenshot
                src="/images/wechat/11-pay-show-code.png"
                alt="Phone showing WeChat payment QR code being scanned by merchant device"
                caption="Merchant scans your code"
              />
            </StepScreenshotRow>
            <p className="mt-2">
              Your currency is automatically converted to RMB.
            </p>
            <p className="mt-3 font-semibold text-slate-text">
              Spending limits:
            </p>
            <ul className="mt-2 space-y-1">
              <li>Per transaction: ¥5,000 RMB (~$700 USD)</li>
              <li>Monthly total: ¥50,000 RMB (~$7,000 USD)</li>
              <li>Limits reset on the 1st of each month</li>
            </ul>
          </AccordionItem>
        </Accordion>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-tip-text/20 bg-gradient-to-br from-tip-bg/80 to-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tip-text text-white">
              <Train className="h-5 w-5" aria-hidden />
            </span>
            <div>
          <h2 className="text-xl font-bold text-slate-text">
            Bonus: Alipay Transit Code (Trains &amp; Metro)
          </h2>
          <p className="mt-3 text-sm text-slate-muted leading-relaxed">
            This uses <strong className="text-slate-text">Alipay</strong>, not
            WeChat Pay — but it solves the same problem: getting through train
            station gates without a Chinese bank account.
          </p>
          <StepScreenshot
            src="/images/wechat/12-transit-search.png"
            alt="WeChat search results for 乘车码 transit code mini program"
            caption="Search 乘车码 (Transit Code) in WeChat — enable before you reach the gate."
          />
          <ul className="mt-4 space-y-3 text-sm text-slate-muted leading-relaxed">
            <li>
              <strong className="text-slate-text">
                You cannot verify a transit card outside China.
              </strong>{" "}
              Set this up after you land, with your Alipay linked to your
              international credit card.
            </li>
            <li>
              Once Alipay is bound to your card and you enable the transit
              feature, a QR code will appear in the app.
            </li>
            <li>
              <strong className="text-slate-text">
                Select the correct province
              </strong>{" "}
              — transit QR codes are province-specific. A Beijing code will not
              work in Shanghai, and vice versa.
            </li>
            <li>
              At train station ticket gates, scan that QR code. The fare is
              automatically deducted from your linked credit card.
            </li>
          </ul>
          <WarnBox>
            Enable this before you reach the gate — not at the gate with a queue
            behind you. Turn off VPN when setting up Alipay, same as WeChat Pay.
          </WarnBox>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-warn-text/20 bg-gradient-to-br from-warn-bg/80 to-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-warn-text text-white">
              <Globe className="h-5 w-5" aria-hidden />
            </span>
            <div>
          <h2 className="text-xl font-bold text-slate-text">
            VPN Rules Flip by Country
          </h2>
          <p className="mt-3 text-sm text-slate-muted leading-relaxed">
            The yellow banner at the top applies{" "}
            <strong className="text-slate-text">inside China</strong>: turn VPN{" "}
            <strong className="text-slate-text">off</strong> for WeChat Pay setup
            and payments. In countries where WeChat is{" "}
            <strong className="text-slate-text">banned</strong> (e.g. India), you
            often need VPN <strong className="text-slate-text">on</strong> just to
            open the app at all.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-muted leading-relaxed">
            <li>
              <strong className="text-slate-text">🇨🇳 In China:</strong> VPN off
              → WeChat Pay works. VPN on → silent failures, verification blocks.
            </li>
            <li>
              <strong className="text-slate-text">🇮🇳 In India (banned):</strong>{" "}
              US-region iPhones usually need VPN on to connect. Yet some
              travelers report a HK/China iPhone or Chinese Android phone working
              without VPN on the same Wi‑Fi — likely due to device region, App
              Store build, or inconsistent ISP blocking.
            </li>
            <li>
              <strong className="text-slate-text">Before your trip:</strong> test
              WeChat on the exact phone you&apos;ll carry. Don&apos;t assume a
              family member&apos;s phone behaves the same as yours.
            </li>
          </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeader
            icon={Wrench}
            iconClassName="bg-error-bg text-error-title"
            title="When Things Go Wrong"
            subtitle="Tap-friendly fixes for the errors you'll actually see."
          />
        <div className="mt-6 space-y-3">
          {ERRORS.map((err) => (
            <div
              key={err.title}
              className="flex gap-4 rounded-2xl border border-error-bg/80 bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-error-bg text-error-title">
                <CircleX className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
              <h3 className="font-bold text-error-title">{err.title}</h3>
              <p className="mt-2 text-sm text-slate-text">{err.content}</p>
              <p className="mt-3 rounded-lg bg-section-muted px-3 py-2 text-sm text-slate-muted">
                <strong className="text-slate-text">Fix:</strong> {err.fix}
              </p>
              </div>
            </div>
          ))}
        </div>
        </div>

        <PlanBSection />

        <div className="mt-16">
          <SectionHeader
            icon={Sparkles}
            iconClassName="bg-purple-100 text-purple-700"
            title="Things Nobody Tells You"
            subtitle="Insider tips from travelers who learned the hard way."
          />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {TIPS.map((tip, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-muted leading-relaxed"
            >
              <Lightbulb
                className="mt-0.5 h-4 w-4 shrink-0 text-amber-500"
                aria-hidden
              />
              <span>{tip}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
