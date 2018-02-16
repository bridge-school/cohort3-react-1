import React from 'react';

export const AverageAge = ({ data }) => {
  const avg = data.reduce((acc, curr) => {return acc + curr.age}, 0) / data.length;
  // const avg = friends;
  return (
  <div>
    <p>The average age of my friends is
      {
      <span> {avg}.</span>
      }
    </p>
  </div>);
};
