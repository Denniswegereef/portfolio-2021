import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { fetchEntries } from '../utils/ContentFulData'
import styles from '../styles/pages/Index.module.scss'
import MainLayout from '../layouts/Main'

import Test from '../components/Test'

export default function Home(props) {
  useEffect(() => {
    console.log(props)
  }, [props])

  console.log(styles)

  return (
    <div>
      <Head>
        <title>Portfolio 2021</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <MainLayout>
        <Test />
        {props.posts.map(item => (
          <Link href={`/work/${item.slug}`} key={item.slug}>
            <a className={styles.link}>{item.title}</a>
          </Link>
        ))}
      </MainLayout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries({
    content_type: 'work'
  })
  const posts = await res.map((p) => p.fields)

  return { props: { posts },
  }
}