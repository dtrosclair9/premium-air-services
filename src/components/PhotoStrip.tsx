import Image from 'next/image'
import { photo } from '@/lib/images'

// Mixed sizes: the Facebook originals are only 414px square, so everything caps at 340px.
export default function PhotoStrip({ paths }: { paths: string[] }) {
  return (
    <ul className="flex flex-wrap items-start gap-6">
      {paths.map(photo).map((p) => (
        <li key={p.src} className="w-full max-w-[340px]">
          <figure>
            <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="(min-width: 400px) 340px, 100vw" className="h-auto w-full" />
            <figcaption aria-hidden="true" className="mt-2 text-[16px] leading-snug text-muted">{p.alt}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}
