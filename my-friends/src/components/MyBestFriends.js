import React from 'react';

export const MyBestFriends = ({ friendList }) => {
  return (
    <ul>
      { friendList.filter( eachFriend => { return eachFriend.isBestFriend })
      .map( eachFriend => <li>{eachFriend.first} {eachFriend.last}</li>)  }
    </ul>
  );


};
