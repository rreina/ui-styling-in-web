import React from 'react';
import styled from 'styled-components';

interface IProps {
    items: string[];
    className?: string;
}

const ListRaw: React.FunctionComponent<IProps> = ({ items, className }) => {
    return (
        <ul className={className}>
            {items.map((element: string, index: number) => {
                return <li key={index}>{element}</li>;
            })}
        </ul>
    );
};

export const List = styled(ListRaw)`
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        font-size: 1em;
        line-height: 1.4;
        border-bottom: 1px solid ${props => props.theme.disabledColor};
        padding: ${props => props.theme.spacingMultiplier}px;
        color: ${props => props.theme.textColor};
    }
`;
