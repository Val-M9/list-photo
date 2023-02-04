import {Images} from '../../common/types/images/image-dto';
import {AppState} from '../../common/types';
import {DataStatus} from '../../common/enums';

const selectImages = (state: AppState): Images => {
  return state.images.images;
};

const selectImagesDataStatus = (state: AppState): DataStatus => {
  return state.images.dataStatus;
};

export {selectImages, selectImagesDataStatus};
