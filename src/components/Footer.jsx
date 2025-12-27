import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-6 mt-12 shadow-inner">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} BikeSell. All rights reserved.</p>
        <p className="mt-2">Connecting cyclists, one bike at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
