import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView, NativeSafeAreaViewProps} from 'react-native-safe-area-context';
import {useCustomTheme} from '../../hooks';
import {styles} from './styles';

const ScreenWrapper: FC<NativeSafeAreaViewProps> = ({children, ...restProps}) => {
  const {dark, colors} = useCustomTheme();

  return (
    <SafeAreaView style={styles.wrapper} {...restProps}>
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.backgroundSecondary}
      />
      {children}
    </SafeAreaView>
  );
};

export {ScreenWrapper};
