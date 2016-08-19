import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ParallelCoordinatesComponent from 'react-parallel-coordinates';

class ParallelCoordinates extends React.Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onResize: PropTypes.func,
  };

  static defaultProps = {
    width: 500,
    height: 500,
    data: [],
    onResize: () => {},
  }

  /**
   * Initializes state with empty dataset.
   * @return {undefined} Always returns undefined.
   */
  constructor(props) {
    super(props);
    this.state = {
      brushing: [],
      width: this.props.width,
      height: this.props.height,
    };
    this.bindMethods('brushUpdated', 'handleResize');
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  bindMethods(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }

  brushUpdated(data) {
    // this.setState({ brushing: data });
  }

  handleResize(e) {
    const newWidth = ReactDOM.findDOMNode(this.parcoords).clientWidth;
    this.setState({ width: newWidth });
  }

  render() {
    return (
      <div ref={node => (this.parcoords = node)}>
        <ParallelCoordinatesComponent
          data={this.props.data}
          height={this.state.height}
          width={this.state.width}
          dimensionTitleRotation={0}
          onBrushEnd_data={this.brushUpdated}
          onBrush_extents={() => {}}
          onBrushEnd_extents={() => {}}
        />
      </div>
    );
  }
}

export default ParallelCoordinates;
