import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBikes } from '../context/BikeContext';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';

const BikeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBikeById } = useBikes();
  const bike = getBikeById(id);

  useEffect(() => {
    if (!bike) {
      navigate('/404');
    }
  }, [bike, navigate]);

  if (!bike) {
    return null; // Will be redirected by useEffect
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button onClick={() => navigate(-1)} variant="outline" className="mb-6 !border-dark text-dark hover:!bg-dark hover:!text-white">
        &larr; Back to Bikes
      </Button>

      <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Slider */}
          <div>
            <ImageSlider images={bike.images} />
          </div>

          {/* Bike Details */}
          <div>
            <h1 className="text-4xl font-extrabold text-dark mb-4">{bike.name}</h1>
            <p className="text-2xl font-bold text-primary mb-6">{formatPrice(bike.price)}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 text-gray-700">
              <div>
                <span className="font-semibold text-gray-800">Brand:</span> {bike.brand}
              </div>
              <div>
                <span className="font-semibold text-gray-800">Model:</span> {bike.model}
              </div>
              <div>
                <span className="font-semibold text-gray-800">Year:</span> {bike.year}
              </div>
              <div>
                <span className="font-semibold text-gray-800">Category:</span> {bike.category}
              </div>
              <div>
                <span className="font-semibold text-gray-800">Condition:</span> {bike.condition}
              </div>
              <div>
                <span className="font-semibold text-gray-800">Location:</span> {bike.location}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-dark mb-3">Description</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {bike.description}
            </p>

            <h2 className="text-2xl font-bold text-dark mb-3">Seller Information</h2>
            <div className="bg-light p-6 rounded-md shadow-inner">
              <p className="text-gray-800 mb-2">
                <span className="font-semibold">Name:</span> {bike.seller.name}
              </p>
              <p className="text-gray-800 mb-2">
                <span className="font-semibold">Phone:</span>{' '}
                <a href={`tel:${bike.seller.phone}`} className="text-primary hover:underline">
                  {bike.seller.phone}
                </a>
              </p>
              <p className="text-gray-800">
                <span className="font-semibold">Email:</span>{' '}
                <a href={`mailto:${bike.seller.email}`} className="text-primary hover:underline">
                  {bike.seller.email}
                </a>
              </p>
            </div>
            <Button variant="primary" className="mt-8 w-full">
              Contact Seller
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetailPage;
