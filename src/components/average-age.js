import React from "react";

const averageAge = ({data}) => {
	const summing = (accumulator, item) => accumulator + item;
	const age = data
		.filter(item => item.isBestFriend)
		.map(item => item.age);
	const average = age.reduce(summing,0)/age.length;

	return <p className="listContainer">My best friends' average age is {average}.</p>;
};

export default averageAge;