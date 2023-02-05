import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {DataStatus} from '../../common/enums';
import {UserData} from '../../common/types';
import {fetchUser, signInUser, logout, fetchUserInfo} from './actions';

type InitialState = {
  user: string | undefined;
  dataStatus: DataStatus;
  userInfo: UserData | undefined;
};

const initialState: InitialState = {
  user: undefined,
  dataStatus: DataStatus.IDLE,
  userInfo: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signInUser.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
    })
    .addCase(fetchUser.fulfilled, (state, {payload}) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.user = payload;
    })
    .addCase(logout.fulfilled, (state) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.user = undefined;
    })
    .addCase(fetchUserInfo.fulfilled, (state, {payload}) => {
      state.userInfo = payload?.data;
    })
    .addMatcher(isAnyOf(signInUser.pending, fetchUser.pending), (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
});

export {reducer};
