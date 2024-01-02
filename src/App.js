import './App.css';
import { ContactForm } from './components/feedback/ContactForm';
import Footer from './components/footer/Footer';
import MainImage from './components/main-image/MainImage';
import MainVideo from './components/main-video/MainVideo';
import Navbar from './components/navbar/Navbar';
import VideoBackground from './components/video-background/VideoBackground';

function App() {
  return (
    <div className="App">
      <VideoBackground />
      <Navbar/>

      <div className='content'>
        <div className='child'><MainVideo /></div>
        <div className='child'><MainImage /></div>
        <div className='child'><ContactForm /></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
