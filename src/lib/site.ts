// Single source of truth for business facts. Canonicals, sitemap, robots and
// JSON-LD all read BASE_URL from here.
export const BASE_URL = 'https://premium-air-services.com'

export const site = {
  name: 'Premium Air Services',
  shortName: 'Premium Air',
  owner: 'Johnny Arceneaux',
  phoneDisplay: '(985) 870-6441',
  phoneRaw: '+19858706441',
  city: 'Lockport',
  state: 'LA',
  zip: '70374',
  parish: 'Lafourche Parish',
  // Lockport town center.
  geo: { lat: 29.6466, lng: -90.5393 },
  yearsInHvac: 22,
  areaServed: ['Lockport', 'Larose', 'Raceland', 'Houma', 'Thibodaux', 'Galliano', 'Cut Off', 'Golden Meadow', 'Mathews', 'Bayou Cane', 'Bayou Blue', 'Gray', 'Schriever', 'Des Allemands'],
  parishes: ['Lafourche Parish', 'Terrebonne Parish'],
}

export const ogImage = {
  url: '/images/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Premium Air Services, heating and cooling in Lockport, Louisiana',
}

export function pageMeta(opts: { title: string; description: string; path: string; absoluteTitle?: boolean }) {
  const url = `${BASE_URL}${opts.path === '/' ? '' : opts.path}`
  // The layout template appends " | Premium Air" (14 chars).
  const absolute = opts.absoluteTitle || opts.title.length + 14 > 62
  return {
    title: absolute ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url || BASE_URL },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: url || BASE_URL,
      siteName: site.name,
      locale: 'en_US',
      type: 'website' as const,
      images: [ogImage],
    },
  }
}
