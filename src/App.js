import React, { Component } from 'react';
import FriendsData from './components/data';
import FriendList from './components/friend-list';
import AverageAge from './components/average-age';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="appHeader">
          <h1>Friends</h1>
        </header>
        <div>
          <FriendList 
            data={FriendsData} 
            header="All friends" 
            searchPlaceholder="Search all friends"/>
          <AverageAge data={FriendsData}/>
        </div>
      </div>   
    );
  }
}


export default App;
