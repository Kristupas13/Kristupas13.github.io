import './App.css';
import { ContactForm } from './feedback/ContactForm';
import Snowfall from 'react-snowfall';

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="split left-column">
          <Snowfall
            style={{
              position: 'fixed',
              width: '50vw',
              height: '100vh',
            }}
          />
          <div></div> <div></div>
          <div></div>
          <div></div>
              <button className="christmas-button">
                Sužinoti daugiau
              </button>
              <div></div>
        </div>
        <div className="split right-column">
          <div>
            <h2>Pavasaris</h2>
          </div>
          <div>
            <h2>Netrukus!</h2>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
