import {TouchableOpacityProps} from 'react-native';

export type ButtonProps = Omit<TouchableOpacityProps, 'style'> & {
  label: string;
};
