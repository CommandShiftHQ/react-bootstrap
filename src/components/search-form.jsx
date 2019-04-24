import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchText: event.target.value });
  }


  render() {
    return (
      <div className="searchBox">
        <input
          className="inputField"
          onChange={this.handleInputChange}
          value={this.state.searchText}
          placeholder="Type a city..."
        />
        <button onClick={() => this.props.handleLocationSearch(this.state.searchText)}>
         Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
