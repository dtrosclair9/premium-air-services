import Link from 'next/link'
import { inlineLinks } from '@/lib/content'

// Turns [label] in copy into an internal link. An unknown label prints as plain
// text so a typo can't ship a broken link or stray brackets.
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g)
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[(.+)\]$/)
        if (!m) return <span key={i}>{part}</span>
        const href = inlineLinks[m[1]]
        return href ? <Link key={i} href={href} className="link">{m[1]}</Link> : <span key={i}>{m[1]}</span>
      })}
    </>
  )
}
