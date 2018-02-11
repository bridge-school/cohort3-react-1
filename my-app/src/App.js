import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header'
import { List } from './components/list'
import { friends } from './components/friends'
import { checkListCondition } from './lib/checkListCondition'
import { calculateAverage } from './lib/calculateAverage'

class App extends Component {

  render() {
    return (
      <div className="App container">
          <Header text="Friends"> </Header>
          <div className="row">
              <div className="col-md-6">
                  <h3>All</h3>
                  <List data={friends} flagField={null}></List>
              </div>
              <div className="col-md-6">
                  <h3>Best</h3>
                  <List data={friends} flagField={"isBestFriend"}></List>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <h3> Average age of best friends: {calculateAverage(checkListCondition(friends,"isBestFriend"))} </h3>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
