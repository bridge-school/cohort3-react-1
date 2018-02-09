import React from 'react';

export const Friends = ({ friendList }) => {
  return (
    <ul className="listOfFriends">
      <p> Friends </p>
      {friendList.map((friend, index) => (
        <li key={index}>
          {friend.first} {friend.last}
        </li>
      ))}
    </ul>
  );
};
