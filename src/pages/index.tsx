import type { NextPage } from 'next'
import Head from 'next/head'
import ResponsiveAppBar from '../components/Header'

const Home: NextPage = () => {
 
  return (
    <div>

      <Head>
        <title>Next App</title>
        <meta name="description" content="Next-js template with mui & typeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Header Nav Bar */}
      <ResponsiveAppBar/>
     
    </div>
  )
}

export default Home
