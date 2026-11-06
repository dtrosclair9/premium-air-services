import Image from 'next/image'
import Link from 'next/link'
import JsonLd from './JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { site } from '@/lib/site'

type Crumb = { name: string; path: string }
type Props = {
  eyebrow: string
  title: string
  intro: string | string[]
  image?: string
  imageAlt?: string
  crumbs?: Crumb[]
  size?: 'home' | 'page'
  hideActions?: boolean
}

export default function PageHero({ eyebrow, title, intro, image, imageAlt, crumbs, size = 'page', hideActions }: Props) {
  const paras = Array.isArray(intro) ? intro : [intro]
  const trail = crumbs ? [{ name: 'Home', path: '/' }, ...crumbs] : null
  const dark = size === 'home'
  const hasPhoto = Boolean(image)

  const copy = (
    <div className={dark ? 'flex flex-col justify-center px-5 py-12 md:px-8 md:py-16 lg:py-20 lg:pl-[max(3rem,calc((100vw-1200px)/2+3rem))] lg:pr-12' : ''}>
      {trail && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[16px] text-muted">
            {trail.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i < trail.length - 1 ? (
                  <Link href={c.path} className="underline underline-offset-4 hover:text-ink">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="text-ink">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <p className="eyebrow">{eyebrow}</p>
      <h1 className={`mt-3 max-w-[20ch] text-[40px] leading-[1.08] lg:text-[64px] ${dark ? 'lg:text-[58px] xl:text-[64px]' : ''}`}>{title}</h1>
      <div className={`mt-6 max-w-[65ch] space-y-4 text-[18px] leading-[1.6] ${dark ? 'text-white' : ''}`}>
        {paras.map((p) => <p key={p}>{p}</p>)}
      </div>
      {!hideActions && (
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a href={`tel:${site.phoneRaw}`} className={dark ? 'btn-light' : 'btn-dark'}>Call {site.phoneDisplay}</a>
          <Link href="/contact" className={`text-[17px] font-semibold underline decoration-2 underline-offset-4 ${dark ? 'text-white' : 'text-ink'}`}>Send us a message</Link>
        </div>
      )}
    </div>
  )

  if (dark) {
    return (
      <section className="on-dark bg-black text-white">
        <div className="grid lg:grid-cols-2">
          {copy}
          {hasPhoto && (
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[560px]">
              <Image src={image!} alt={imageAlt ?? ''} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top" />
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-line bg-white">
      {trail && <JsonLd data={breadcrumbSchema(trail)} />}
      <div className={`wrap py-12 md:py-16 ${hasPhoto ? 'grid items-center gap-10 lg:grid-cols-2 lg:gap-16' : ''}`}>
        {copy}
        {hasPhoto && (
          <div className="relative aspect-[4/3] w-full">
            <Image src={image!} alt={imageAlt ?? ''} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
          </div>
        )}
      </div>
    </section>
  )
}
