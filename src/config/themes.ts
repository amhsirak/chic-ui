export type themeType =
  | 'default'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'light';

export interface ThemeValues {
  regular: string; // bg color
  hover: string; // hover bg color
  color?: string; // font color
}

export type Theme = Record<themeType, ThemeValues>;

export const theme: Theme = {
  default: {
    regular: '#0018cf',
    hover: '#001be8',
    color: 'white',
  },
  secondary: {
    regular: '#000',
    hover: '#212121',
    color: 'white',
  },
  danger: {
    regular: '#d93848',
    hover: '#eb4d5d',
    color: 'white',
  },
  warning: {
    regular: '#de9b00',
    hover: '#eba607',
    color: 'white',
  },
  success: {
    regular: '#039e2f',
    hover: '#03a832',
    color: 'white',
  },
  light: {
    regular: '#faf7f7',
    hover: '#ebebeb',
    color: 'black',
  },
};
