import makeStore from '../hooks/makeStore';
import { initialState, reducer } from './storeSettings';

export const { StoreProvider, useAppState, useAppDispatch } = makeStore(
  reducer,
  initialState
);
