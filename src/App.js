import Breathtaking from './components/Breathtaking';
import Featured from './components/Featured';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Occassions from './components/Occassions';
import Philosophy from './components/Philosophy';
import Specialize from './components/Specialize';
import Map from './components/Map';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="home antialiased">
      <Header />
      <div className="mx-auto mw-1920">
        <Hero />
        <Philosophy />
        <Featured />
        <Specialize />
        <Breathtaking />
        <Occassions />
        <Gallery />
        <Map />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
