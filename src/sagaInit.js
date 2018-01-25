import * as sagas from './common/sagas';

/** Add each redux saga to the saga middleware */
export const sagaInit = (sagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
