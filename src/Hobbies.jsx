import React from 'react';
import Hobby from './Hobby.jsx';

function Hobbies({ hobbies }) {
  // hobbies is the array passed from App
  return (
    <div>
      {hobbies.map((hobby, index) => (
        // Use index as key only if there is no unique ID
        <Hobby key={index} hobby={hobby} />
      ))}
    </div>
  );
}

export default Hobbies;
