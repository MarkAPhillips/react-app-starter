import form, { CREATE, DISABLE } from '../../src/reducers/formReducer';

describe('Form reducer specs', () => {
  let state;
  let initialState = { forms: {} };

  it('should return the initial state', () => {
    state = form(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle CREATE for a new form', () => {
    initialState = { forms: { 1: { id: 1, name: 'todo', disabled: true } } };
    state = form(initialState, {
      type: CREATE,
      payload: { id: 2, name: 'anothertodo' },
    });
    const expected = {
      forms: {
        1: { id: 1, name: 'todo', disabled: true },
        2: { id: 2, name: 'anothertodo', disabled: true },
      },
    };
    expect(state).toEqual(expected);
  });

  it('should handle CREATE for a form that already exists', () => {
    initialState = { forms: { 1: { id: 1, name: 'todo', disabled: true } } };
    state = form(initialState, {
      type: CREATE,
      payload: { id: 1, name: 'todo' },
    });
    const expected = {
      forms: {
        1: { id: 1, name: 'todo', disabled: true },
      },
    };
    expect(state).toEqual(expected);
  });

  it('should handle DISABLE', () => {
    initialState = {
      forms: {
        1: { id: 1, name: 'todo', disabled: true },
        2: { id: 2, name: 'anothertodo', disabled: true },
      },
    };
    state = form(initialState, {
      type: DISABLE,
      payload: { id: 1, disabled: false },
    });
    const expected = {
      forms: {
        1: { id: 1, name: 'todo', disabled: false },
        2: { id: 2, name: 'anothertodo', disabled: true },
      },
    };
    expect(state).toEqual(expected);
  });
});
