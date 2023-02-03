import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from '../../components';
import {ScreenWrapper} from '../../components/screen-wrapper';
import {useCustomTheme} from '../../hooks';
import {styles} from './styles';

const Login: FC = () => {
  const {colors} = useCustomTheme();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={[styles.heading, {color: colors.text}]}>Authorization</Text>
        <Input placeholder="Email" style={styles.input} />
        <Input placeholder="Password" secureTextEntry={true} style={styles.input} />
        <Button label="Login" />
      </View>
    </ScreenWrapper>
  );
};

export {Login};
