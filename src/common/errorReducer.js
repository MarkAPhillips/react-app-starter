export const ADD = 'react-app-starter/error/ADD';

export function error(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.error];

    default:
      return state;
  }
}
