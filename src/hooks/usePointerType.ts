import { useEffect, useState } from 'react'

/**
 * Returns true only on devices with a fine pointer (mouse/trackpad) and hover
 * support. Used to gate the custom cursor and heavier hover-driven effects so
 * touch devices never receive desktop-only interactions.
 */
export function useIsFinePointer(): boolean {
  const [isFine, setIsFine] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setIsFine(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return isFine
}
