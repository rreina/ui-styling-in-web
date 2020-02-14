import React from 'react';
import styled from 'styled-components';

interface IProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

const ActionPanelRaw: React.FunctionComponent<IProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

const basePadding = '20%';
export const ActionPanel = styled(ActionPanelRaw)`
    display: flex;
    position: relative;
    padding: ${props => props.theme.spacingMultiplier * 2}px;
    height: 35px;
    background-color: ${props => props.theme.secondaryColor};
    border-bottom: 1px solid ${props => props.theme.disabledColor};

    padding-left: ${basePadding};
    padding-right: ${basePadding};
    width: calc(100% - ${basePadding} * 2);

    > *:not(:last-child) {
        margin-right: ${props => props.theme.spacingMultiplier}px;
    }
`;
