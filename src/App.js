import React, { Component } from 'react';
import './App.css';
import { Header } from './Components/header';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Hello World">!!!</Header>
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
