import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface IProps {
    value: string;
    onChange?: (event: React.SyntheticEvent<any>) => void;
    onKeyDown?: (event: React.SyntheticEvent<any>) => void;
    className?: string;
    shouldFocus?: boolean;
}

const InputRaw: React.FunctionComponent<IProps> = ({
    value,
    shouldFocus,
    onChange,
    onKeyDown,
    className
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputRef && shouldFocus) {
            (inputRef.current as HTMLInputElement).focus();
        }
    }, [inputRef, shouldFocus]);

    return (
        <input
            className={className}
            ref={inputRef}
            type='text'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

export const Input = styled(InputRaw)`
    border: none;
    background: none;
    font-size: 1em;
    color: ${props => props.theme.textColor};
    line-height: 1.4;
    outline: none;
    background-color: ${props => props.theme.tertiaryColor};
    border-radius: 25px;
    padding-left: ${props => props.theme.spacingMultiplier * 2}px;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
    width: 100%;

    &:active,
    &:focus {
        box-shadow: 0 0 0 2px ${props => props.theme.primaryColor};
    }
`;
