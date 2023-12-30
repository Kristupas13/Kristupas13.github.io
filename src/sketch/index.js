import { ReactSketchCanvas } from 'react-sketch-canvas';
import MyImage from './Untitled.png';

const FreeDrawing = (props) => {
  return (
    <div style={{height: '100%'}}>
      <ReactSketchCanvas
        ref={props.canvasRef}
        strokeWidth={props.strokeWidth}
        strokeColor={props.strokeColor}
        strokeOpacity={0.2}
        backgroundImage={MyImage}
      />
    </div>
  );
};

export default FreeDrawing;