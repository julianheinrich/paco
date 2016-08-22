/**
 * Action creators.
 */

require('../lib/opencpu-0.5.js');

export const setSearchQuery = query => ({
  type: 'SET_SEARCH_QUERY',
  query,
});

export const parcoordsWidth = width => ({
  type: 'SET_PCP_WIDTH',
  width,
});

export const receiveData = json => ({
  type: 'RECEIVE_DATA',
  data: json,
});

export const requestData = patient => ({
  type: 'REQUEST_DATA',
  patient,
});

export function fetchData() {
  return dispatch => {
    dispatch(requestData());
    return new Promise((resolve, reject) => {
      ocpu.call('paco.start', {}, (session) => {
        resolve(session);
      });
    }).then(session => new Promise(resolve => session.getObject(data => resolve(data))))
      .then(json => dispatch(receiveData(json)));
    // const url = `${CONFIG.ocpu.baseURL}/.val/json`;
    // return fetch(
    //   url,
    //   {
    //     method: 'GET',
    //   }
    // )
    // .then(response => response.json())
    // .then(json => dispatch(receiveData(json)));
  };
}
