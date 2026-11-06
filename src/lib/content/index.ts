import type { CityPage } from '../types'
import { services } from './services'
import { cityPages } from './cities'
export { towns } from './towns'
export { services, cityPages }

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function getCityPage(slug: string) {
  return cityPages.find((c) => c.slug === slug)
}

export function cityPagesFor(serviceSlug: string): CityPage[] {
  return cityPages.filter((c) => c.service === serviceSlug)
}

export const navGroups = [
  { id: 'cooling', label: 'Cooling', slugs: ['ac-repair', 'ac-installation', 'ac-maintenance', 'mini-split-installation'] },
  { id: 'heating-air', label: 'Heating & Air', slugs: ['heating-repair', 'ductwork-repair', 'mobile-home-ac-repair'] },
]

// [bracketed] words in section copy become internal links.
export const inlineLinks: Record<string, string> = {
  'AC installation and replacement': '/services/ac-installation',
  'heating and heat pump page': '/services/heating-repair',
  'AC replacement page': '/services/ac-installation',
  'mobile home AC page': '/services/mobile-home-ac-repair',
  'replacing the system': '/services/ac-installation-houma-la',
  'mini split page': '/services/mini-split-installation',
  'maintenance page': '/services/ac-maintenance',
  'mini split': '/services/mini-split-installation',
  Ductwork: '/services/ductwork-repair',
}
