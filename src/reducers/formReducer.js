import _ from 'lodash';
import { API } from '../constants';
import { actionCreator } from './actionCreator';


// Actions
export const CREATE = `${API.APP_ID}/form/CREATE`;
export const DISABLE = `${API.APP_ID}/form/DISABLE`;

const initialState = { forms: {} };

export default function error(state = initialState, action) {
  switch (action.type) {
    case CREATE: {
      const { payload } = action;
      const { id, name } = payload;
      return _.has(state.forms, id) ? state :
        {
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
export const disableForm = actionCreator(DISABLE, 'payload');

// Selectors
export const formSelector = (state, id) => state.form.forms[id];

