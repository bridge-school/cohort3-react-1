import React from 'react';

const FriendListItem = ({data}) => {
	return (
		<li>{data.first} {data.last}</li>
	);
}

export default FriendListItem;