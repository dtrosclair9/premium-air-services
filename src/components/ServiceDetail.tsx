import Link from 'next/link'
import PageHero from './PageHero'
import PhotoStrip from './PhotoStrip'
import VideoGrid from './VideoGrid'
import Faq from './Faq'
import CtaBand from './CtaBand'
import ServiceIndex from './ServiceIndex'
import RichText from './RichText'
import type { ContentSection, FAQ, ServicePage } from '@/lib/types'
import type { JobVideo } from '@/lib/videos'
import { site } from '@/lib/site'

type Props = {
  eyebrow: string
  h1: string
  intro: string[]
  heroImage?: string
  heroAlt?: string
  crumbs: { name: string; path: string }[]
  sections: ContentSection[]
  included: string[]
  includedHeading: string
  gallery: string[]
  videos?: JobVideo[]
  faqs: FAQ[]
  faqHeading: string
  related: ServicePage[]
  area: { heading: string; text: string; links: { label: string; href: string }[]; towns: string[] }
  cta?: { heading: string; text: string }
}

export default function ServiceDetail(p: Props) {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.h1} intro={p.intro} image={p.heroImage} imageAlt={p.heroAlt} crumbs={p.crumbs} />

      <div className="wrap section grid gap-12 lg:grid-cols-[minmax(0,1fr)_304px] lg:gap-16">
        <div className="min-w-0">
          {p.sections.map((s, i) => (
            <section key={s.h2} className={i > 0 ? 'mt-12 border-t border-line pt-12' : ''}>
              <h2 className="max-w-[28ch] text-[32px] leading-[1.15] lg:text-[40px]">{s.h2}</h2>
              <div className="prose-body mt-5">
                {s.body.map((para) => <p key={para.slice(0, 40)}><RichText text={para} /></p>)}
              </div>
              {s.bullets && (
                <ul className="mt-6 max-w-[65ch] list-disc space-y-2 pl-6 text-[18px] leading-[1.55]">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </section>
          ))}
          {(p.gallery.length > 0 || p.videos?.length) && (
            <section className="mt-12 border-t border-line pt-12" aria-labelledby="work-h">
              <h2 id="work-h" className="mb-6 text-[32px] leading-[1.15] lg:text-[40px]">A look at some of our work</h2>
              {p.videos?.length ? <div className={p.gallery.length ? 'mb-8' : ''}><VideoGrid videos={p.videos} /></div> : null}
              {p.gallery.length > 0 && <PhotoStrip paths={p.gallery} />}
            </section>
          )}
        </div>

        <aside className="min-w-0">
          <div className="bg-surface p-6 lg:sticky lg:top-6">
            <h2 className="text-[24px] leading-snug">{p.includedHeading}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-[1.5]">
              {p.included.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <a href={`tel:${site.phoneRaw}`} className="btn-dark mt-6 w-full">Call {site.phoneDisplay}</a>
            <Link href="/contact" className="mt-4 block text-center text-[17px] font-semibold underline decoration-2 underline-offset-4">Send us a message</Link>
          </div>
        </aside>
      </div>

      <section className="section bg-surface" aria-labelledby="area-h">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5"><h2 id="area-h" className="text-[32px] leading-[1.15] lg:text-[40px]">{p.area.heading}</h2></div>
          <div className="lg:col-span-7">
            <p className="text-[18px] leading-[1.6]">{p.area.text}</p>
            {p.area.links.length > 0 && (
              <ul className="mt-5 space-y-3">
                {p.area.links.map((l) => <li key={l.href}><Link href={l.href} className="link">{l.label}</Link></li>)}
              </ul>
            )}
            <p className="mt-6 text-[17px] leading-[1.6] text-muted">Also serving {p.area.towns.join(', ')}. <Link href="/service-area" className="link">See the full service area</Link></p>
          </div>
        </div>
      </section>

      <Faq faqs={p.faqs} heading={p.faqHeading} />

      {p.related.length > 0 && (
        <section className="section border-t border-line" aria-labelledby="related-h">
          <div className="wrap">
            <h2 id="related-h" className="mb-8 text-[32px] leading-[1.15] lg:text-[40px]">Related services</h2>
            <ServiceIndex items={p.related} />
          </div>
        </section>
      )}

      <CtaBand heading={p.cta?.heading} text={p.cta?.text} />
    </>
  )
}
