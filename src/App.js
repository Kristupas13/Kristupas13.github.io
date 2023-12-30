import { useRef, useState } from 'react';
import './App.css';
import Sidebar from './sidebar'
import FreeDrawing from './sketch';

function App() {
  const canvasRef = useRef(null);

  const [strokeWidth, setStrokeWidth] = useState(2);
  const [strokeColor, setStrokeColor] = useState('#000000');

  const handleStrokeWidthChange = (event) => {
    setStrokeWidth(parseInt(event.target.value));
  };

  const handleStrokeColorChange = (event) => {
    setStrokeColor(event.target.value);
  };

  const handleClearCanvas = () => {
    canvasRef.current.clearCanvas();
  };
  
  return (
    <div className="App">
      <Sidebar handleStrokeWidthChange={handleStrokeWidthChange} strokeColor={strokeColor} handleStrokeColorChange={handleStrokeColorChange} handleClearCanvas={handleClearCanvas}/>
      <main className='content'>
        <FreeDrawing canvasRef={canvasRef} strokeWidth={strokeWidth} strokeColor={strokeColor}></FreeDrawing>
      </main>
    </div>
  );
}

export default App;
