import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handlechange = e => {
    return this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <form>
        <input type="text" onChange={this.handlechange} />
        <button onClick={this.props.cityCallback}>Search</button>
      </form>
    );
  }
}

export default SearchForm;
