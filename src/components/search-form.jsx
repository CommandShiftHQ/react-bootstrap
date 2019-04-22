import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="searchBox">
        <input className="inputField" />
        <button> Search </button>
      </div>
    );
  }
}

export default SearchForm;
