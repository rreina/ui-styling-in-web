import React from 'react';

interface IProps {
    children: JSX.Element | JSX.Element[];
}

export const Header: React.FunctionComponent<IProps> = ({ children }) => {
    return <header>{children}</header>;
};
