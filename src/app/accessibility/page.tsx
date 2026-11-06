import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { pageMeta, site } from '@/lib/site'

export const metadata: Metadata = pageMeta({
  title: 'Accessibility Statement',
  description: 'Premium Air Services wants this website to work for everyone. Read our accessibility goals and how to reach us if something on the site gives you trouble.',
  path: '/accessibility',
})

export default function AccessibilityPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Accessibility Statement" intro="We want this website to work for everyone." crumbs={[{ name: 'Accessibility', path: '/accessibility' }]} hideActions />
      <div className="wrap section">
        <div className="prose-body max-w-3xl">
          <p>We are working toward the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. That includes keyboard navigation, readable color contrast, text descriptions for images and labeled form fields.</p>
          <p>If something on this site is hard to use, or you need the information another way, call us at <a href={`tel:${site.phoneRaw}`} className="link">{site.phoneDisplay}</a> and we will help you.</p>
        </div>
      </div>
    </>
  )
}
