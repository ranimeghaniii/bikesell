import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const BikeCard = ({ bike }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={bike.images[0]}
        alt={bike.name}
        className="w-full h-48 object-cover object-center"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{bike.name}</h3>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">{bike.brand}</span> - {bike.model} ({bike.year})
        </p>
        <p className="text-2xl font-extrabold text-primary mb-4">{formatPrice(bike.price)}</p>
        <Link to={`/bike/${bike.id}`}>
          <Button variant="primary" className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BikeCard;
