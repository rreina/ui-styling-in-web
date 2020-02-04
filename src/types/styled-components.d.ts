import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        disabledColor: string;
        spacingMultiplier: number;
        headerHeight: string;
        primaryColor: string;
        secondaryColor: string;
        tertiaryColor: string;
        textColor: string;
        secondaryTextColor: string;
    }
}
