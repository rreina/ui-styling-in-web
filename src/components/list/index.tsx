import React from 'react';
import styled from 'styled-components';

import { Task } from '../task';
import { ITask } from './task.interface';

interface IProps {
    items: ITask[];
    className?: string;
}

const ListRaw: React.FunctionComponent<IProps> = ({ items, className }) => {
    return (
        <ul className={className}>
            {items.map((element: ITask, index: number) => {
                return <Task key={index} task={element} />;
            })}
        </ul>
    );
};

export const List = styled(ListRaw)`
    list-style: none;
    margin: 0;
    padding: 0;
`;
