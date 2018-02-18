import React from 'react';

export const HeaderBar = ({logo}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-title">Bridge School - React - Assignment 1</div>
      </header>
    </div>
  );
};

