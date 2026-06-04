'use client'

interface AvatarProps {
  name: string
  src?: string
  size?: number
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Avatar({ name, src, size = 96 }: AvatarProps) {
  return (
    <div
      className="rounded-full overflow-hidden shrink-0 bg-zinc-100 ring-1 ring-zinc-200 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="font-medium text-zinc-400" style={{ fontSize: size * 0.3 }}>
          {initials(name)}
        </span>
      )}
    </div>
  )
}
