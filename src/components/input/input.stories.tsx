import React from 'react';

import { Input } from '.';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UIKit/Input',
    component: Input
};

export const Default = () => <Input value={''} onChange={action('onChange')} />;

export const WithValue = () => <Input value={'Input text'} onChange={action('onChange')} />;

export const Focused = () => <Input value={''} onChange={action('onChange')} shouldFocus={true} />;
