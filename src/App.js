import './App.css';
import Navbar from './components/navbar/Navbar';
import VideoBackground from './components/video-background/VideoBackground';
import ImageCarousel from './components/image-carousel/ImageCarousel';
import Footer from './components/footer/Footer';
import SideImage from './components/side-image/SideImage';
import { Button } from 'react-bootstrap';

function App() {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = "https://dl.dropbox.com/scl/fi/hqzprd1sfu4639qdanaoi/U-duotys-Dovana.pdf?rlkey=svyzpvqw0hr858qbsgz59xgri&dl=0";
    downloadLink.download = "NuoMazuDienu-Dovana.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


  return (
    <div className="App">
      <Navbar />
      <VideoBackground />
      <div className="parent">
        <div className='section'>
          <div className='part'>
            <ImageCarousel />
          </div>
          <div className='part text-center'>
            <SideImage/>
            <Button onClick={handleDownload} className='w-full' variant="danger">Įsigyti</Button>
          </div>
        </div>

        <div className='section bg-white'>
          <div className='combo text-center'>
          <span className='display-5 font-weight-bold'>Užduotėlės</span>
            <img src="1.jpg" alt='2' className='didesne' />
            <div className='text-center tt'>
            <Button variant="warning w-full">Sužinoti daugiau</Button>
            <Button variant="danger w-full">Įsigyti</Button>
            </div>
          </div>
          <div className='combo text-center'>
          <span className='display-5 font-weight-bold'>Jau greitai!</span>
            <img src="8.jpg" alt='2' className='didesne' />
            <div className='text-center tt'>
            <Button variant="warning w-full">Sužinoti daugiau</Button>
            <Button variant="danger w-full" disabled>Įsigyti</Button>
            </div>
          </div>
        </div>

        <div className='section-2 bg-white'>
          <div className='combo text-center'>
            <span className='display-5 font-weight-bold'>Gyvūnų kortelės</span>
            <img src="5.jpg" alt='2' className='testine' />
            <Button variant="danger">Įsigyti</Button>
          </div>
          <div className='combo text-center'>
          <span className='display-5 font-weight-bold'>Žiemos kortelės</span>
            <img src="2.jpg" alt='2' className='testine' />
            <Button variant="danger">Įsigyti</Button>
          </div>
          <div className='combo text-center'>
          <span className='display-5 font-weight-bold'>Bendros kortelės</span>
            <img src="4.jpg" alt='2' className='testine' />
            <Button variant="danger">Įsigyti</Button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
