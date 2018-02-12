import React from "react";

const bestFriends = ({data}) => {
	return <ul className="friendList">
	{data
		.filter(item => item.isBestFriend)
		.map(item => <li>{item.first} {item.last}</li>)}
	</ul>;
};

export default bestFriends;