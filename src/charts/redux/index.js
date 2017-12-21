import getChartData from '../../common/services/chartService';
import { ADD_ERROR } from '../../common/redux/error';
import API from '../../common/constants';

const LOAD_CHART_SUCCESS = 'LOAD_CHART_SUCCESS';
const LOAD_CHART_REQUEST = 'LOAD_CHART_REQUEST';
const LOAD_CHART_FAIL = 'LOAD_CHART_FAIL';

function onAction(type) {
  return { type };
}

function onSuccess(data) {
  return { type: LOAD_CHART_SUCCESS, data };
}

// Actions
export function onFetch() {
  return (dispatch) => {
    dispatch(onAction(LOAD_CHART_REQUEST));
    getChartData()
      .then((response) => {
        if (response.status !== API.STATUS_CODES.OK) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.data)
      .then(items => dispatch(onSuccess(items)))
      .catch((err) => {
        dispatch(onAction(LOAD_CHART_FAIL));
        dispatch({ type: ADD_ERROR, error: err });
      });
  };
}

// Reducers
export function chart(state = [], action) {
  switch (action.type) {
    case LOAD_CHART_SUCCESS:
      return [...state, action.data];

    case LOAD_CHART_REQUEST:
      return state;

    case LOAD_CHART_FAIL:
      return state;

    default:
      return state;
  }
}
