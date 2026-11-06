import Link from 'next/link'
import type { ServicePage } from '@/lib/types'

export default function ServiceIndex({ items }: { items: ServicePage[] }) {
  return (
    <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-12">
      {items.map((s) => (
        <li key={s.slug} className="border-b border-line">
          <Link href={`/services/${s.slug}`} className="group block py-6">
            <h3 className="text-[24px] leading-snug group-hover:underline">{s.navLabel}</h3>
            <p className="mt-2 text-[17px] leading-[1.55] text-muted">{s.cardBlurb}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
