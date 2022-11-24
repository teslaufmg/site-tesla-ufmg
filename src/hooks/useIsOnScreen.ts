import { useEffect, useRef, useState } from 'react'

export const useIsOnScreen = (threshold: number | number[] = 0) => {
  const elementRef = useRef(null)
  const [isOnScreen, setOnScreen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnScreen(entry.isIntersecting)
      },
      { threshold: threshold }
    )
    observer.observe(elementRef.current)
    return () => {
      observer.disconnect()
    }
  }, [elementRef])

  return { elementRef, isOnScreen }
}
