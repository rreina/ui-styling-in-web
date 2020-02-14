import React from 'react';
import { FiCheck } from 'react-icons/fi';
import styled from 'styled-components';

import { ITask } from '../list/task.interface';

interface IProps {
    task: ITask;
    className?: string;
    onCompleteTask?: () => void;
}

const TaskRaw: React.FunctionComponent<IProps> = ({ task, className, onCompleteTask }) => {
    const completeTask = () => {
        if (!task.isCompleted) {
            task.isCompleted = true;
            if (onCompleteTask) {
                onCompleteTask();
            }
        }
    };

    const renderContent = (): JSX.Element => {
        return (
            <>
                {task.name}
                {task.isCompleted && <FiCheck size='22px' />}
            </>
        );
    };

    const composeClassName = (): string => {
        let cssClass = className ? className : '';
        if (task.isCompleted) {
            cssClass += ' completed';
        }
        return cssClass;
    };
    return (
        <li className={composeClassName()} onClick={completeTask}>
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
    cursor: pointer;

    &.completed {
        cursor: default;
    }

    svg {
        color: ${props => props.theme.successColor};
    }
`;
