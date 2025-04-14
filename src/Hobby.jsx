import React from 'react';

function Hobby({ hobby }) {
  // Destructure the hobby prop
  const { name, description } = hobby;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Hobby;
 