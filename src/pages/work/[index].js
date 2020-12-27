import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { fetchEntries } from '../../utils/ContentFulData'

const Work = ({ data }) => {
  return (
    <>
    <h1>Work item</h1>
    { data.title }
    {}
    </>
  );
}

export default Work;

export async function getStaticProps({ params }) {
  const res = await fetchEntries({
    content_type: 'work',
    'fields.slug[in]': params.index,
    limit: 1,
  })

  return { props: { data: res[0].fields },
  }
}

export async function getStaticPaths() {
  const res = await fetchEntries({
    content_type: 'work'
  })

  return {
    paths: res.map(({fields}) => `/work/${fields.slug}`),
    fallback: false,
  }
}