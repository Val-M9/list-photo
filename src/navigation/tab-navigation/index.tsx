import React, {FC} from 'react';
import {Text} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import {TabOptions} from '../../common/types';
import {MainScreenName} from '../../common/enums';
import {Feeds, Profile} from '../../screens';
import {HomeIcon, UserIcon} from '../../components/icons';
import {styles} from './styles';

const Tabs = createMaterialTopTabNavigator();

const screenOptions: MaterialTopTabNavigationOptions = {
  tabBarItemStyle: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
};

const getTabOptions = ({label, tabBarIcon}: TabOptions): MaterialTopTabNavigationOptions => ({
  tabBarIcon,
  tabBarLabel: () => <Text style={styles.text}>{label}</Text>,
});

const MainNavigation: FC = () => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name={MainScreenName.HOME}
        component={Feeds}
        options={getTabOptions({
          label: MainScreenName.HOME,
          tabBarIcon: () => HomeIcon({size: 18, solid: true}),
        })}
      />
      <Tabs.Screen
        name={MainScreenName.PROFILE}
        component={Profile}
        options={getTabOptions({
          label: MainScreenName.PROFILE,
          tabBarIcon: () => UserIcon({size: 18, solid: true}),
        })}
      />
    </Tabs.Navigator>
  );
};

export {MainNavigation};
