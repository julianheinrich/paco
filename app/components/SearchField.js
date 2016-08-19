/**
 * A Search Field Component
 */
import React, { PropTypes } from 'react';
import { Textfield } from 'react-mdl';

const SearchField = ({ query, onQueryChange }) => (
  <Textfield
    onChange={event => {
      event.preventDefault();
      onQueryChange(event.target.value);
    }}
    label="Search for"
    value={query}
  />
);

SearchField.propTypes = {
  onQueryChange: PropTypes.func,
  changeFilter: PropTypes.func,
  query: PropTypes.string,
};

export default SearchField;
