import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { pageMeta, site } from '@/lib/site'

export const metadata: Metadata = pageMeta({
  title: 'Privacy Policy',
  description: 'How Premium Air Services in Lockport, LA collects, uses and protects information submitted through premium-air-services.com, including our contact form.',
  path: '/privacy',
})

const LAST_UPDATED = 'November 5, 2026'

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro={`Last updated ${LAST_UPDATED}.`} crumbs={[{ name: 'Privacy policy', path: '/privacy' }]} hideActions />
      <div className="wrap section">
        <div className="prose-body max-w-3xl space-y-8">
          <section>
            <h2 className="mb-3 text-[26px]">What we collect</h2>
            <p>When you send our contact form, we receive the name, phone number, email address, town or job address, service, and message you enter, along with how you found us if you choose to tell us.</p>
            <p>Like most websites, our hosting provider automatically records basic technical logs, such as IP address, browser type, pages requested and time of the request, for security and performance.</p>
          </section>
          <section>
            <h2 className="mb-3 text-[26px]">How we use it</h2>
            <p>We use your information to answer your request and provide service. We do not sell it.</p>
          </section>
          <section>
            <h2 className="mb-3 text-[26px]">Services we use</h2>
            <p>Formspree receives and delivers contact form messages. Vercel hosts this website. The site’s fonts come from Google Fonts but are served from our own website. Each provider handles data under its own privacy policy.</p>
          </section>
          <section>
            <h2 className="mb-3 text-[26px]">Cookies and tracking</h2>
            <p>This website does not set advertising cookies or run third-party advertising trackers. If that changes, we will update this page.</p>
          </section>
          <section>
            <h2 className="mb-3 text-[26px]">Questions</h2>
            <p>Questions about this policy: {site.name}, {site.city}, {site.state} {site.zip}. Phone <a href={`tel:${site.phoneRaw}`} className="link">{site.phoneDisplay}</a>.</p>
          </section>
        </div>
      </div>
    </>
  )
}
