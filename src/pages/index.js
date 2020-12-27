import Head from 'next/head'
import Test from '../components/test'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Test />
      </main>

      <footer />
    </div>
  )
}
