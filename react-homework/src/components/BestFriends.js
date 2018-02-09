import React from 'react';

export const BestFriends = ({ friendList }) => {
  return (
    <ul className="listOfBestFriends">
      <p> Best friends </p>
      {friendList.filter(friend => friend.isBestFriend).map((friend, index) => (
        <li key={index}>
          {friend.first} {friend.last}
        </li>
      ))}
    </ul>
  );
};
