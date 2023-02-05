import {createReducer} from '@reduxjs/toolkit';
import {ImageDto} from '../../common/types';
import {fetchImages} from './actions';
import {DataStatus} from '../../common/enums';

type InitialState = {
  images: ImageDto[];
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  images: [],
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchImages.fulfilled, (state, {payload}) => {
      state.dataStatus = DataStatus.FULFILLED;
      if (payload) {
        state.images = [...state.images, ...payload];
      }
    })
    .addCase(fetchImages.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    })
    .addCase(fetchImages.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
});

export {reducer};
