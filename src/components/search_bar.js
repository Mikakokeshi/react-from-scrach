import React, { Component } from 'react'
// syntactic sugar

// Class : Define a new class called Search bar and give it access to all of the functionality that react component has.
// It gives our search bar a bunch of functionality from the React.Component class
class SearchBar extends Component {
  constructor(props){
    super(props);

    // steteの値を初期化　&　term に代入
    this.state = { term: ""};
    }

    /**value only ever changes when the state changes**/
       /**input became control component by using the value**/
  render() {
    return(
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term });
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
