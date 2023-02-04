import {reducer as images} from './images/reducer';
import {reducer as user} from './user/reducer';

const rootReducer = {
  images,
  user,
};

export {rootReducer};
