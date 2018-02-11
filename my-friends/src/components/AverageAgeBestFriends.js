import React from 'react';

export const AverageAgeBestFriends = ({ friendList }) => {

  const bestFriends = friendList.filter( eachFriend => { return eachFriend.isBestFriend })
  const totalOfBestFriends = bestFriends.length;
  const sumOfAges = bestFriends.reduce((sum, friend) => { return sum + friend.age }, 0);

  return (
    "The average age of my best friends is: " + sumOfAges / totalOfBestFriends
  );


};
