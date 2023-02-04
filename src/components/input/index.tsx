import React, {ReactElement} from 'react';
import {FieldValues, useController} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import {useCustomTheme} from '../../hooks';
import {InputProps} from './prop-types';
import {styles} from './styles';

const Input = <T extends FieldValues>({
  name,
  control,
  errors,
  placeholder,
  secureTextEntry,
  style,
}: InputProps<T>): ReactElement => {
  const {colors} = useCustomTheme();
  const {field} = useController({name, control});
  const error = errors[name]?.message as string;

  return (
    <View style={style}>
      <TextInput
        autoCorrect={false}
        value={field.value}
        onBlur={field.onBlur}
        onChangeText={field.onChange}
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
      {Boolean(error) && <Text style={{color: colors.notification}}>{error}</Text>}
    </View>
  );
};

export {Input};
