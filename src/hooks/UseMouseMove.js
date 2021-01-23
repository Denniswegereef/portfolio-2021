import { useEffect, useState } from 'react'

export function UseMouseMove() {
  const [mouseEvent, setMouseEvent] = useState({});

  const mouseMoveHandler = (e) => {
    setMouseEvent(e)
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return mouseEvent
}