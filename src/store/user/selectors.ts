import {AppState} from '../../common/types';
import {DataStatus} from '../../common/enums';

const selectUser = (state: AppState): string | undefined => {
  return state.user.user;
};

const selectUserDataStatus = (state: AppState): DataStatus => {
  return state.user.dataStatus;
};

export {selectUser, selectUserDataStatus};
