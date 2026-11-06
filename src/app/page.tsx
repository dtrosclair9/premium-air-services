import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceIndex from '@/components/ServiceIndex'
import PhotoStrip from '@/components/PhotoStrip'
import VideoGrid from '@/components/VideoGrid'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { services, towns } from '@/lib/content'
import { jobVideos } from '@/lib/videos'
import { howToSchema, localBusinessSchema, ownerSchema, websiteSchema } from '@/lib/schema'
import { pageMeta, site } from '@/lib/site'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = {
  ...pageMeta({
    title: 'AC Repair & Installation in Lockport, LA | Premium Air',
    description:
      'Premium Air Services handles AC repair, installation, heating and maintenance for homes in Lockport and across Lafourche and Terrebonne. Call to schedule.',
    path: '/',
    absoluteTitle: true,
  }),
  other: {
    'geo.region': 'US-LA',
    'geo.placename': 'Lockport',
    'geo.position': `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
}

const steps = [
  { name: 'Call us', text: 'Tell us your address, what kind of system you’ve got if you know it, and what it’s doing.' },
  { name: 'We look at the system', text: 'We check it over and find what’s wrong.' },
  { name: 'You choose what to do', text: 'We go over your options. On an older system, that can mean weighing a repair against a new unit.' },
  { name: 'We do the work', text: 'Once you decide, we make the repair or install the new equipment.' },
]

const symptoms = [
  { title: 'Blowing warm air', text: 'Often a dirty filter, a frozen coil or a part that failed at the outdoor unit.', href: '/services/ac-repair' },
  { title: 'Water around the indoor unit', text: 'Usually a clogged drain line. Turn the system off before the water reaches your ceiling or floor.', href: '/services/ac-repair' },
  { title: 'One room never cools', text: 'Could be a kinked or leaking duct, or a space the system was never set up to reach.', href: '/services/ductwork-repair' },
  { title: 'Old unit, repeat repairs', text: 'At some point, a new system beats another repair.', href: '/services/ac-installation' },
]

const faqs: FAQ[] = [
  { q: 'What areas does Premium Air Services cover?', a: 'We’re based in Lockport and work within about 35 miles, including Larose, Raceland, Galliano, Cut Off, Golden Meadow, Thibodaux and Houma. Not sure about your address? Give us a call.' },
  { q: 'How much does AC repair cost?', a: 'It depends on what failed. A capacitor and a compressor are very different jobs. Call and tell us what the system’s doing, and we’ll go from there.' },
  { q: 'How much does a new AC unit cost?', a: 'Size, efficiency, the type of system and the shape your ducts are in all change the price. Give us a call about your house. Estimates on new systems are free, and we offer financing.' },
  { q: 'Do you work on heat pumps and gas heat?', a: 'Yes, along with electric heat strips and central air.' },
  { q: 'Do you install mini splits?', a: 'Yes. They’re a good fit for additions, garages, shops and rooms your main system can’t reach.' },
  { q: 'Do you work on mobile homes?', a: 'Yes. On many of them the ducts run under the floor, so we check there too.' },
  { q: 'Why is my AC freezing up?', a: 'Weak airflow from a dirty filter or coil is the most common cause, and low refrigerant is another. Turn off the cooling, run the fan to thaw it, and put in a clean filter. If it freezes again, call us.' },
  { q: 'Do you do AC tune-ups?', a: 'Yes, and we offer a yearly maintenance plan. Spring is the best time, before the summer rush.' },
  { q: 'Do you take emergency calls?', a: 'Yes, including after hours.' },
  { q: 'Is Premium Air Services insured?', a: 'Yes, we’re insured.' },
]

export default function HomePage() {
  const core = services.filter((s) => ['ac-repair', 'ac-installation', 'ac-maintenance', 'heating-repair', 'mini-split-installation', 'ductwork-repair'].includes(s.slug))
  return (
    <>
      <JsonLd data={[localBusinessSchema(), ownerSchema(), websiteSchema(), howToSchema('How an AC service call works with Premium Air Services', steps)]} />
      <PageHero
        size="home"
        eyebrow="Lockport, Louisiana"
        title="AC Repair & Installation in Lockport, LA"
        intro="AC and heating repair and new systems for homes in Lockport, Lafourche and Terrebonne. Owner Johnny Arceneaux has spent 22 years in HVAC."
        image="/images/hero/johnny-and-son.jpg"
        imageAlt="Owner Johnny Arceneaux with his arm around his son, both in black Premium Air Services polo shirts"
      />

      <section className="section border-b border-line" aria-labelledby="problem-h">
        <div className="wrap">
          <h2 id="problem-h" className="max-w-3xl text-[32px] leading-[1.15] lg:text-[40px]">What’s your system doing?</h2>
          <p className="mt-5 max-w-3xl text-[18px] leading-[1.6]">
            Most calls start with one of these. If yours is something else, or you can’t tell what’s wrong, call us anyway and describe it the best you can.
          </p>
          <ul className="mt-10 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {symptoms.map((s) => (
              <li key={s.title} className="bg-white">
                <Link href={s.href} className="group block h-full p-6 lg:p-7">
                  <h3 className="text-[20px] leading-snug group-hover:underline">{s.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.6] text-muted">{s.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-b border-line" aria-labelledby="services-h">
        <div className="wrap">
          <h2 id="services-h" className="mb-5 text-[32px] leading-[1.15] lg:text-[40px]">Heating and air conditioning services</h2>
          <p className="mb-10 max-w-3xl text-[18px] leading-[1.6]">
            We fix, replace and maintain home heating and air systems across South Lafourche.
          </p>
          <ServiceIndex items={core} />
          <p className="mt-8 text-[17px]">
            <Link href="/services" className="link">See all of our services</Link>, including mobile home AC.
          </p>
        </div>
      </section>

      <section className="section border-b border-line" aria-labelledby="owner-h">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="owner-h" className="text-[32px] leading-[1.15] lg:text-[40px]">Owner Johnny Arceneaux has 22 years in HVAC</h2>
          </div>
          <div className="space-y-5 text-[18px] leading-[1.6] lg:col-span-6">
            <p>
              Johnny runs Premium Air Services out of Lockport. We’re insured.
            </p>
            <p>
              ACs run most of the year here in heavy humidity, and storms can leave a house closed up for days. Johnny’s seen what that does to a system.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Emergency and after-hours calls</li>
              <li>Free estimates on new systems</li>
              <li>Financing available</li>
              <li>10 years on parts and 2 years on labor</li>
              <li>Yearly maintenance plan</li>
            </ul>
            <p><Link href="/about" className="link">More about Premium Air Services</Link></p>
          </div>
        </div>
      </section>

      <section className="section border-b border-line" aria-labelledby="how-h">
        <div className="wrap">
          <h2 id="how-h" className="max-w-3xl text-[32px] leading-[1.15] lg:text-[40px]">How a service call works</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.name} className="border-t-2 border-black pt-5">
                <p className="sr-only">Step {i + 1}</p>
                <h3 className="text-[20px] leading-snug">{s.name}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-b border-line" aria-labelledby="work-h">
        <div className="wrap">
          <h2 id="work-h" className="mb-5 text-[32px] leading-[1.15] lg:text-[40px]">A look at some of our work</h2>
          <p className="mb-10 max-w-3xl text-[18px] leading-[1.6]">
            Short videos and photos from our jobs.
          </p>
          <VideoGrid videos={[jobVideos.systemChangeout, jobVideos.furnaceReplacement, jobVideos.blowerBuildup]} />
          <div className="mt-10">
            <PhotoStrip paths={['/images/work/condenser-on-stand-white-siding.jpg', '/images/work/new-air-handler-closet.jpg', '/images/work/mini-split-outdoor-white-siding.jpg']} />
          </div>
        </div>
      </section>

      <section className="section border-b border-line" aria-labelledby="heat-h">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="heat-h" className="text-[32px] leading-[1.15] lg:text-[40px]">How do I keep my AC running through a Louisiana summer?</h2>
          </div>
          <div className="prose-body lg:col-span-7">
            <p>Stay on top of the filter and have the system checked before the heat arrives.</p>
            <p>Keep plants and yard debris a couple of feet from the outdoor unit, and aim your mower away from it. If you see water near the indoor unit or the air feels weak, deal with it before it turns into a bigger repair.</p>
            <p>Spring is the time to schedule <Link href="/services/ac-maintenance" className="link">AC maintenance</Link>.</p>
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="area-h">
        <div className="wrap">
          <h2 id="area-h" className="max-w-3xl text-[32px] leading-[1.15] lg:text-[40px]">Serving Lockport and nearby towns</h2>
          <p className="mt-5 max-w-3xl text-[18px] leading-[1.6]">
            We work within about 35 miles of Lockport, up and down Bayou Lafourche and over into Terrebonne.
          </p>
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {towns.map((t) => (
              <li key={t.name} className="border-t border-muted pt-5">
                <h3 className="text-[20px]">{t.name}</h3>
                <p className="mt-2 text-[16px] leading-[1.55] text-muted">{t.blurb}</p>
                <ul className="mt-3 space-y-1">
                  {t.links?.map((l) => (
                    <li key={l.href}><Link href={l.href} className="link text-[16px]">{l.label}</Link></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[17px]"><Link href="/service-area" className="link">See the full service area</Link></p>
        </div>
      </section>

      <Faq faqs={faqs} heading="Common questions" />
      <CtaBand heading="Need your AC looked at?" text="We work on home systems in Lockport and within about 35 miles." />
    </>
  )
}
