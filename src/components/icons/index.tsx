import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {AppIcon} from '../../common/types';

const HomeIcon: AppIcon = (props) => <FontAwesome5 name="home" {...props} />;

const UserIcon: AppIcon = (props) => <FontAwesome5 name="user" {...props} />;

export {HomeIcon, UserIcon};
