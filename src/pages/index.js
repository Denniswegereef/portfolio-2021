import Head from 'next/head'
import styles from '../styles/pages/Index.module.scss'
import MainLayout from '../layouts/Main'
import Intro from '../components/Intro'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Dennis Wegereef</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <MainLayout>
        <Intro />
      </MainLayout>
    </div>
  )
}