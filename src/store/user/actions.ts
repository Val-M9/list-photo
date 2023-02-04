import {createAsyncThunk} from '@reduxjs/toolkit';
import {AsyncThunkConfig} from '../../common/types';
import {ActionType} from './action-type';

const signInUser = createAsyncThunk<void, string, AsyncThunkConfig>(
  ActionType.USER_SIGN_IN,
  async (payload, {extra}) => {
    const {storage} = extra;
    const result = await storage.setUser(payload);
    return result;
  },
);

const getUser = createAsyncThunk<string | undefined, undefined, AsyncThunkConfig>(
  ActionType.GET_USER,
  async (_, {extra}) => {
    const {storage} = extra;
    const result = await storage.getUser();
    return result;
  },
);

export {signInUser, getUser};
