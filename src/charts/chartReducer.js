import { createSelector } from 'reselect';
import getCatalogue from '../common/services/catalogueService';
import { ADD } from '../common/errorReducer';
import API from '../common/constants';

const LOAD_SUCCESS = 'react-app-starter/chart/LOAD_SUCCESS';
const LOAD_REQUEST = 'react-app-starter/chart/LOAD_REQUEST';
const LOAD_FAIL = 'react-app-starter/chart/LOAD_FAIL';

function onAction(type) {
  return { type };
}

function onSuccess(data) {
  return { type: LOAD_SUCCESS, data };
}

// Actions
export function onFetch() {
  return (dispatch) => {
    dispatch(onAction(LOAD_REQUEST));
    getCatalogue('Catalogue 1')
      .then((response) => {
        if (response.status !== API.STATUS_CODES.OK) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.data)
      .then(items => dispatch(onSuccess(items)))
      .catch((err) => {
        dispatch(onAction(LOAD_FAIL));
        dispatch({ type: ADD, error: err });
      });
  };
}

// Reducers
export function chart(state = [], action) {
  switch (action.type) {
    case LOAD_SUCCESS:
      return [...state, action.data];

    case LOAD_REQUEST:
      return state;

    case LOAD_FAIL:
      return state;

    default:
      return state;
  }
}

// Selectors
// The data will be shaped in the selector
const getCatalogueData = state => state.chart;

export const getCatalogueDataForChart =
  createSelector([getCatalogueData], data => (_.isEmpty(data) ? [] : data[0].dominant_colors));
