import React, { useState } from 'react';
import i1 from '../assets/i1.webp'
import i2 from '../assets/i2.webp'
import i3 from '../assets/i3.webp'
import i4 from '../assets/i4.webp'
import i5 from '../assets/i5.webp'
import i6 from '../assets/i6.webp'
import i7 from '../assets/i7.webp'
import i8 from '../assets/i8.webp'
import i9 from '../assets/i9.webp'
import i10 from '../assets/i10.webp'
import i11 from '../assets/i11.webp'
import i12 from '../assets/i12.webp'
import i13 from '../assets/i13.webp'
import i14 from '../assets/i14.webp'
import i15 from '../assets/i15.webp'
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [i1,i2,i3];
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-100 h-[400px]">
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={nextSlide}>
        &#8250;
      </button>
      <img className="mx-auto" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
    </div>
  );
}

export default Slider;
