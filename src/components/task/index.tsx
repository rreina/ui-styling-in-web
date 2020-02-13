import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import styled from 'styled-components';

import { ITask } from '../list/task.interface';

interface IProps {
    task: ITask;
    key: number;
    className?: string;
}

const TaskRaw: React.FunctionComponent<IProps> = props => {
    const [task, setTask] = useState<ITask>(props.task);

    const completeTask = () => {
        if (!task.isCompleted) {
            const taskCopy = Object.assign({}, task);
            taskCopy.isCompleted = true;
            setTask(taskCopy);
        }
    };

    const renderContent = (): JSX.Element => {
        return (
            <>
                {task.name}
                {task.isCompleted && <FiCheck size='19px' />}
            </>
        );
    };

    return (
        <li key={props.key} className={props.className} onClick={completeTask}>
            {renderContent()}
        </li>
    );
};

export const Task = styled(TaskRaw)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1em;
    line-height: 1.4;
    border-bottom: 1px solid ${props => props.theme.disabledColor};
    padding: ${props => props.theme.spacingMultiplier}px;
    color: ${props => props.theme.textColor};

    svg {
        color: ${props => props.theme.successColor};
    }
`;
