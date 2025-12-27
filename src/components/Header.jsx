import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white p-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-bold text-primary hover:text-secondary transition-colors duration-300">
          BikeSell
        </NavLink>
        <nav className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary font-semibold' : 'text-white'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/sell"
            className={({ isActive }) =>
              `text-lg hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary font-semibold' : 'text-white'}`
            }
          >
            Sell Your Bike
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
