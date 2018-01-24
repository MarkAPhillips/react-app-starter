/** Creates a action creator function that can be called in sagas */

export const actionCreator = (type, ...argNames) => {
 if(type==null) {
  throw Error('Action type required');
 }
 return function (...args) {
    let action = { type };
    argNames.forEach((arg, idx) => {
      action[argNames[idx]] = args[idx];
    });

    return action;
  };
}
