import React, { useState } from 'react';

import { ActionPanel } from '../../components/actionPanel';
import { Button } from '../../components/button';
import { IconType } from '../../components/button/iconType';
import { H4 } from '../../components/headings';
import { Input } from '../../components/input';
import { Article } from '../../components/layout/article';
import { Section } from '../../components/layout/section';
import { List } from '../../components/list';

export const TaskList: React.FunctionComponent = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

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
        return tasks.length > 0 ? <List items={tasks}></List> : <H4>There are no tasks.</H4>;
    };

    return (
        <>
            <Section>
                <ActionPanel>
                    <Button
                        iconType={IconType.Add}
                        className={inputValue ? '' : 'disabled'}
                        onClick={addTask}
                    />
                    <Input
                        value={inputValue}
                        onChange={handleChangeInputValue}
                        onKeyDown={handleKeyDown}
                    />
                </ActionPanel>
                <Article>{renderTasks()}</Article>
            </Section>
        </>
    );
};
