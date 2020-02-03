import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { IconType } from './iconType';

interface IProps {
    iconType: IconType;
    onClick?: () => void;
    className?: string;
}

export const Button: React.FunctionComponent<IProps> = ({ iconType, onClick, className }) => {
    const renderIcon = (): JSX.Element | undefined => {
        switch (iconType) {
            case IconType.Add:
                return <IoMdAddCircle size='34px' onClick={onClick ? onClick : undefined} />;
            default:
                return undefined;
        }
    };

    return <button className={className}>{renderIcon()}</button>;
};
