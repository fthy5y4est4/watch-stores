import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;