import { take, call, put } from 'redux-saga/effects';
import { fetchTodosSaga } from '../../src/sagas';
import { LOAD_REQUEST, setTodoItems } from '../../src/reducers/todoReducer';
import { getTodoItems } from '../../src/services/todoService';

describe('FetchtodosSaga specs', () => {
  const gen = fetchTodosSaga();
  let expected;
  let result;

  it('should wait for the load request to be initiated', () => {
    expected = take(LOAD_REQUEST);
    result = gen.next().value;
    expect(result).toEqual(expected);
  });

  it('should call the getTodoItems api call', () => {
    expected = call(getTodoItems);
    result = gen.next().value;
    expect(result).toEqual(expected);
  });

  it('should set the data returned from a response', () => {
    const response = { data: [{ id: 1, item: 'Write unit test', completed: false }] };
    expected = [{ id: 1, item: 'Write unit test', completed: false }];
    result = gen.next(response).value;
    expect(result).toEqual(expected);
  });

  it('should yield action SetTodoItems', () => {
    const todos = [{ id: 1, item: 'Write unit test', completed: false }];
    expected = put(setTodoItems(todos));
    result = gen.next({ todos }).value;
    expect(result).toEqual(expected);
  });
});
