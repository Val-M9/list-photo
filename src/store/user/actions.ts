import {createAsyncThunk} from '@reduxjs/toolkit';
import {AsyncThunkConfig, UserInfoDto} from '../../common/types';
import {ActionType} from './action-type';

const signInUser = createAsyncThunk<void, string, AsyncThunkConfig>(
  ActionType.USER_SIGN_IN,
  async (payload, {extra}) => {
    const {storage} = extra;
    const result = await storage.setUser(payload);
    return result;
  },
);

const fetchUser = createAsyncThunk<string | undefined, undefined, AsyncThunkConfig>(
  ActionType.GET_USER,
  async (_, {extra}) => {
    const {storage} = extra;
    const result = await storage.getUser();
    return result;
  },
);

const fetchUserInfo = createAsyncThunk<UserInfoDto | undefined, undefined, AsyncThunkConfig>(
  ActionType.GET_USE_INFO,
  async (_, {extra}) => {
    const {apiCall} = extra;
    return await apiCall.getUserInfo();
  },
);
const logout = createAsyncThunk<void, string, AsyncThunkConfig>(
  ActionType.LOGOUT,
  async (payload, {extra}) => {
    const {storage} = extra;
    return await storage.logout(payload);
  },
);

export {signInUser, fetchUser, logout, fetchUserInfo};
