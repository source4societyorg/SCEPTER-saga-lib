import { valueOrDefault } from '@source4society/scepter-utility-lib';

export function* defaultIfValidReducerKey(reducerKey, action, callback) {
  if (action.reducerKey === reducerKey) {
    yield* callback(action);
  }
}


export const defaultMakeReducerSpecificSaga = (reducerKey, sequence, injectedIfValidReducerKey) => {
  const ifValidReducerKey = valueOrDefault(injectedIfValidReducerKey, defaultIfValidReducerKey);
  return function* reducerSpecificSaga(action) {
    yield* ifValidReducerKey(reducerKey, action, sequence);
  };
};
