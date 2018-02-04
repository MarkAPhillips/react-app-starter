import { ADD_SUCCESS } from './todosReducer';

/** Resets the form data on submission */
export const todoFormPlugin = {
  todo: (state, action) => {
    switch (action.type) {
      case ADD_SUCCESS:
        return undefined;
      default:
        return state;
    }
  },
};
