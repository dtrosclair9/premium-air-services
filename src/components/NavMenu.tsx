'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export type NavGroup = { label: string; items: { href: string; label: string }[] }
type Props = { groups: NavGroup[]; phoneDisplay: string; phoneRaw: string }

const linkBase = 'text-[17px] font-semibold text-ink underline-offset-8 decoration-2 hover:underline'

export default function NavMenu({ groups, phoneDisplay, phoneRaw }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const svcRef = useRef<HTMLLIElement>(null)

  useEffect(() => { setOpen(false); setSvcOpen(false) }, [pathname])

  useEffect(() => {
    function onDoc(e: MouseEvent) { if (svcRef.current && !svcRef.current.contains(e.target as Node)) setSvcOpen(false) }
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') { setSvcOpen(false); setOpen(false) } }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const current = (href: string) => (pathname === href ? 'page' : undefined)

  return (
    <>
      <nav aria-label="Main" className="hidden xl:block">
        <ul className="flex items-center gap-7">
          <li><Link href="/" className={linkBase} aria-current={current('/')}>Home</Link></li>
          <li ref={svcRef} className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
            <button type="button" className={`${linkBase} inline-flex items-center gap-1.5`} aria-expanded={svcOpen} aria-controls="services-menu" onClick={(e) => setSvcOpen((v) => (e.detail === 0 ? !v : true))}>
              Services
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${svcOpen ? 'rotate-180' : ''}`}><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
            </button>
            <div id="services-menu" className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 ${svcOpen ? 'block' : 'hidden'}`}>
              <div className="grid grid-cols-2 gap-8 border border-line bg-white p-6">
                {groups.map((g) => (
                  <div key={g.label}>
                    <p className="mb-2 text-[16px] font-semibold text-muted">{g.label}</p>
                    <ul>
                      {g.items.map((it) => (
                        <li key={it.href}><Link href={it.href} className="block py-1.5 text-[17px] decoration-2 underline-offset-4 hover:underline" aria-current={current(it.href)}>{it.label}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href="/services" className="col-span-2 text-[16px] font-semibold underline decoration-2 underline-offset-4">All services</Link>
              </div>
            </div>
          </li>
          <li><Link href="/about" className={linkBase} aria-current={current('/about')}>About</Link></li>
          <li><Link href="/contact" className={linkBase} aria-current={current('/contact')}>Contact</Link></li>
          <li><a href={`tel:${phoneRaw}`} className="btn-accent nav__link--cta whitespace-nowrap"><PhoneIcon />{phoneDisplay}</a></li>
        </ul>
      </nav>

      <div className="flex shrink-0 items-center gap-2 xl:hidden">
        <a href={`tel:${phoneRaw}`} className="btn-accent px-4" aria-label={`Call ${phoneDisplay}`}>
          <PhoneIcon /><span className="hidden md:inline">{phoneDisplay}</span><span className="md:hidden">Call</span>
        </a>
        <button type="button" className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2 rounded border border-muted px-3 text-[16px] font-semibold" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
            {open ? <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" /> : <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" />}
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className={`absolute inset-x-0 top-full z-40 h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-white sm:h-[calc(100dvh-80px)] xl:hidden ${open ? 'block' : 'hidden'}`}>
        <nav aria-label="Mobile" className="wrap pb-10 pt-2">
          <ul className="divide-y divide-line border-b border-line">
            <li><Link href="/" className="block py-4 text-[20px] font-semibold">Home</Link></li>
            <li className="py-4">
              <p className="text-[20px] font-semibold">Services</p>
              {groups.map((g) => (
                <div key={g.label} className="mt-4">
                  <p className="mb-1 text-[16px] font-semibold text-muted">{g.label}</p>
                  <ul className="grid sm:grid-cols-2 sm:gap-x-6">
                    {g.items.map((it) => <li key={it.href}><Link href={it.href} className="block py-2 text-[18px]">{it.label}</Link></li>)}
                  </ul>
                </div>
              ))}
              <Link href="/services" className="mt-3 inline-block py-2 text-[18px] font-semibold underline underline-offset-4">All services</Link>
            </li>
            <li><Link href="/about" className="block py-4 text-[20px] font-semibold">About</Link></li>
            <li><Link href="/contact" className="block py-4 text-[20px] font-semibold">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" />
    </svg>
  )
}
