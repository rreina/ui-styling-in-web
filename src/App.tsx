import './styles/app.scss';

import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Switch from 'react-switch';

import { Header } from './features/header';
import { TaskList } from './features/taskList';

export const App: React.FunctionComponent = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (isChecked: boolean) => {
        setChecked(isChecked);
    };

    return (
        <>
            <Header>
                <h1>My Tasks</h1>
                <div>
                    <Switch
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
        </>
    );
};
