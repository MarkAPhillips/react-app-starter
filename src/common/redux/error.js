export const ADD_ERROR = 'ADD_ERROR';

export function error(state = [], action) {
  switch (action.type) {
    case ADD_ERROR:
      return [...state, action.error];
    default:
      return state;
  }
}
