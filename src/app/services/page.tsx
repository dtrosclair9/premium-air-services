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
    'AC repair and installation, mini splits, heating, ductwork, duct cleaning and mobile home AC from Premium Air Services in Lockport, LA. Call us about your home.',
  path: '/services',
})

const faqs: FAQ[] = [
  { q: 'What is the difference between HVAC and AC?', a: 'AC refers to air conditioning, or cooling. HVAC stands for heating, ventilation and air conditioning, which covers the whole system. We work on all of it.' },
  { q: 'Which service do I need if I am not sure what is wrong?', a: 'Start with a call and describe the problem. It could be a repair, a maintenance issue or something with your ducts.' },
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
        intro="Repairs, new systems and upkeep for home heating and air. Pick a service for details, or call and we can figure out together what you need."
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
            <p className="mt-4 text-[17px] leading-[1.65]">Pages for some of the towns in our service area. <Link href="/service-area" className="link">See the full service area</Link> for the rest.</p>
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
      <CtaBand heading="Not sure what you need?" text="Call and describe the problem." />
    </>
  )
}
