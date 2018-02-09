import React from "react";

export const FriendList = ({ data }) => (
  <ul>
    {data.map(friend => <li key={friend.fullName}>{friend.fullName}</li>)}
  </ul>
);
