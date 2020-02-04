import React from 'react';
import styled from 'styled-components';

interface IProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

const HeaderRaw: React.FunctionComponent<IProps> = ({ children, className }) => {
    return <header className={className}>{children}</header>;
};

export const headerHeight = 50;
const basePadding = '10%';
export const Header = styled(HeaderRaw)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: ${props => headerHeight - props.theme.spacingMultiplier * 4}px;
    background-color: ${props => props.theme.secondaryColor};
    padding: ${props => props.theme.spacingMultiplier * 2}px;

    padding-left: ${basePadding};
    padding-right: ${basePadding};
    width: calc(100% - ${basePadding} * 2);

    h1 {
        margin: 0;
    }
`;
