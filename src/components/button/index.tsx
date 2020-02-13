import { lighten } from 'polished';
import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import styled from 'styled-components';

import { IconType } from './iconType';

interface IProps {
    iconType: IconType;
    onClick?: () => void;
    shouldDisable?: boolean;
    className?: string;
}

const ButtonRaw: React.FunctionComponent<IProps> = ({
    iconType,
    onClick,
    shouldDisable,
    className
}) => {
    const renderIcon = (): JSX.Element | undefined => {
        switch (iconType) {
            case IconType.Add:
                return (
                    <IoMdAddCircle
                        size='34px'
                        onClick={!shouldDisable && onClick ? onClick : undefined}
                    />
                );
            default:
                return undefined;
        }
    };

    return (
        <button className={className + (shouldDisable ? ' disabled' : '')}>{renderIcon()}</button>
    );
};

export const Button = styled(ButtonRaw)`
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.tertiaryColor};
    color: ${props => props.theme.tertiaryColor};
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));

    &.disabled {
        color: ${props => props.theme.disabledColor};
        color: ${props => props.theme.disabledColor};
    }

    &:hover:not(.disabled) {
        cursor: pointer;
        color: ${props => lighten(0.1, props.theme.tertiaryColor)};
        color: ${props => lighten(0.1, props.theme.tertiaryColor)};
    }
`;
