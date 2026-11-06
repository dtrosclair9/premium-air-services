import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { ownerSchema } from '@/lib/schema'
import { pageMeta } from '@/lib/site'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = pageMeta({
  title: 'About Premium Air Services in Lockport, LA',
  absoluteTitle: true,
  description:
    'Premium Air Services is an insured heating and air company in Lockport, LA. Owner Johnny Arceneaux has 22 years in HVAC. We serve homes across South Lafourche.',
  path: '/about',
})

const faqs: FAQ[] = [
  { q: 'Who owns Premium Air Services?', a: 'Johnny Arceneaux owns the company.' },
  { q: 'Where are you located?', a: 'We are based in Lockport, in Lafourche Parish, and go out to homes within about 35 miles.' },
  { q: 'Are you insured?', a: 'Yes. Premium Air Services is insured.' },
  { q: 'What kinds of homes do you work on?', a: 'Site-built houses, mobile and manufactured homes, and spaces like additions, garages and shops.' },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={ownerSchema()} />
      <PageHero
        eyebrow="About us"
        title="About Premium Air Services in Lockport, LA"
        intro="A Lockport heating and air company owned by Johnny Arceneaux, who has 22 years in the HVAC trade."
        image="/images/hero/johnny-and-son-seated.jpg"
        imageAlt="Owner Johnny Arceneaux seated beside his son, both in black Premium Air Services polo shirts"
        crumbs={[{ name: 'About', path: '/about' }]}
      />

      <section className="section border-b border-line" aria-labelledby="story-h">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="story-h" className="text-[32px] leading-[1.15] lg:text-[40px]">About our work</h2>
            <Image src="/images/work/premium-air-truck-window-logo.jpg" alt="Premium Air Services logo and phone number on the back window of a work truck" width={1200} height={1600} sizes="(min-width: 1024px) 400px, (min-width: 500px) 400px, 100vw" className="mt-8 h-auto w-full max-w-[400px]" />
          </div>
          <div className="prose-body lg:col-span-7">
            <p>Your AC runs most of the year in South Louisiana. It has to deal with heat, heavy humidity and the occasional storm that leaves a house without power for days.</p>
            <p>We work on homes in Lockport and nearby towns, from small repairs to new systems.</p>
            <p>We work on central air, heat pumps, gas and electric heat, mini splits and ductwork. Our <Link href="/services" className="link">services page</Link> lists everything, and the <Link href="/service-area" className="link">service area page</Link> shows where we go.</p>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} heading="About the company" />
      <CtaBand heading="Talk to Premium Air Services" text="Call with a question about your system, or send us a message through the contact page." />
    </>
  )
}
