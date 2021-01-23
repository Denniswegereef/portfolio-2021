import { useEffect, useRef } from 'react'
import styles from './Mouse.module.scss'
import { UseMouseMove } from '../hooks/UseMouseMove'

let firstMouseMove = false
let elementHeight
let elementWidth

const Mouse = () => {
  const mouseEvent = UseMouseMove()
  const mouseElement = useRef(null)

  useEffect(() => {
    const elementBounding = mouseElement.current.getBoundingClientRect()
    elementHeight = elementBounding.height
    elementWidth = elementBounding.width

  }, [mouseElement])

  useEffect(() => {
    firstMouseMove = true
  }, [mouseEvent])

  return (
    <div
      ref={mouseElement}
      className={styles.mouse}
      style={{
        top: mouseEvent.clientY - (elementHeight / 2),
        left: mouseEvent.clientX - (elementWidth / 2),
        opacity: firstMouseMove ? 1 : 0
      }}/>
  );
}
 
export default Mouse;