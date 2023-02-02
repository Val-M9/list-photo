import {DefaultTheme} from '@react-navigation/native';
import {ColorPalette} from '../colors';

const lightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: ColorPalette.white,
    text: ColorPalette.brown,
    accent: ColorPalette.accent,
    cardBackground: ColorPalette.lightBrown,
    btnBackground: ColorPalette.lightBlue,
  },
};

const darkTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: ColorPalette.brown,
    text: ColorPalette.white,
    accent: ColorPalette.accent,
    cardBackground: ColorPalette.lavenderGray,
    btnBackground: ColorPalette.lightBlue,
  },
};

export {lightTheme, darkTheme};
