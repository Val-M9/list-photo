import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {Button, ScreenWrapper, UserCard} from '../../components';
import {useAppDispatch, useAppSelector, useCustomTheme} from '../../hooks';
import {selectUserInfo} from '../../store/selectors';
import {fetchUserInfo, logout} from '../../store/actions';
import {styles} from './styles';

const Profile: FC = () => {
  let {dark} = useCustomTheme();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUserInfo);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(logout('email'));
  };

  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <UserCard user={userInfo} />
        <View>
          <Button
            style={styles.btn}
            label="Toggle Theme"
            onPress={() => {
              return (dark = !dark);
            }}
          />
          <Button style={styles.btn} label="Logout" onPress={onLogout} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export {Profile};
