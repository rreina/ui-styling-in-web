import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import { DarkTheme, LightTheme } from '../src/styles/theme';

export const themes = [
    {
        name: 'Light',
        ...LightTheme
    },
    {
        name: 'Dark',
        ...DarkTheme
    }
];
addDecorator(withThemesProvider(themes));

addParameters({
    backgrounds: [
        { name: 'Light', value: (LightTheme as any).secondaryColor, default: true },
        { name: 'Dark', value: (DarkTheme as any).secondaryColor }
    ],
    docs: {
        container: DocsContainer,
        page: DocsPage
    }
});
