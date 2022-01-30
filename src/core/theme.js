import { DefaultTheme, configureFonts } from 'react-native-paper';

const ar =  {
  medium: {
    fontFamily: 'GE_SS_Two_Medium',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'GE_SS_Two_Light',
    fontWeight: 'normal',
  },
  thin: {
    fontFamily: 'sans-serif-thin',
    fontWeight: 'normal',
  },
  bold: {
    fontFamilyL: 'GE_SS_Two_Bold',
    fontWeight: 'bold',
  },
};
export const theme = {
  ...DefaultTheme,
  fonts:configureFonts(ar),

  colors: {
    ...DefaultTheme.colors,
    primary: '#419ED6',
    secondary: '#A1D284',
    error: '#f13a59',
    white: '#fff',
  },
};
