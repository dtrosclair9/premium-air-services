import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ServiceIndex from '@/components/ServiceIndex'
import CtaBand from '@/components/CtaBand'
import Faq from '@/components/Faq'
import JsonLd from '@/components/JsonLd'
import { cityPages, navGroups, services } from '@/lib/content'
import { itemListSchema } from '@/lib/schema'
import { pageMeta } from '@/lib/site'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = pageMeta({
  title: 'HVAC Services in Lockport & South Lafourche, LA',
  description:
    'AC repair and installation, mini splits, heating, ductwork and mobile home AC from Premium Air Services in Lockport, LA. Emergency calls and financing offered.',
  path: '/services',
})

const faqs: FAQ[] = [
  { q: 'What is the difference between HVAC and AC?', a: 'AC is the cooling. HVAC is heating, ventilation and air conditioning, so the whole system. We work on central air, heat pumps, gas and electric heat, and ductwork.' },
  { q: 'Which service do I need if I’m not sure what’s wrong?', a: 'Call and describe the problem. You don’t need to know what’s wrong before you pick up the phone.' },
  { q: 'Do you do commercial work?', a: 'Yes. Call and tell us about the building and what it needs.' },
  { q: 'Do you work on homes outside Lockport?', a: 'Yes. We work within about 35 miles, including Houma, Thibodaux, Raceland, Larose and Galliano.' },
]

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema('Heating and air services from Premium Air Services', [
          ...services.map((s) => ({ name: s.h1, path: `/services/${s.slug}` })),
          ...cityPages.map((c) => ({ name: c.h1, path: `/services/${c.slug}` })),
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="HVAC Services in Lockport & South Lafourche"
        intro="Repairs, new systems and upkeep for home heating and air. Pick a service for details, or call and we’ll figure out what you need."
        crumbs={[{ name: 'Services', path: '/services' }]}
      />

      {navGroups.map((g) => (
        <section key={g.id} className="section border-b border-line" aria-labelledby={`g-${g.id}`}>
          <div className="wrap">
            <h2 id={`g-${g.id}`} className="mb-10 text-[32px] lg:text-[40px]">{g.label}</h2>
            <ServiceIndex items={g.slugs.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean)} />
          </div>
        </section>
      ))}

      <section className="section border-b border-line bg-surface" aria-labelledby="city-h">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="city-h" className="text-[32px] lg:text-[40px]">Service by town</h2>
            <p className="mt-4 text-[17px] leading-[1.65]">AC service in some of the towns we cover. <Link href="/service-area" className="link">See the full service area</Link> for the rest.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {cityPages.map((c) => (
              <li key={c.slug} className="border-t border-line pt-4">
                <Link href={`/services/${c.slug}`} className="link text-[17px]">{c.h1}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq faqs={faqs} heading="Choosing a service" />
      <CtaBand heading="Not sure what you need?" text="Give us a call and we’ll figure it out." />
    </>
  )
}
