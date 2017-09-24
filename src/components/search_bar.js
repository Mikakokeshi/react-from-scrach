import React, { Component } from 'react'
// syntactic sugar

// Class : Define a new class called Search bar and give it access to all of the functionality that react component has.
// It gives our search bar a bunch of functionality from the React.Component class
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ""};
    }

  render() {
    return(
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}


export default SearchBar;
