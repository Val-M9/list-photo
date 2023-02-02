import {PressableProps} from 'react-native';

export type ButtonProps = Omit<PressableProps, 'style'> & {
  label: string;
};
