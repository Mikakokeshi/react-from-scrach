import React, { Component } from 'react'
// syntactic sugar

// Class : Define a new class called Search bar and give it access to all of the functionality that react component has.
// It gives our search bar a bunch of functionality from the React.Component class
class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}


export default SearchBar;
