import './App.css';
import LeftSide from './components/left-side/LeftSide';
import VideoBackground from './components/video-background/VideoBackground';

function App() {

  return (
    <div className="App">
      <VideoBackground />
      <div className='container'>
        <div className='left-column'>
          <LeftSide />
        </div>
        <div className='right-column'>
          Tesasssssssssssssssssssss
        </div>
      </div>
    </div>
  );
}

export default App;
