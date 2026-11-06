// Real photos from Johnny. Viewed and described by what they show. Don't call a
// photo a specific customer's job until Johnny confirms where it was.
export type Photo = { src: string; alt: string; width: number; height: number }

const PHOTOS: Photo[] = [
  { src: '/images/work/condenser-on-stand-white-siding.jpg', alt: 'Outdoor AC condenser on a metal stand and concrete pad beside white siding', width: 414, height: 414 },
  { src: '/images/work/mini-split-outdoor-white-siding.jpg', alt: 'Mini split outdoor unit mounted beside a window on white siding', width: 414, height: 414 },
  { src: '/images/work/mini-split-indoor-above-door.jpg', alt: 'Mini split wall unit installed above a white interior door', width: 414, height: 414 },
  { src: '/images/work/new-air-handler-closet.jpg', alt: 'Air handler installed in a utility closet with a copper line set and drain connected', width: 1200, height: 1600 },
]

export const allPhotos = PHOTOS

export function photo(src: string): Photo {
  return PHOTOS.find((p) => p.src === src) ?? { src, alt: '', width: 414, height: 414 }
}
