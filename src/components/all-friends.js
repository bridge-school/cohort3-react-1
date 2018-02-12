import React from "react";

const allFriends = ({data}) => <ul className="friendList">{data.map(item => <li>{item.first} {item.last}</li>)}</ul>;

export default allFriends;