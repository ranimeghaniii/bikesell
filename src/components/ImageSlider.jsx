import React, { useState } from 'react';
import Button from './Button';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
        <p className="text-gray-500 text-lg">No images available</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[currentIndex]}
        alt={`Bike image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found'; }}
      />

      {images.length > 1 && (
        <>
          <Button
            onClick={prevSlide}
            variant="dark"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-70 !px-4 !py-2"
          >
            &#10094;
          </Button>
          <Button
            onClick={nextSlide}
            variant="dark"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-70 !px-4 !py-2"
          >
            &#10095;
          </Button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-400 hover:bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
