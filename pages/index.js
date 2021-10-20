import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import Navigation from '../components/Navigation';
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-md-auto col-md-9" >
        <Head>
        <title>Bootstrap pricing page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <HomePage />
      <Footer />
    </div>
  )
}