import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConceptSection from './components/ConceptSection';
import ProcessSection from './components/ProcessSection';
import ComparisonSection from './components/ComparisonSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ConceptSection />
        <ProcessSection />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;