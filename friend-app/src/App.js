import React, { Component } from "react";
import "./App.css";
import { FriendLists } from "./components/friendLists";
import { friends } from "./data.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendLists data={friends} />
      </div>
    );
  }
}

export default App;
