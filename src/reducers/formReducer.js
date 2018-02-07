import AppConstants from '../constants';
import { actionCreator } from './actionCreator';

// Actions
export const CREATE = `${AppConstants.APP_ID}/form/CREATE`;
export const DISABLE = `${AppConstants.APP_ID}/form/DISABLE`;

const initialState = { forms: {} };

export default function error(state = initialState, action) {
  switch (action.type) {
    case CREATE: {
      const { payload } = action;
      const { id, name } = payload;
      return {
        forms: {
          ...state.forms,
          [id]: { id, name, disabled: true },
        },
      };
    }
    case DISABLE: {
      const { payload } = action;
      const { id, disabled } = payload;
      const form = state.forms[id];
      return {
        forms: {
          ...state.forms,
          [id]: {
            ...form,
            disabled,
          },
        },
      };
    }
    default:
      return state;
  }
}

// Action creators
export const addForm = actionCreator(CREATE, 'payload');
