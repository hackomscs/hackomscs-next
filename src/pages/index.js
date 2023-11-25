import Head from 'next/head';

import Main from '../components/Main';

export default function Home() {
  return (
    <>
    <Head>
      <title>HackOMSCS | OMSCS&apos;s First Hackathon</title>
      <meta 
        name="description" 
        content="We plan to host OMSCS&apos;s 1st ever Hackathon"
      />
      
      {/* Primarily for Apple iMessage previews. OG only works with an absolute path. 
          TODO: use a solution that generates this dynamically instead of requiring a weirdly specific link. */}
      <meta property="og:image" content={'/Logo Color Square.png'} />
    </Head>
    <Main />
    </>
  )
}
