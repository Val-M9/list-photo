import {createAsyncThunk} from '@reduxjs/toolkit';
import {AsyncThunkConfig, ImageDto, QueryParams} from '../../common/types';
import {ActionType} from './action-type';

const fetchImages = createAsyncThunk<ImageDto[] | undefined, QueryParams, AsyncThunkConfig>(
  ActionType.FETCH_IMAGES,
  async (params, {extra}) => {
    const {apiCall} = extra;
    return apiCall.getImages(params);
  },
);

export {fetchImages};
