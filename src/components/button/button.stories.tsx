import { action } from '@storybook/addon-actions';
import React from 'react';

import { Button } from '.';
import { IconType } from './iconType';

export default {
    title: 'UIKit/Button',
    component: Button,
    parameters: {
        componentSubtitle: 'Primary button to use for main call to actions'
    }
};

export const Default = () => <Button iconType={IconType.Add} onClick={action('onClick')} />;

export const Disabled = () => (
    <Button iconType={IconType.Add} shouldDisable={true} onClick={action('onClick')} />
);
