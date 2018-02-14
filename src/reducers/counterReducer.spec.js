import * as actionType from '../actions/ActionTypes';
import counterReducer from './counterReducer';

describe('counter reducer', () => {
  it('should exist', () => {
    expect(counterReducer).toBeDefined();
  });

  it('should ignore unknown actions', () => {
    const store = { };
    expect(counterReducer(store, { type: 'unknown' })).toBe(store);
  });

  it('should add counter on ADD_COUNTER action', () => {
    const store = 0;
    const action = { type: actionType.ADD_COUNTER, payload: 1 };
    const expected = 1;

    expect(counterReducer(store, action)).toEqual(expected);
  });

  it('should remove counter on REMOVE_COUNTER action', () => {
    const store = 5;
    const action = { type: actionType.REMOVE_COUNTER, payload: 1 };
    const expected = 4;

    expect(counterReducer(store, action)).toEqual(expected);
  });
});

