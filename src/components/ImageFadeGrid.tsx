import { useEffect, useMemo, useState } from "react"

interface ImageFadeGridProps {
  images: string[]
  intervalMs?: number
}

export function ImageFadeGrid({
  images,
  intervalMs = 5500,
}: ImageFadeGridProps) {
  const ITEMS_PER_VIEW = 3

  const groups = useMemo(() => {
    const result: string[][] = []
    for (let i = 0; i < images.length; i += ITEMS_PER_VIEW) {
      result.push(images.slice(i, i + ITEMS_PER_VIEW))
    }
    return result
  }, [images])

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false)

      // Espera al fade y cambia el grupo
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % groups.length)
        setVisible(true)
      }, 500) // duración del fade
    }, intervalMs)

    return () => clearInterval(interval)
  }, [groups.length, intervalMs])

  const currentImages = groups[index] ?? []

  return (
    <div className="mx-auto w-full mt-10">
      <div
        className={`grid grid-cols-3 md:gap-2 gap-0.5 px-1 transition-opacity duration-500 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {currentImages.map((src, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-xl bg-black/5"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
