import React from 'react';

import { Task } from '.';

export default {
    title: 'UIKit/Task',
    component: Task
};

export const Default = () => <Task task={{ name: `I'm a task`, isCompleted: false }} key={1} />;

export const Completed = () => <Task task={{ name: `I'm a task`, isCompleted: true }} key={1} />;
