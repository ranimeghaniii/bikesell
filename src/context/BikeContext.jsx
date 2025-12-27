import React, { createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import initialBikes from '../data/bikes';

const BikeContext = createContext();

export const BikeProvider = ({ children }) => {
  const [bikes, setBikes] = useState(() => {
    const localData = localStorage.getItem('bikes');
    return localData ? JSON.parse(localData) : initialBikes;
  });

  useEffect(() => {
    localStorage.setItem('bikes', JSON.stringify(bikes));
  }, [bikes]);

  const addBike = (newBike) => {
    setBikes((prevBikes) => [{ ...newBike, id: uuidv4() }, ...prevBikes]);
  };

  const getBikeById = (id) => {
    return bikes.find((bike) => bike.id === id);
  };

  return (
    <BikeContext.Provider value={{ bikes, addBike, getBikeById }}>
      {children}
    </BikeContext.Provider>
  );
};

export const useBikes = () => {
  return useContext(BikeContext);
};
