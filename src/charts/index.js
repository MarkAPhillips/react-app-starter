export const LOAD_CHART_SUCCESS = 'LOAD_CHART_SUCCESS';
export const LOAD_CHART_REQUEST = 'LOAD_CHART_REQUEST';
export const LOAD_CHART_FAIL = 'LOAD_CHART_FAIL';

// Actions
export function onStart(type) {
  return { type };
}

const initialState = {
  data: [],
};

// Reducers
export function chart(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHART_SUCCESS:
      return Object.assign({}, state, { data: action.data });

    case LOAD_CHART_REQUEST:
      return state;

    case LOAD_CHART_FAIL:
      return state;

    default:
      return state;
  }
}
