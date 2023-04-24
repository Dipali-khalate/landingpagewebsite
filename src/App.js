
import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Ourteam from './components/Ourteam';
import Services from './components/Services';
import Slider from './components/Slider';
import Whyus from './components/Whyus';
import Workprocess from './components/Workprocess';

function App() {
  return (
    <>
    <Navbar />
    <Slider />
    <Whyus />
    <Services />
    <Workprocess />
    <Gallery />
    <Ourteam />
    <Footer />
    </>
  );
}

export default App;
