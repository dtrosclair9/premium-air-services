import Link from 'next/link'
import Image from 'next/image'
import { navGroups, services } from '@/lib/content'
import { site } from '@/lib/site'
import NavMenu, { type NavGroup } from './NavMenu'

export default function Header() {
  const groups: NavGroup[] = navGroups.map((g) => ({
    label: g.label,
    items: g.slugs.map((slug) => ({ href: `/services/${slug}`, label: services.find((s) => s.slug === slug)?.navLabel ?? slug })),
  }))

  return (
    <header className="relative z-50 border-b border-line bg-white text-ink">
      <div className="wrap flex min-h-[72px] items-center justify-between gap-3 py-3 lg:min-h-[88px]">
        <Link href="/" className="min-w-0 shrink" aria-label={`${site.name} home`}>
          <Image src="/images/brand/logo-horizontal-black.svg" alt={`${site.name} logo`} width={1289} height={242} priority className="h-10 w-auto min-[420px]:h-11 sm:h-16 xl:h-20" />
        </Link>
        <NavMenu groups={groups} phoneDisplay={site.phoneDisplay} phoneRaw={site.phoneRaw} />
      </div>
    </header>
  )
}
