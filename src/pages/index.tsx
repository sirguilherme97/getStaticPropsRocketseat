import { GetStaticProps } from 'next'
import Head from 'next/head';
import Header from '../componets/Header'

export default function Home({ org }) {
  return (
    <div>
      <Head>
        <title>Rocktseat feat. Impulse</title>
      </Head>
      <Header />
      <div className='bg-zinc-900 flex flex-col gap-4 text-zinc-50 w-full h-80 p-12 leading-relaxed'>
        <h1>{org.login}</h1>
        <p>{org.description}</p>
        <p>Site: <a className="underline underline-offset-2" href={org.blog}>{org.login}</a></p>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat');
  const data = await response.json();
  return {
    props: {
      org: data,
    },
    revalidate: 10,
  }
}
