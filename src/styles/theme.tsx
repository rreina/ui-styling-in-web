import { darken, lighten } from 'polished';
import { DefaultTheme } from 'styled-components';

const base = {
    disabledColor: 'rgba(0, 0, 0, 0.12)',
    spacingMultiplier: 10,
    headerHeight: '50px'
};

export const LightTheme: DefaultTheme = {
    ...base,
    primaryColor: '#2b7a78',
    secondaryColor: '#88cfcb',
    tertiaryColor: '#def2f1',
    textColor: '#333',
    secondaryTextColor: lighten(0.35, '#333'),
    successColor: '#50c878'
};

export const DarkTheme: DefaultTheme = {
    ...base,
    primaryColor: darken(0.35, '#2b7a78'),
    secondaryColor: darken(0.35, '#88cfcb'),
    tertiaryColor: darken(0.35, '#def2f1'),
    textColor: lighten(0.85, '#333'),
    secondaryTextColor: lighten(0.75, '#333'),
    successColor: lighten(0.35, '#50c878')
};
