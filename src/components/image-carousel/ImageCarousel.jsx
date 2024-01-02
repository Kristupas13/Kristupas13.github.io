import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MainImage = () => {
    return (
        <Carousel className="carousel-container">
        <div>
        <img src="1.jpg" className='imagas' alt="Image 1" />
        <p className="legend">Knygutė</p>
        </div>
        <div>
        <img src="2.jpg" className='imagas' alt="Image 2" />
        <p className="legend">Žiemos kortelių rinkinys</p>
        </div>
        <img src="4.jpg" className='imagas' alt="Image 3" />
        <div>
        <img src="5.jpg" className='imagas' alt="Image 3" />
        <p className="legend">Gyvūnų kortelės</p>
        </div>
        <img src="6.jpg" className='imagas' alt="Image 3" />
      </Carousel>

    );
};

export default MainImage;
