import React from 'react';

interface IProps {
    items: string[];
}

export const List: React.FunctionComponent<IProps> = ({ items }) => {
    return (
        <div className='list'>
            <ul>
                {items.map((element: string, index: number) => {
                    return <li key={index}>{element}</li>;
                })}
            </ul>
        </div>
    );
};
