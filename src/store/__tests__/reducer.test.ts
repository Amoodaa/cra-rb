import { AnyAction, Reducer } from '@reduxjs/toolkit';

import { createReducer } from '../reducers';

describe('reducer', () => {
  it('should inject reducers', () => {
    const dummyReducer: Reducer = () => 'dummyResult';
    const reducer = createReducer({ test: dummyReducer } as never);
    const state = reducer({}, { type: 'dummy action' });
    expect(state.test).toBe('dummyResult');
  });

  it('should return identity reducers when empty', () => {
    const reducer = createReducer() as Reducer<unknown, AnyAction>;
    const state = { a: 1 };
    const newState = reducer(state, { type: 'AnyAction' });
    expect(newState).toBe(state);
  });
});
