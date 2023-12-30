import './App.css';
import { ContactForm } from './components/feedback/ContactForm';
import LeftSide from './components/left-side/LeftSide';
import VideoBackground from './components/video-background/VideoBackground';
import { FaFacebook } from 'react-icons/fa'; // Make sure to install the react-icons package

function App() {
  const redirectToFacebookPage = () => {
    // Replace 'your-facebook-page-url' with the actual URL of your Facebook page
    window.open('https://www.facebook.com/profile.php?id=61552746337962');
  };

  return (
    <div className="App">
      <div class="thumbnail-container">
      <img src="3.jpg" alt="Company Thumbnail" class="thumbnail" />
      </div>
      <VideoBackground />
      <div className='container'>
        <div className='left-column'>
          <LeftSide />
        </div>
        <div className='middle-column'>
          <img className='middle-image' alt='christmas book' src='1.jpg'/>
        </div>
        <div className='right-column'>
          <ContactForm />
        </div>
      </div>
      <footer className="footer" onClick={redirectToFacebookPage}>
        Daugiau informacijos <FaFacebook className="facebook-icon" />
      </footer>
    </div>
  );
}

export default App;
