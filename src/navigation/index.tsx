import React, {FC, useEffect} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {MainNavigation} from './tab-navigation';
import {MainScreenName, RootScreenName} from '../common/enums';
import {useAppDispatch, useAppSelector} from '../hooks';
import {selectUser} from '../store/selectors';
import {fetchUser} from '../store/actions';
import {Login} from '../screens';

const NativeStack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Navigation: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <NativeStack.Navigator screenOptions={screenOptions}>
      {!user ? (
        <NativeStack.Screen name={RootScreenName.LOGIN} component={Login} />
      ) : (
        <NativeStack.Screen name={MainScreenName.MAIN} component={MainNavigation} />
      )}
    </NativeStack.Navigator>
  );
};

export {Navigation};
