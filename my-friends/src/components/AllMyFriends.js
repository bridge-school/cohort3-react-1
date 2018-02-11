import React from 'react';

export const MyFriends = ({ friendList }) => {
  return <ul>{ friendList.map( eachFriend => <li>{eachFriend.first} {eachFriend.last}</li>) }</ul>;
};
