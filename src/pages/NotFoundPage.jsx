import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-light text-dark px-4 py-12">
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <p className="text-3xl font-semibold mb-6">Page Not Found</p>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link to="/">
        <Button variant="primary">
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
