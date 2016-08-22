/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import Layout from '../../components/Layout';
// import Griddle from 'griddle-react';
import ParallelCoordinates from '../../components/ParallelCoordinates/ParallelCoordinates';
import { fetchData } from '../../actions';
import { connect } from 'react-redux';

/**
 * The Homepage.
 */
class HomePage extends React.Component {

  static propTypes = {
    data: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  /**
   * Dispatches a fetchVariants action to the store.
   * @return {undefined}
   */
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData());
  }

  /**
   * Renders the page.
   * @return {undefined}
   */
  render() {
    const { data, isFetching } = this.props;
    return (
      <div>
        {data.length > 0 &&
          <div>
            <ParallelCoordinates
              data={data}
            />
          {/*<Griddle
              results={data}
              tableClassName="table"
              enableInfiniteScroll
              useFixedHeader
              resultsPerPage={5}
              bodyHeight={400}
            />*/}
          </div>
        }
        {isFetching && data.length === 0 &&
          <h2>Loading...</h2>
        }
      </div>
    );
  }

}

function byQuery(query) {
  return function filter(row) {
    const keys = Object.keys(row);
    for (let i = 0; i < keys.length; ++i) {
      if (row[keys[i]].toString().includes(query)) {
        return true;
      }
    }
    return false;
  };
}

const mapStateToProps = (state) => {
  const { data, query, isFetching } = state;
  const filteredData = data.filter(byQuery(query));
  return {
    data: filteredData,
    isFetching,
  };
};

export default connect(mapStateToProps)(HomePage);
