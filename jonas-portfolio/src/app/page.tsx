import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Gear from '@/components/Gear';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="film-grain">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Gear />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
