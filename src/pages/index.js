// import React, { useState, useEffect } from 'react';
import Head from 'next/head'
// import Link from 'next/link'
// import { fetchEntries } from '../utils/ContentFulData'
import styles from '../styles/pages/Index.module.scss'
import MainLayout from '../layouts/Main'

// import Test from '../components/Test'
import Intro from '../components/Intro'

export default function Home(props) {
  // useEffect(() => {
  //   console.log(props)
  // }, [props])


  return (
    <div>
      <Head>
        <title>Portfolio 2021</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <MainLayout>
        <Intro />
      </MainLayout>
    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetchEntries({
//     content_type: 'work'
//   })
//   const posts = await res.map((p) => p.fields)

//   return { props: { posts },
//   }
// }