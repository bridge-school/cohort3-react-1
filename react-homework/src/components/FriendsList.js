import React from 'react';
import { FriendsName } from './FriendsName.js';

export const FriendsList = ({ bestFriends, friendList }) => {
  return (
    <div className="listContainer">
      <p> {bestFriends ? 'Best Friends' : 'Friends'} </p>
      <ul className="listOfFriends">
        {bestFriends
          ? bestFriends.map((friend, index) => (
              <FriendsName key={index} friend={friend} />
            ))
          : friendList.map((friend, index) => (
              <FriendsName key={index} friend={friend} />
            ))}
      </ul>
    </div>
  );
};
