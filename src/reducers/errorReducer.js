import AppConstants from '../constants';

// Actions
export const ADD = `${AppConstants.APP_ID}/error/ADD`;

export default function error(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.error];
    default:
      return state;
  }
}
