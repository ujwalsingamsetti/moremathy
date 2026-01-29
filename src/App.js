import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Aboutus from './components/Aboutus';
import Success from './components/Success';
import CTA from './components/CTA';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <Aboutus />
        <Success />
        <CTA/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
