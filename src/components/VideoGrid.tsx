import type { JobVideo } from '@/lib/videos'

// Vertical phone videos. Nothing downloads until someone presses play.
export default function VideoGrid({ videos }: { videos: JobVideo[] }) {
  return (
    <ul className={videos.length > 2 ? 'grid gap-6 sm:grid-cols-3' : 'flex flex-wrap gap-6'}>
      {videos.map((v) => (
        <li key={v.src} className="w-full max-w-[340px]">
          <figure>
            <video
              controls
              muted
              playsInline
              preload="none"
              poster={v.poster}
              width={v.width}
              height={v.height}
              aria-label={`${v.title}. ${v.caption}`}
              className="aspect-[9/16] h-auto w-full bg-black object-contain"
            >
              <source src={v.src} type="video/mp4" />
              <a href={v.src} className="link">Watch the video</a>
            </video>
            <figcaption className="mt-3">
              <span className="block text-[17px] font-semibold leading-snug text-ink">{v.title}</span>
              <span className="mt-1 block text-[16px] leading-snug text-muted">{v.caption}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}
