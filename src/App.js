import './App.css';
import Navbar from './components/navbar/Navbar';
import VideoBackground from './components/video-background/VideoBackground';
import ImageCarousel from './components/image-carousel/ImageCarousel';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoBackground />
      <div className="parent">
        <div className='section'>
          <div className='part'>
            <ImageCarousel />
          </div>
          <div className='part'>
            <img src="7.jpg" alt='2' className='imagas' />
          </div>
        </div>

        <div className='section bg-white'>
          <div>
            <img src="1.jpg" alt='2' className='imagas' />
          </div>
          <div>
            <img src="3.jpg" alt='2' className='imagas' />
          </div>
        </div>

        <div className='section bg-white'>
          <div>
            <img src="7.jpg" alt='2' className='imagas' />
          </div>
          <div>
            <img src="7.jpg" alt='2' className='imagas' />
          </div>
          <div>
            <img src="7.jpg" alt='2' className='imagas' />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
