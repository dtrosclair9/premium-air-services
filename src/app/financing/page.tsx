import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import { pageMeta } from '@/lib/site'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = pageMeta({
  title: 'HVAC Financing in Lockport, LA',
  description:
    'Finance a new AC or heating system through the Wells Fargo Home Projects credit card, with approved credit. Free estimates on new systems from Premium Air Services.',
  path: '/financing',
})

// Alt text is the wording Wells Fargo requires for this banner. Don't edit it.
const bannerAlt =
  'Buy today, pay over time. Your Wells Fargo Home Projects credit card also brings you revolving line of credit that you can use over and over again, special financing where available, convenient monthly payments to fit your budget, easy-to-use online account management and bill payment options. The Wells Fargo Home Projects credit card is issued with approved credit by Wells Fargo Bank, N.A. Ask for details. Equal Housing Lender.'

const faqs: FAQ[] = [
  { q: 'Do you offer financing on a new AC?', a: 'Yes. We offer financing through the Wells Fargo Home Projects credit card, with approved credit.' },
  { q: 'Is there 0% interest financing?', a: 'Sometimes. Wells Fargo offers special financing on qualifying purchases, and those offers change. Ask us what’s available when you call.' },
  { q: 'Who approves the financing?', a: 'Wells Fargo does. They decide on approval, your credit limit and the terms. We help you get the application started.' },
  { q: 'Can I get a price before I apply?', a: 'Yes. Estimates on new systems are free, so you’ll know what the job costs before you decide anything.' },
]

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="HVAC Financing in Lockport, LA"
        intro={[
          'A new AC or heating system usually isn’t something you planned for. Premium Air Services offers financing through the Wells Fargo Home Projects credit card, so you can get the system put in now and pay it off over time.',
          'Approval and terms come from Wells Fargo. Call us and we’ll walk you through it.',
        ]}
        image="/images/work/condenser-on-stand-white-siding.jpg"
        imageAlt="New outdoor AC unit on a raised stand beside a house with white siding"
        crumbs={[{ name: 'Financing', path: '/financing' }]}
      />

      <section className="section border-b border-line" aria-labelledby="how-h">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="how-h" className="text-[32px] leading-[1.15] lg:text-[40px]">How does financing work?</h2>
            <div className="prose-body mt-6">
              <p>You apply for the Wells Fargo Home Projects credit card, and if you’re approved, you use it to pay for the job.</p>
              <p>It’s a revolving line of credit, so it stays open after the install. You pay it back in monthly payments.</p>
              <p>Wells Fargo also runs special financing offers on qualifying purchases. They change from time to time, so ask us what’s available when we give you your estimate.</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="/images/financing/wells-fargo-home-projects-card.png"
              alt={bannerAlt}
              width={600}
              height={350}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full max-w-[600px] border border-line"
            />
          </div>
        </div>
      </section>

      <section className="section border-b border-line" aria-labelledby="what-h">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="what-h" className="text-[32px] leading-[1.15] lg:text-[40px]">What can I use it for?</h2>
          </div>
          <div className="prose-body lg:col-span-7">
            <p>It makes the most sense on bigger jobs, like a full <Link href="/services/ac-installation" className="link">AC replacement</Link>, a heat pump or a new <Link href="/services/heating-repair" className="link">heating system</Link>.</p>
            <p>We’re an American Standard dealer, so most of the new systems we put in are American Standard, but you can finance any job we do. If you’re weighing a big repair against a new unit, we’ll go over both.</p>
          </div>
        </div>
      </section>

      <section className="section border-b border-line" aria-labelledby="apply-h">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="apply-h" className="text-[32px] leading-[1.15] lg:text-[40px]">How do I apply?</h2>
          </div>
          <div className="prose-body lg:col-span-7">
            <p>Call us. We’ll give you a free estimate on the new system and help you get the application started.</p>
            <p>If you take a special financing offer, read the terms before you sign. On some promotional offers, interest is charged back to the purchase date if the balance isn’t paid off in time.</p>
            <p className="text-[16px] text-muted">The Wells Fargo Home Projects credit card is issued with approved credit by Wells Fargo Bank, N.A. Equal Housing Lender.</p>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} heading="Financing questions" />
      <CtaBand heading="Ask about financing" text="Call for a free estimate on a new system, and we’ll go over financing while we’re at it." />
    </>
  )
}
