import { BASE_URL, site } from './site'
import type { FAQ } from './types'

export const BUSINESS_ID = `${BASE_URL}/#business`
export const WEBSITE_ID = `${BASE_URL}/#website`
export const OWNER_ID = `${BASE_URL}/#owner`

const abs = (p: string) => (p.startsWith('http') ? p : `${BASE_URL}${p}`)

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HVACBusiness', 'LocalBusiness'],
    '@id': BUSINESS_ID,
    name: site.name,
    url: BASE_URL,
    telephone: site.phoneRaw,
    logo: abs('/images/brand/logo-full-black.svg'),
    image: abs('/images/og-image.jpg'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.zip,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      ...site.areaServed.map((name) => ({ '@type': 'City', name: `${name}, LA` })),
      ...site.parishes.map((name) => ({ '@type': 'AdministrativeArea', name: `${name}, Louisiana` })),
    ],
    employee: { '@id': OWNER_ID },
  }
}

export function ownerSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': OWNER_ID,
    name: site.owner,
    jobTitle: 'Owner',
    worksFor: { '@type': 'HVACBusiness', '@id': BUSINESS_ID, name: site.name, url: BASE_URL },
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.state, addressCountry: 'US' },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: BASE_URL,
    name: site.name,
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-US',
  }
}

export function serviceSchema(opts: { name: string; serviceType: string; description: string; path: string; areas?: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.path),
    provider: { '@type': 'HVACBusiness', '@id': BUSINESS_ID, name: site.name, url: BASE_URL, telephone: site.phoneRaw },
    areaServed: (opts.areas ?? site.areaServed).map((name) => ({ '@type': 'City', name: `${name}, LA` })),
  }
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  }
}

export function itemListSchema(name: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.path) })),
  }
}

export function howToSchema(name: string, steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
}
