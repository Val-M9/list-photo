import {ImageDto} from './../../common/types';
import {AppState} from '../../common/types';
import {DataStatus} from '../../common/enums';

const selectImages = (state: AppState): ImageDto[] => {
  return state.images.images;
};

const selectImagesDataStatus = (state: AppState): DataStatus => {
  return state.images.dataStatus;
};

export {selectImages, selectImagesDataStatus};
