/**
* Reducers define how actions change state in the store.
*/

/**
* The state object of the app.
* @type {Object}
*/
const initialState = {
  query: '',
  isFetching: false,
  data: [],
  ParallelCoordinates: {
    width: 500,
    height: 500,
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, query: action.query };
    case 'SET_PCP_WIDTH':
      return { ...state, ParallelCoordinates: {
        width: action.width,
        height: state.height,
      } };
    case 'REQUEST_DATA':
      return { ...state, isFetching: true, patient: action.patient };
    case 'RECEIVE_DATA':
      return { ...state, isFetching: false, data: action.data };
    default:
      return state;
  }
}

export default rootReducer;
