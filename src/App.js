import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/header';
import data from './data.json';

class App extends Component {
  render() {
    const avg = data.reduce((acc, curr) => {return acc + curr.age}, 0) / data.length;
    return (
      <div className="App">
        <Header text="Hello World">!!!</Header>
        <div>
          <p>The average age of my friends is
            {
            <span> {avg}.</span>
            }
          </p>
        </div>
        <div className="my-block">
          <h2>Friends</h2>
            <ul>
            {
              data.map((friend) => <li>{friend.first}</li>)
            }
            </ul>
        </div>
        <div className="my-block">
          <h2>Best Friends</h2>
            <ul>
            {
              data.map((friend) => {
                if (friend.isBestFriend) {
                  return <li>{friend.first}</li>
                }
              })
            }
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
