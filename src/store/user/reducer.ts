import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {DataStatus} from '../../common/enums';
import {getUser, signInUser} from './actions';

type InitialState = {
  user: string | undefined;
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  user: undefined,
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signInUser.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
    })
    .addCase(getUser.fulfilled, (state, {payload}) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.user = payload;
    })
    .addMatcher(isAnyOf(signInUser.pending, getUser.pending), (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
});

export {reducer};
