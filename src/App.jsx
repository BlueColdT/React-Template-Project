import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => <h1>{title}</h1>;

App.propTypes = {
    title: PropTypes.string.isRequired
}

export default App;
