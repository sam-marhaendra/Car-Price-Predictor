import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AI-based Car Recommender System</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/carpred.png" />
      </Head>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}
