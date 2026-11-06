import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import Faq from '@/components/Faq'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMeta, site } from '@/lib/site'
import type { FAQ } from '@/lib/types'

export const metadata: Metadata = pageMeta({
  title: 'Contact Premium Air Services in Lockport, LA',
  absoluteTitle: true,
  description:
    'Call (985) 870-6441 or send a message to Premium Air Services for AC repair, new systems, heating or maintenance in Lockport, Houma, Thibodaux and nearby towns.',
  path: '/contact',
})

const faqs: FAQ[] = [
  { q: 'What should I tell you when I call?', a: 'Your address, what the system is doing, and how old it is if you know. A photo of the model label on the unit can help too.' },
  { q: 'What towns do you go to?', a: 'We work within about 35 miles of Lockport, including Raceland, Larose, Galliano, Thibodaux and Houma.' },
  { q: 'Can I send a message instead of calling?', a: 'Yes, use the form on this page. If your AC is down, call.' },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <section className="section" aria-labelledby="contact-h">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h1 id="contact-h" className="text-[38px] leading-[1.08] md:text-[52px]">Contact Premium Air Services in Lockport, LA</h1>
            <p className="mt-5 text-[17px] leading-[1.65] md:text-lg">Call us about your heating or air conditioning, or send the form and tell us what is going on.</p>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              <div className="py-5">
                <dt className="text-[14px] font-semibold text-muted">Phone</dt>
                <dd className="mt-1"><a href={`tel:${site.phoneRaw}`} className="font-display text-[30px] font-bold underline underline-offset-4">{site.phoneDisplay}</a></dd>
              </div>
              <div className="py-5">
                <dt className="text-[14px] font-semibold text-muted">Based in</dt>
                <dd className="mt-1 text-[17px]">{site.city}, Louisiana {site.zip}</dd>
              </div>
              <div className="py-5">
                <dt className="text-[14px] font-semibold text-muted">Service area</dt>
                <dd className="mt-1 text-[17px]">About 35 miles around Lockport</dd>
              </div>
            </dl>
          </div>
          <div className="border border-line bg-white p-6 sm:p-10 lg:col-span-7">
            <h2 className="mb-6 text-[26px]">Send us the details</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <Faq faqs={faqs} heading="Before you call" />
    </>
  )
}
