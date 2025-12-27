import React from 'react';
import { useBikes } from '../context/BikeContext';
import BikeCard from '../components/BikeCard';

const HomePage = () => {
  const { bikes } = useBikes();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-dark text-center mb-10">
        Discover Your Next Ride
      </h1>

      {bikes.length === 0 ? (
        <p className="text-center text-xl text-gray-600 mt-10">No bikes currently listed. Be the first to sell one!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
