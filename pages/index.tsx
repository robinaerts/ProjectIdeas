import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div id="home-container">
      <Head>
        <title>Project Ideas</title>
        <meta name="description" content="Programming ideas that fit your level" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Choose your skill level</h1>
      <div id="project-level-container">
        <Link href="/beginner">
        <div className='level-container'>
          <h2 className='level-text'>BEGINNER</h2>
        </div>
        </Link>
        <Link href="/intermediate">
        <div className='level-container'>
        <h2 className='level-text'>INTERMEDIATE</h2>
        </div>
        </Link>
        <Link href="/advanced">
        <div className='level-container'>
        <h2 className='level-text'>ADVANCED</h2>
        </div>
        </Link>
      </div>
      <Link href="/add"><p className='submit-idea-btn'>Submit your project idea</p></Link>
    </div>
  )
}

export default Home
