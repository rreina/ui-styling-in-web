import React from 'react';
import styled from 'styled-components';

import { Task } from '../task';
import { ITask } from './task.interface';

interface IProps {
    items: ITask[];
    className?: string;
    onCompleteTask?: () => void;
}

const ListRaw: React.FunctionComponent<IProps> = ({ items, className, onCompleteTask }) => {
    return (
        <ul className={className}>
            {items.map((element: ITask, index: number) => {
                return (
                    <Task
                        key={index}
                        task={element}
                        onCompleteTask={onCompleteTask ? onCompleteTask : undefined}
                    />
                );
            })}
        </ul>
    );
};

export const List = styled(ListRaw)`
    list-style: none;
    margin: 0;
    padding: 0;

    .list-item-enter {
        opacity: 0.01;

        &.list-item-enter-active {
            opacity: 1;
            transition: opacity 500ms ease-in;
        }
    }

    .list-item-leave {
        opacity: 1;

        &.list-item-leave-active {
            opacity: 0.01;
            transition: opacity 500ms ease-in;
        }
    }
`;
