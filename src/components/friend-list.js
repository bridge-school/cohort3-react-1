import React, {Component} from 'react';
import FriendListItem from './friend-list-item';
import SearchBar from './search-bar';

class FriendList extends Component {
	constructor(props) {
		super(props);
		this.state = {term:""}
	}
	
	render() {

		let friends = this.props.data
		.filter(item => {
      let regex = new RegExp(this.state.term,"gi");
      let name = `${item.first} ${item.last}`; 
      return name.match(regex) || item.last.match(regex) || name.match(regex);}
      )
		.map(item => <FriendListItem data={item}/>);

		if(this.props.condition){
			friends = friends.filter(item => item.props.data.isBestFriend);
			console.log(friends);
		}

		return (
			<div className="listContainer">
			<h2>{this.props.header}</h2>
				<SearchBar placeholder={this.props.searchPlaceholder} onSearchTermChange={term => this.setState({term})}/>
				<ul className="friendList">
					{friends}
				</ul>
			</div>
		);		
	}

}

export default FriendList;