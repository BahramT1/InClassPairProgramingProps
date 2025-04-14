import React from 'react';
import Hobbies from './Hobbies.jsx';

export default function App() {
  // Define a list of hobbies 
  const hobbies = [
    { name: 'Gardening', description: 'Growing veggies and flowers in the backyard.' },
    { name: 'Photography', description: 'Capturing moments and landscapes.' },
    { name: 'Gaming', description: 'Playing strategy and RPG games online.' },
  ];

  return (
    <div>
      <h1>My Hobbies</h1>
      {/* Pass the hobbies array as a prop to Hobbies */}
      <Hobbies hobbies={hobbies} />
    </div>
  );
}
