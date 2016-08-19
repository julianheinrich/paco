import { connect } from 'react-redux';
import SearchField from '../components/SearchField';
import { setSearchQuery } from '../actions';

const mapStateToProps = state => ({ query: state.query });

const mapDispatchToProps = dispatch => ({
  onQueryChange: query => dispatch(setSearchQuery(query)),
});

const FilterQuery = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);

export default FilterQuery;
