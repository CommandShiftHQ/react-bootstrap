import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render () {
    return (
      <div>
        <input
          className="search-form_input"
          type="text"
          placeholder="City"
          onChange={this.handleInputChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.props.onSearch(this.state.searchText);
            }
          }}
          value={this.state.searchText}
        />
        <button
          onClick={() => this.props.onSearch(this.state.searchText)}
        >
        Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
