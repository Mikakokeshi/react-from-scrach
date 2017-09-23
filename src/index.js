import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDmYVX6lavWIa-MBVJF73TtujpENKZckmw';

// Create a new component. This component should produce
// some HTML

const App = () => {
  return <div>
    <SearchBar />
  </div>;
}

// Take this component's generate HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
