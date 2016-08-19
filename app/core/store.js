/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore } from 'redux';
// import personsApp from '../reducers';

const initialState = {
  query: '',
  data: [],
  ParallelCoordinates: {
    width: 500,
    height: 500,
  },
};

// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, query: action.query };
    case 'SET_PCP_WIDTH':
      return { ...state, ParallelCoordinates: {
        width: action.width,
        height: state.height,
      } };
    case 'RECEIVE_VARIANTS':
      return { ...state, data: action.data };
    default:
      return state;
  }
});

export default store;
