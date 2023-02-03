import {DefaultTheme} from '@react-navigation/native';
import {ColorPalette} from '../colors';

const lightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: ColorPalette.white,
    text: ColorPalette.brown,
    textSecondary: ColorPalette.lightBrown,
    accent: ColorPalette.accent,
    backgroundSecondary: ColorPalette.lavenderGray,
    btnBackground: ColorPalette.blue,
    btnDisabled: ColorPalette.lightBlue,
    white: ColorPalette.white,
  },
};

const darkTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: ColorPalette.brown,
    text: ColorPalette.white,
    textSecondary: ColorPalette.lavenderGray,
    accent: ColorPalette.accent,
    backgroundSecondary: ColorPalette.lightBrown,
    btnBackground: ColorPalette.blue,
    btnDisabled: ColorPalette.lightBlue,
    white: ColorPalette.white,
  },
};

export {lightTheme, darkTheme};
