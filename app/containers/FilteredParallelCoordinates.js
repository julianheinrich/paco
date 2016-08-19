import { connect } from 'react-redux';
import ParallelCoordinates from '../components/ParallelCoordinates/ParallelCoordinates';
import { parcoordsWidth } from '../actions';

const mapStateToProps = state => ({
  width: state.ParallelCoordinates.width,
  height: state.ParallelCoordinates.height,
  // data: state.data,
});

const mapDispatchToProps = dispatch => ({
  onResize: width => dispatch(parcoordsWidth(width)),
});

const FilteredParallelCoordinates = connect(
  mapStateToProps,
  mapDispatchToProps
)(ParallelCoordinates);

export default FilteredParallelCoordinates;
