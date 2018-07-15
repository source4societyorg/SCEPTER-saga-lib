import { defaultIfValidReducerKey, defaultMakeReducerSpecificSaga } from '../src/index';

describe('defaultIfValidReducerKey', () => {
  const mockValidReducerKey = 'validReducerKey';
  const mockInvalidReducerKey = 'invalidReducerKey';
  const mockAction = {
    reducerKey: mockValidReducerKey,
  };
  const mockCallback = jest.fn();
  it('should only execute code if the reducerKey provided matches the reducerKey in the action', () => {
    let generator = defaultIfValidReducerKey(mockValidReducerKey, mockAction, mockCallback);
    generator.next();
    expect(mockCallback.mock.calls.length).toEqual(1);
    generator = defaultIfValidReducerKey(mockInvalidReducerKey, mockAction, mockCallback);
    generator.next();
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});

describe('defaultMakeReducerSpecificSaga', () => {
  const mockReducerKey = 'mockReducerKey';
  const mockAction = {
    reducerKey: mockReducerKey,
  };

  const mockIfValidReducerKey = function* ifValidReducerKey(reducerKey, action, sequence) {
    expect(reducerKey).toEqual(mockReducerKey);
    expect(action).toEqual(mockAction);
    yield* sequence();
  };

  it('Should wrap a saga in the provided ifValidReducerKey function and return the new function', (done) => {
    const mockSequence = function* sequence() { yield done(); };
    const wrappedSaga = defaultMakeReducerSpecificSaga(mockReducerKey, mockSequence, mockIfValidReducerKey);
    const generator = wrappedSaga(mockAction);
    generator.next();
  });
});
