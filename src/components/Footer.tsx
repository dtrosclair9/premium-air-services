import Image from 'next/image'
import Link from 'next/link'
import { cityPages, services } from '@/lib/content'
import { site } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="on-dark bg-black text-white">
      <div className="wrap border-t border-muted" />
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src="/images/brand/logo-full-white.svg" alt={`${site.name} logo`} width={853} height={503} className="h-28 w-auto" />
          <a href={`tel:${site.phoneRaw}`} className="mt-6 inline-block font-display text-[24px] font-semibold text-white underline underline-offset-4">{site.phoneDisplay}</a>
          <p className="mt-2 text-[17px] text-line">{site.city}, Louisiana</p>
          <p className="mt-3 text-[17px]"><a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4">Facebook</a></p>
        </div>
        <div className="lg:col-span-4">
          <h2 className="text-[18px]">Services</h2>
          <ul className="mt-4 space-y-2 text-[17px] text-line">
            {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="underline-offset-4 hover:underline">{s.navLabel}</Link></li>)}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <h2 className="text-[18px]">Towns</h2>
          <ul className="mt-4 space-y-2 text-[17px] text-line">
            {cityPages.map((c) => <li key={c.slug}><Link href={`/services/${c.slug}`} className="underline-offset-4 hover:underline">{c.h1}</Link></li>)}
            <li><Link href="/service-area" className="underline underline-offset-4">Full service area</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-muted">
        <div className="wrap flex flex-col gap-3 py-6 text-[16px] text-line md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/about" className="underline underline-offset-4">About</Link></li>
            <li><Link href="/contact" className="underline underline-offset-4">Contact</Link></li>
            <li><Link href="/privacy" className="underline underline-offset-4">Privacy policy</Link></li>
            <li><Link href="/accessibility" className="underline underline-offset-4">Accessibility</Link></li>
            <li>Website by <a href="https://strykora.com" className="underline underline-offset-4">Strykora</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
