import React, { useEffect, useRef, useState } from 'react';

import { ActionPanel } from '../../components/actionPanel';
import { Button } from '../../components/button';
import { List } from '../../components/list';
import { IconType } from '../../components/button/iconType';

export const TaskList: React.FunctionComponent = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        (inputRef.current as HTMLInputElement).focus();
    }, []);

    const addTask = () => {
        if (inputValue) {
            setTasks([...tasks, inputValue]);
        }
        setInputValue('');
    };

    const handleChangeInputValue = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    const renderTasks = (): JSX.Element => {
        return tasks.length > 0 ? <List items={tasks} /> : <h4>There are no tasks.</h4>;
    };

    return (
        <>
            <section>
                <ActionPanel>
                    <Button
                        iconType={IconType.Add}
                        className={inputValue ? '' : 'disabled'}
                        onClick={addTask}
                    />
                    <input
                        ref={inputRef}
                        type='text'
                        value={inputValue}
                        onChange={handleChangeInputValue}
                        onKeyDown={handleKeyDown}
                    />
                </ActionPanel>
                <article>{renderTasks()}</article>
            </section>
        </>
    );
};
