import React from "react";

export const BestFriendList = ({ data }) => (
  <ul>
    {data.map(
      friend =>
        friend.isBestFriend && <li key={friend.id}>{friend.fullName}</li>
    )}
  </ul>
);
