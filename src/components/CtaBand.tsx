import Link from 'next/link'
import { site } from '@/lib/site'

type Props = { heading?: string; text?: string }

export default function CtaBand({ heading = 'Need your AC looked at?', text = 'Call Premium Air Services and tell us what’s going on.' }: Props) {
  return (
    <section className="on-dark bg-black text-white">
      <div className="wrap flex flex-col gap-8 py-12 md:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[32px] leading-[1.15] lg:text-[40px]">{heading}</h2>
          <p className="mt-4 text-[18px] leading-[1.6] text-white">{text}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:shrink-0">
          <a href={`tel:${site.phoneRaw}`} className="btn-light text-[20px]">{site.phoneDisplay}</a>
          <Link href="/contact" className="text-[17px] font-semibold text-white underline decoration-2 underline-offset-4">Send a message</Link>
        </div>
      </div>
    </section>
  )
}
