import { v4 as uuidv4 } from 'uuid';

const initialBikes = [
  {
    id: uuidv4(),
    name: 'Mountain Slayer Pro',
    brand: 'Trek',
    model: 'X-Caliber 9',
    year: 2023,
    price: 1800,
    description: 'A powerful and versatile mountain bike designed for advanced riders. Features a lightweight aluminum frame, 12-speed Shimano drivetrain, and front suspension. Perfect for tackling challenging trails and long-distance rides. Excellent condition, regularly serviced.',
    images: [
      'https://images.unsplash.com/photo-1601053181829-92b0c3451e04?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1598463162799-a99f1883584e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1590137788177-d64e8329b350?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    seller: {
      name: 'John Doe',
      phone: '555-1234',
      email: 'john.doe@example.com'
    },
    category: 'Mountain Bike',
    condition: 'Used - Excellent',
    location: 'New York, NY'
  },
  {
    id: uuidv4(),
    name: 'City Commuter Deluxe',
    brand: 'Specialized',
    model: 'Sirrus X 3.0',
    year: 2022,
    price: 950,
    description: 'A comfortable and efficient hybrid bike, perfect for daily commuting and weekend rides. Features a lightweight aluminum frame, hydraulic disc brakes, and comfortable geometry. Low maintenance and reliable.',
    images: [
      'https://images.unsplash.com/photo-1571217646679-b1d981882acb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1606775533088-3e4df6c5d980?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1579564070622-6b3a391583e7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    seller: {
      name: 'Jane Smith',
      phone: '555-5678',
      email: 'jane.smith@example.com'
    },
    category: 'Hybrid Bike',
    condition: 'Used - Good',
    location: 'Los Angeles, CA'
  },
  {
    id: uuidv4(),
    name: 'Road Warrior Carbon',
    brand: 'Giant',
    model: 'Defy Advanced 2',
    year: 2024,
    price: 2500,
    description: 'High-performance carbon fiber road bike designed for endurance and speed. Features a full carbon frame and fork, Shimano 105 groupset, and disc brakes. Light, fast, and comfortable for long rides.',
    images: [
      'https://images.unsplash.com/photo-1532298229146-5faef1fba386?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1607538964720-d3c5f6a5b986?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1589178736166-4c90e0c9044b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    seller: {
      name: 'Peter Jones',
      phone: '555-9012',
      email: 'peter.jones@example.com'
    },
    category: 'Road Bike',
    condition: 'New',
    location: 'Chicago, IL'
  },
  {
    id: uuidv4(),
    name: 'Kids Adventure Bike',
    brand: 'Woom',
    model: 'Woom 4',
    year: 2023,
    price: 400,
    description: 'Lightweight and easy-to-ride bike for kids aged 6-9. Features child-friendly geometry, easy-to-reach brakes, and 8-speed gears. Perfect for growing cyclists to explore trails and neighborhood streets.',
    images: [
      'https://images.unsplash.com/photo-1557342795-a226b38c35d9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1616089311242-b0629c1581e2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1594953768132-85006b527581?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    seller: {
      name: 'Sarah Davis',
      phone: '555-3456',
      email: 'sarah.davis@example.com'
    },
    category: 'Kids Bike',
    condition: 'Used - Very Good',
    location: 'Denver, CO'
  }
];

export default initialBikes;
