import React, {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {MainNavigation} from './tab-navigation';
import {MainScreenName, RootScreenName} from '../common/enums';
import {Login} from '../screens';

const NativeStack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Navigation: FC = () => {
  const user = true;
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
