import { action } from '@storybook/addon-actions';
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { SwitchButton } from '.';

export default {
    title: 'UIKit/Switch Button',
    component: SwitchButton
};

export const Checked = () => (
    <SwitchButton
        onChange={action('onChange')}
        checked={true}
        offColor={'#333'}
        onColor={'#2b7a78'}
        className={'switch-button'}
        uncheckedIcon={<FiMoon size='19px' color='#FFF' />}
        checkedIcon={<FiSun size='19px' color='#FFF' />}
        activeBoxShadow='0 0 0 2px #2b7a78'
    />
);

export const Unchecked = () => (
    <SwitchButton
        onChange={action('onChange')}
        checked={false}
        offColor={'#333'}
        onColor={'#2b7a78'}
        className={'switch-button'}
        uncheckedIcon={<FiMoon size='19px' color='#FFF' />}
        checkedIcon={<FiSun size='19px' color='#FFF' />}
        activeBoxShadow='0 0 0 2px #2b7a78'
    />
);
