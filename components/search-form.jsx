import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.cityCallback(this.state.searchText);
    this.setState({
      searchText: '',
    });
  };

  handlechange = e => this.setState({ searchText: e.target.value });

  render() {
    return (
      <form>
        <input
          value={this.state.searchText}
          type="text"
          onChange={this.handlechange}
        />
        <button onClick={this.handleSearch} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
