import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function HorizontalRail({ children, label, className = '' }) {
  const railRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return undefined

    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth
      setCanScroll(max > 4)
      setProgress(max > 0 ? rail.scrollLeft / max : 0)
    }

    let wheelRemainder = 0
    const handleWheel = (event) => {
      const max = rail.scrollWidth - rail.clientWidth
      if (max <= 4 || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return
      const movingRight = event.deltaY > 0
      const canMove = movingRight ? rail.scrollLeft < max - 1 : rail.scrollLeft > 1
      if (!canMove) return
      event.preventDefault()
      wheelRemainder += event.deltaY
      const distance = Math.trunc(wheelRemainder)
      if (distance) {
        rail.scrollBy({ left: distance, behavior: 'auto' })
        wheelRemainder -= distance
      }
    }

    rail.addEventListener('scroll', update, { passive: true })
    rail.addEventListener('wheel', handleWheel, { passive: false })
    const observer = new ResizeObserver(update)
    observer.observe(rail)
    update()
    return () => {
      rail.removeEventListener('scroll', update)
      rail.removeEventListener('wheel', handleWheel)
      observer.disconnect()
    }
  }, [])

  const scroll = (direction) => {
    const rail = railRef.current
    const firstItem = rail?.firstElementChild
    if (!rail || !firstItem) return
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 24
    rail.scrollBy({ left: direction * (firstItem.getBoundingClientRect().width + gap), behavior: 'smooth' })
  }

  return (
    <div className={`rail-wrap ${className}`}>
      {canScroll && (
        <div className="rail-controls">
          <div className="rail-progress" aria-label={`${label} scroll progress`}>
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>
          <div className="rail-arrows">
            <button type="button" className="icon-button" aria-label={`Scroll ${label} left`} onClick={() => scroll(-1)}>
              <ArrowLeft size={17} />
            </button>
            <button type="button" className="icon-button" aria-label={`Scroll ${label} right`} onClick={() => scroll(1)}>
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      )}
      <div className="horizontal-rail" ref={railRef} aria-label={label} tabIndex={0}>
        {children}
      </div>
    </div>
  )
}
