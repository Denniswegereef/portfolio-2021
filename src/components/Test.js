import styles from './Test.module.scss'
import Link from 'next/link'

const Test = () => {
  return (
    <div>
      <h1 className={styles.heading}>
        test
        <span>test</span>
      </h1>

      <Link href='/about'>About</Link>
    </div>
  );
}

export default Test;