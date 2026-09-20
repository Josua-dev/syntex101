import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Principles from './components/Principles';
import Process from './components/Process';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[var(--syn-bg)] text-[var(--syn-text)]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Principles />
        <Process />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
