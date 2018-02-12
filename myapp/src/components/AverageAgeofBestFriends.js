import React from 'react';


export const AverageAgeofBestFriends = ({ friends }) => {
  const bestFriends = friends.filter( friend => {
    return friend.isBestFriend;})

  const sumOfAges = bestFriends.reduce((sum, friend) => {
    return sum + friend.age }, 0);

  const averageAge = Math.round(sumOfAges/bestFriends.length);


  return (
    <p>The average age of all best friends is: {averageAge}.
    </p>
  )
}
