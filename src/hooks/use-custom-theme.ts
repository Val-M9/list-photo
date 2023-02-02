import {useTheme} from '@react-navigation/native';
import {darkTheme, lightTheme} from '../styles/theme';

const useCustomTheme = () => {
  const {dark} = useTheme();
  const darkColors = darkTheme.colors;
  const lightColors = lightTheme.colors;

  const colors = dark ? darkColors : lightColors;

  return {dark, colors};
};

export {useCustomTheme};
