import React, {FC} from 'react';
import {Text} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import {TabOptions} from '../../common/types';
import {MainScreenName} from '../../common/enums';
import {useCustomTheme} from '../../hooks';
import {Feeds, Profile} from '../../screens';
import {HomeIcon, UserIcon} from '../../components/icons';
import {ColorPalette} from '../../styles';
import {styles} from './styles';

const Tabs = createMaterialTopTabNavigator();

const getTabOptions = ({label, Icon}: TabOptions): MaterialTopTabNavigationOptions => ({
  tabBarIcon: ({focused, color}) =>
    Icon({size: 18, solid: true, color: focused ? ColorPalette.accent : color}),
  tabBarLabel: ({color}) => <Text style={[styles.text, {color: color}]}>{label}</Text>,
});

const MainNavigation: FC = () => {
  const {colors} = useCustomTheme();

  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarItemStyle: {flexDirection: 'row'},
    tabBarStyle: {
      backgroundColor: colors.backgroundSecondary,
    },
    tabBarActiveTintColor: colors.accent,
    tabBarInactiveTintColor: colors.text,
    tabBarIndicatorStyle: {
      backgroundColor: colors.accent,
    },
  };

  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name={MainScreenName.HOME}
        component={Feeds}
        options={getTabOptions({
          label: MainScreenName.HOME,
          Icon: HomeIcon,
        })}
      />
      <Tabs.Screen
        name={MainScreenName.PROFILE}
        component={Profile}
        options={getTabOptions({
          label: MainScreenName.PROFILE,
          Icon: UserIcon,
        })}
      />
    </Tabs.Navigator>
  );
};

export {MainNavigation};
