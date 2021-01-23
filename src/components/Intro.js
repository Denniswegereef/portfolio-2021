import styles from './Intro.module.scss'
import { motion, useAnimation } from "framer-motion"
import Image from 'next/image'
import { useEffect } from 'react'
import { UseMouseMove } from '../hooks/UseMouseMove'

const Intro = () => {
  const controls = useAnimation()
  const mousePosition = UseMouseMove()

  useEffect(() => {
    controls.start({
      y: '50px',
      transition: { duration: 1 },
    })
  }, [])

  return (
    <div className={styles.container}>
      <motion.div className={styles.image__container}>
        <Image src="/test_image.png" alt="Test image" width={404} height={670}/>
      </motion.div>

      <motion.h1 animate={controls} className={`heading ${styles.heading}`}>
      Dennis Wegereef {mousePosition.clientX} {mousePosition.clientY}
      <span className={styles.heading__span}>Creative developer</span>
      </motion.h1>
    </div>
  );
}
 
export default Intro;