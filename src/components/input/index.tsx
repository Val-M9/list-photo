import React, {FC} from 'react';
import {TextInput} from 'react-native';
import {useCustomTheme} from '../../hooks';
import {InputProps} from './prop-types';
import {styles} from './styles';

const Input: FC<InputProps> = ({placeholder, secureTextEntry}) => {
  const {colors} = useCustomTheme();

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={colors.textSecondary}
      style={[
        styles.input,
        {
          color: colors.text,
          backgroundColor: colors.backgroundSecondary,
          borderColor: colors.backgroundSecondary,
        },
      ]}
    />
  );
};

export {Input};
