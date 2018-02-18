import React from 'react';

export const FriendsName = ({ friend }) => {
  return <li>{`${friend.first} ${friend.last}`}</li>;
};
