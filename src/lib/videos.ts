// Johnny's job videos, re-encoded to 540px H.264 with the audio removed (the tracks
// sound like added music, and a silent file needs no captions). The attic clip is
// cropped to hide an InShot watermark. Originals: photos/johnny-2026-11-06/.
// Captions describe only what is on screen.
export type JobVideo = { src: string; poster: string; title: string; caption: string; width: number; height: number }

export const jobVideos = {
  systemChangeout: {
    src: '/videos/system-changeout.mp4',
    poster: '/videos/system-changeout.jpg',
    title: 'A full system change-out',
    caption: 'The old indoor unit, outdoor unit and attic ducts, then the new equipment in place.',
    width: 540,
    height: 720,
  },
  furnaceReplacement: {
    src: '/videos/furnace-replacement.mp4',
    poster: '/videos/furnace-replacement.jpg',
    title: 'An older gas system replaced',
    caption: 'The old gas furnace and coil, then the new furnace and outdoor unit.',
    width: 540,
    height: 960,
  },
  blowerBuildup: {
    src: '/videos/blower-buildup.mp4',
    poster: '/videos/blower-buildup.jpg',
    title: 'What builds up inside a system',
    caption: 'Dirt on a blower wheel and rust inside an older indoor unit.',
    width: 540,
    height: 960,
  },
  atticFlexDuct: {
    src: '/videos/attic-flex-duct.mp4',
    poster: '/videos/attic-flex-duct.jpg',
    title: 'Flex duct in an attic',
    caption: 'Insulated flex duct run across the attic of a home.',
    width: 540,
    height: 884,
  },
} satisfies Record<string, JobVideo>
