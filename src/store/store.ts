import {configureStore} from '@reduxjs/toolkit';
import {apiCall, storage} from '../services';
import {rootReducer} from './root-reducer';

const extraArgument = {
  apiCall,
  storage,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      thunk: {extraArgument},
    });
    return defaultMiddleware;
  },
});

export {store, extraArgument};
