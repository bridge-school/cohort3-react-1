import React from 'react';

export const InputField = ({ filterFriends }) => {
  const handleChange = event => {
    let input = event.target.value.toLowerCase();
    filterFriends(input);
  };

  return (
    <input
      autoFocus
      className="inputBox"
      onChange={handleChange}
      type="text"
      placeholder="Type to search for friend"
    />
  );
};
