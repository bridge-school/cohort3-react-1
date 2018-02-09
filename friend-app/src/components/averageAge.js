import React from "react";

export const AverageAge = ({ data }) => {
  const bestFriends = data.filter(friend => friend.isBestFriend);
  const averageAge =
    bestFriends.reduce((a, b) => {
      return a + b.age;
    }, 0) / bestFriends.length;

  return <div>{averageAge}</div>;
};
