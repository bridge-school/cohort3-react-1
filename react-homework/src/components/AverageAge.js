import React from 'react';

export const AverageAge = ({ friendList }) => {
  return (
    <div className="averageAge">
      <p> Average age of best friends </p>
      {friendList.filter(friend => friend.isBestFriend).reduce((acc, curr) => {
        return acc + curr.age;
      }, 0) / friendList.filter(friend => friend.isBestFriend).length}
    </div>
  );
};
