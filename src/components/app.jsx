import React from 'react';
import LocationDetails from './location-details';
import PropTypes from 'prop-types';

const App = props  => (<LocationDetails

  city={props.location.city}
  country={props.location.country}
/>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

/* const App = (props) => {
    return <h1>{`Hello ${props.name}`}</h1>;
    }
    App.defaultProps = {
        name: 'World',
      }; */


export default App;
