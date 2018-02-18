import React , {Component} from 'react';
import { MyFriends } from './AllMyFriends.js'


class SearchAllFriends extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
  }

  updateSearch = (event) => {
    this.setState({search: event.target.value });
    //alert(this.state.search)
  }

  render() {
    let filteredFriends = this.props.friendList.filter((friend) => {
      let fullName = friend.first + " " + friend.last
      return fullName.toLowerCase().search(this.state.search.toLowerCase()) !== -1
    })

    return (
      <div>
        <input type='text' name='name' placeholder='Search...' onChange={this.updateSearch}/>
        <MyFriends friendList={filteredFriends} />
      </div>
    )
  }

}

export default SearchAllFriends;