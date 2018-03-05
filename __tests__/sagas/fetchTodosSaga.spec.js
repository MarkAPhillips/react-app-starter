import { takeEvery, call, put } from 'redux-saga/effects';
import { watchTodosSaga } from '../../src/sagas';
import { fetchTodosSaga } from '../../src/sagas/fetchTodosSaga';
import { LOAD_REQUEST, setTodos } from '../../src/reducers/todosReducer';
import { getTodoItems } from '../../src/services/todoService';

describe('FetchtodosSaga specs', () => {
  const watchGen = watchTodosSaga();
  const fetchGen = fetchTodosSaga();
  let expected;
  let result;

  it('should call fetchTodosSaga on LOAD_REQUEST ', () => {
    expected = takeEvery(LOAD_REQUEST, fetchTodosSaga);
    result = watchGen.next().value;
    expect(result).toEqual(expected);
  });

  it('should call the getTodoItems api call', () => {
    expected = call(getTodoItems);
    result = fetchGen.next().value;
    expect(result).toEqual(expected);
  });

  it('should set the data returned from a response', () => {
    const response = { data: [{ id: 1, item: 'Write unit test', completed: false }] };
    expected = [{ id: 1, item: 'Write unit test', completed: false }];
    result = fetchGen.next(response).value;
    expect(result).toEqual(expected);
  });

  it('should yield action setTodos', () => {
    const todos = [{ id: 1, item: 'Write unit test', completed: false }];
    expected = put(setTodos(todos));
    result = fetchGen.next(todos).value;
    expect(result).toEqual(expected);
  });
});
