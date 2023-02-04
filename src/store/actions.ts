import {createAsyncThunk} from '@reduxjs/toolkit';
import {AsyncThunkConfig, Images} from '../common/types';
import {ActionType} from './action-type';

const fetchImages = createAsyncThunk<Images, undefined, AsyncThunkConfig>(
  ActionType.FETCH_IMAGES,
  async (_, {extra}) => {
    const {apiCall} = extra;
    const result = await apiCall.getImages();
    return result;
  },
);

export {fetchImages};
