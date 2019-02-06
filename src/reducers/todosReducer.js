
import { values, orderBy, omit } from 'lodash';
import { API } from '../constants';
import { actionCreator } from './actionCreator';
import toHash from '../utils/toHash';

// Actions
export const ADD_REQUEST = `${API.APP_ID}/todos/ADD_REQUEST`;
export const ADD_SUCCESS = `${API.APP_ID}/todos/ADD_SUCCESS`;
export const ADD_FAIL = `${API.APP_ID}/todos/ADD_FAIL`;
export const LOAD_REQUEST = `${API.APP_ID}/todos/LOAD_REQUEST`;
export const LOAD_SUCCESS = `${API.APP_ID}/todos/LOAD_SUCCESS`;
export const LOAD_FAIL = `${API.APP_ID}/todos/LOAD_FAIL`;
export const STATUS_CHANGE_REQUEST = `${API.APP_ID}/todos/STATUS_CHANGE_REQUEST`;
export const STATUS_CHANGE_SUCCESS = `${API.APP_ID}/todos/STATUS_CHANGE_SUCCESS`;
export const STATUS_CHANGE_FAIL = `${API.APP_ID}/todos/STATUS_CHANGE_FAIL`;
export const DELETE_REQUEST = `${API.APP_ID}/todos/DELETE_REQUEST`;
export const DELETE_SUCCESS = `${API.APP_ID}/todos/DELETE_SUCCESS`;
export const DELETE_FAIL = `${API.APP_ID}/todos/DELETE_FAIL`;

// Reducer
const initialState = { list: {} };

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_SUCCESS: {
      const { payload } = action;
      const {
        item, createdDate, completed, id,
      } = payload;
      return {
        list: {
          ...state.list,
          [id]: {
            id, item, createdDate, completed,
          },
        },
      };
    }
    case DELETE_SUCCESS: {
      const { id } = action.payload;
      return {
        ...state,
        list: omit(state.list, id),
      };
    }
    case LOAD_SUCCESS:
      return { ...state, list: toHash(action.payload) };
    case STATUS_CHANGE_SUCCESS: {
      const { payload } = action;
      const { id, completed } = payload;
      const list = state.list[id];
      return {
        list: {
          ...state.list,
          [id]: {
            ...list,
            completed,
          },
        },
      };
    }

    default:
      return state;
  }
}

// Action Creators
export const requestAdd = actionCreator(ADD_REQUEST, 'payload');
export const addTodo = actionCreator(ADD_SUCCESS, 'payload');
export const requestLoad = actionCreator(LOAD_REQUEST);
export const setTodos = actionCreator(LOAD_SUCCESS, 'payload');
export const requestStatusChange = actionCreator(STATUS_CHANGE_REQUEST, 'payload');
export const updateTodo = actionCreator(STATUS_CHANGE_SUCCESS, 'payload');

// Selectors
export const todosDefaultSelector = state => orderBy(values(state.todos.list), ['createdDate'], ['desc']);
