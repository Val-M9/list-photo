import {Images} from './../common/types/images/image-dto';
import {createReducer} from '@reduxjs/toolkit';
import {fetchImages} from './actions';
import {DataStatus} from '../common/enums';

type InitialState = {
  images: Images;
  dataStatus: DataStatus;
};

const initialState: InitialState = {
  images: [],
  dataStatus: DataStatus.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchImages.fulfilled, (state, {payload}) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.images = [...state.images, ...payload];
  });
});

export {reducer};
