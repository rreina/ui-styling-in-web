import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { H1 } from './components/headings';
import { Header } from './components/layout/header';
import { SwitchButton } from './components/switchButton';
import { TaskList } from './features/taskList';
import { GlobalStyle } from './styles/globalStyles';
import { DarkTheme, LightTheme } from './styles/theme';

export const App: React.FunctionComponent = () => {
    const [checked, setChecked] = useState(true);
    const [theme, setTheme] = useState<DefaultTheme>(LightTheme);

    const handleChange = (isChecked: boolean) => {
        isChecked ? setTheme(LightTheme) : setTheme(DarkTheme);
        setChecked(isChecked);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header>
                <H1>My Tasks</H1>
                <div>
                    <SwitchButton
                        onChange={handleChange}
                        checked={checked}
                        offColor={'#333'}
                        onColor={'#2b7a78'}
                        className={'switch-button'}
                        uncheckedIcon={<FiMoon size='19px' color='#FFF' />}
                        checkedIcon={<FiSun size='19px' color='#FFF' />}
                        activeBoxShadow='0 0 0 2px #2b7a78'
                    />
                </div>
            </Header>
            <TaskList />
        </ThemeProvider>
    );
};
