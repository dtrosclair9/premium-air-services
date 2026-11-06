import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import CtaBand from '@/components/CtaBand'
import { towns } from '@/lib/content'
import { otherTowns } from '@/lib/content/towns'
import { pageMeta } from '@/lib/site'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = pageMeta({
  title: 'HVAC Service Area: Lafourche, Terrebonne & Nearby',
  description:
    'Premium Air Services works within about 35 miles of Lockport, LA, including Raceland, Larose, Galliano, Thibodaux, Houma and other towns in nearby parishes.',
  path: '/service-area',
})

const faqs: FAQ[] = [
  { q: 'How far do you travel from Lockport?', a: 'About 35 miles. Road distance matters more than how close a place looks on a map, so call if you are near the edge.' },
  { q: 'What if my town is not listed?', a: 'Call and tell us where you are. This list covers the places we most expect to go, and it is not every road we can reach.' },
  { q: 'Do you go to Port Fourchon or Grand Isle?', a: 'They are beyond our usual 35 miles. Call us about your location and what you need.' },
]

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Where we work"
        title="HVAC Service Area: Lafourche, Terrebonne & Nearby"
        intro="Premium Air Services is based in Lockport and works within about 35 miles, up and down Bayou Lafourche and over into Terrebonne."
        crumbs={[{ name: 'Service area', path: '/service-area' }]}
      />

      <section className="section border-b border-line" aria-labelledby="main-h">
        <div className="wrap">
          <h2 id="main-h" className="text-[32px] leading-[1.15] lg:text-[40px]">Main towns</h2>
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {towns.map((t) => (
              <li key={t.name} className="border-t border-line pt-5">
                <h3 className="text-[22px]">{t.name}</h3>
                <p className="mt-1 text-[15px] font-semibold text-muted">{t.parish} Parish</p>
                <p className="mt-3 text-[16px] leading-[1.55]">{t.blurb}</p>
                <ul className="mt-3 space-y-1">
                  {t.links?.map((l) => <li key={l.href}><Link href={l.href} className="link text-[16px]">{l.label}</Link></li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-b border-line bg-surface" aria-labelledby="more-h">
        <div className="wrap">
          <h2 id="more-h" className="text-[32px] leading-[1.15] lg:text-[40px]">Other towns we cover</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {otherTowns.map((g) => (
              <div key={g.parish}>
                <h3 className="text-[19px]">{g.parish}</h3>
                <p className="mt-3 text-[16px] leading-[1.7] text-muted">{g.names.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={faqs} heading="About our service area" />
      <CtaBand heading="Not sure if we cover your address?" text="Give us a call and tell us where you are." />
    </>
  )
}
