import React, { useState } from 'react';
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.avif'
import s6 from '../assets/s6.jpg'
import s9 from '../assets/s9.jpg'
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [s1,s6,s9];
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-[90%] mx-auto relative w-100 h-[400px] mt-10 ">
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={nextSlide}>
        &#8250;
      </button>
      <img className="mx-auto w-full h-full " src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`}  />
    </div>
  );
}

export default Slider;
