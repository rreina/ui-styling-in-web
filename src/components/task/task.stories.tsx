import { action } from '@storybook/addon-actions';
import React from 'react';

import { Task } from '.';

export default {
    title: 'UIKit/Task',
    component: Task
};

export const Default = () => (
    <Task
        task={{ name: `I'm a task`, isCompleted: false }}
        key={1}
        onCompleteTask={action('onCompleteTask')}
    />
);

export const Completed = () => (
    <Task
        task={{ name: `I'm a task`, isCompleted: true }}
        key={1}
        onCompleteTask={action('onCompleteTask')}
    />
);
