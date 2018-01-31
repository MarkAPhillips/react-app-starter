import * as sagas from './sagas';
/** TODO: work out how to test this code */
/** Add each redux saga to the saga middleware */
export const sagaInit = (sagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
