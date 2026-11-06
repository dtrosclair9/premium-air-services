import type { Town } from '../types'

export const towns: Town[] = [
  { name: 'Lockport', parish: 'Lafourche', blurb: 'Our home base. We also cover Lockport Heights.' , links: [{ label: 'AC repair', href: '/services/ac-repair' }, { label: 'AC installation', href: '/services/ac-installation' }] },
  { name: 'Raceland', parish: 'Lafourche', blurb: 'About 8 miles from Lockport, along with Mathews and Gheens.', links: [{ label: 'AC repair in Raceland', href: '/services/ac-repair-raceland-la' }] },
  { name: 'Larose', parish: 'Lafourche', blurb: 'About 13 miles down the bayou, near the Intracoastal Waterway.', links: [{ label: 'AC repair in Larose', href: '/services/ac-repair-larose-la' }] },
  { name: 'Galliano', parish: 'Lafourche', blurb: 'About 24 miles away. We also cover Cut Off and Golden Meadow along lower Lafourche.', links: [{ label: 'AC repair in Galliano', href: '/services/ac-repair-galliano-la' }] },
  { name: 'Thibodaux', parish: 'Lafourche', blurb: 'About 23 miles away, including Lafourche Crossing, Chackbay and Kraemer.', links: [{ label: 'AC repair in Thibodaux', href: '/services/ac-repair-thibodaux-la' }] },
  { name: 'Houma', parish: 'Terrebonne', blurb: 'About 19 miles away, plus Bayou Cane, Bayou Blue, Gray and Schriever.', links: [{ label: 'AC repair in Houma', href: '/services/ac-repair-houma-la' }, { label: 'AC installation in Houma', href: '/services/ac-installation-houma-la' }] },
]

export const otherTowns: { parish: string; names: string[] }[] = [
  { parish: 'Lafourche Parish', names: ['Lockport Heights', 'Mathews', 'Gheens', 'Cut Off', 'Golden Meadow', 'Lafourche Crossing', 'Chackbay', 'Kraemer', 'Des Allemands'] },
  { parish: 'Terrebonne Parish', names: ['Bayou Cane', 'Bayou Blue', 'Gray', 'Schriever', 'Bourg', 'Montegut', 'Chauvin'] },
  { parish: 'St. Charles Parish', names: ['Paradis', 'Boutte', 'Bayou Gauche', 'Luling', 'Hahnville', 'Ama'] },
  { parish: 'Assumption Parish', names: ['Labadieville'] },
]
