import React from "react";

export const FriendLists = ({ data }) => {
  const averageAge =
    data.reduce(function(a, b) {
      return a + b.age;
    }, 0) / data.length;

  return (
    <div>
      <ul>
        {data.map(friend => (
          <li key={`${friend.last} ${friend.age}`}>{`${friend.first} ${
            friend.last
          }`}</li>
        ))}
      </ul>
      <ul>
        {data.map(
          friend =>
            friend.isBestFriend && (
              <li key={`${friend.first} ${friend.age}`}>{`${friend.first} ${
                friend.last
              }`}</li>
            )
        )}
      </ul>
      <div>{averageAge}</div>
    </div>
  );
};
