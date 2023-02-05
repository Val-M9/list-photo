import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useCustomTheme} from '../../hooks';
import {ButtonProps} from './prop-types';
import {styles} from './styles';

const Button: FC<ButtonProps> = ({label, onPress, disabled}) => {
  const {colors} = useCustomTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, {backgroundColor: disabled ? colors.btnDisabled : colors.btnBackground}]}>
      <Text style={[styles.btnText, {color: colors.white}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export {Button};
