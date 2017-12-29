import { createSelector } from 'reselect';
import getCatalogues from './service/catalogueService';
import { ADD } from '../common/errorReducer';
import API from '../common/constants';

const LOAD_SUCCESS = 'react-app-starter/catalogue/LOAD_SUCCESS';
const LOAD_REQUEST = 'react-app-starter/catalogue/LOAD_REQUEST';
const LOAD_FAIL = 'react-app-starter/catalogue/LOAD_FAIL';

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
    getCatalogues()
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
export function catalogue(state = [], action) {
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
const getCatalogueData = state => state.catalogue;

// Data to generate chart
export const getCatalogueDataForChart =
  createSelector([getCatalogueData], (data) => {
    if (_.isEmpty(data)) {
      return [];
    }
    return _.find(data, d => d.name === 'Catalogue 1').dominant_colors;
  });

// Data for drop down list
export const getCatalogueNames =
  createSelector([getCatalogueData], (data) => {
    if (_.isEmpty(data)) {
      return [];
    }
    return _.map(data, d => d.name);
  });
