import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {DEFAULT_LOGIN_VALUES} from '../../common/constants';
import {UserSignInDto, MainNavigationProps} from '../../common/types';
import {MainScreenName} from '../../common/enums';
import {getUser, signInUser} from '../../store/actions';
import {loginRules} from '../../validation/login-rules';
import {useAppDispatch, useCustomTheme} from '../../hooks';
import {Button, Input, ScreenWrapper} from '../../components';
import {styles} from './styles';

const Login: FC = () => {
  const {colors} = useCustomTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: DEFAULT_LOGIN_VALUES,
    resolver: joiResolver(loginRules),
  });

  const onSubmit = async (values: UserSignInDto) => {
    await dispatch(signInUser(values.email));
    const user = await dispatch(getUser());
    if (user) {
      navigation.navigate(MainScreenName.MAIN);
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={[styles.heading, {color: colors.text}]}>Authorization</Text>
        <Input
          name="email"
          control={control}
          errors={errors}
          placeholder="Email"
          style={styles.input}
        />
        <Input
          name="password"
          control={control}
          errors={errors}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <Button label="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScreenWrapper>
  );
};

export {Login};
