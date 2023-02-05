import {AppState, UserData} from '../../common/types';
import {DataStatus} from '../../common/enums';

const selectUser = (state: AppState): string | undefined => {
  return state.user.user;
};

const selectUserDataStatus = (state: AppState): DataStatus => {
  return state.user.dataStatus;
};

const selectUserInfo = (state: AppState): UserData | undefined => {
  return state.user.userInfo;
};

export {selectUser, selectUserDataStatus, selectUserInfo};
