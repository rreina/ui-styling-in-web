import React from 'react';

interface IProps {
    children: JSX.Element | JSX.Element[];
}

export const ActionPanel: React.FunctionComponent<IProps> = ({ children }) => {
    return <div className='action-panel'>{children}</div>;
};
