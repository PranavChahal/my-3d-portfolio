import React from 'react';
import TopPage from '../components/TopPage';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <TopPage />
      <Hero />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
