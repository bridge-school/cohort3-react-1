import React from 'react';

export const AverageAge = ({ bestFriends }) => {
  const calculateAge = bestFriends => {
    let total = bestFriends.reduce((acc, curr) => {
      return acc + curr.age;
    }, 0);

    return bestFriends.length > 0
      ? (total / bestFriends.length).toFixed(1)
      : null;
  };

  return (
    <div className="averageAge">
      <p> Average age of best friends </p>
      {calculateAge(bestFriends)}
    </div>
  );
};
