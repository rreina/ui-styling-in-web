import React, { useState } from 'react';

import { ActionPanel } from '../../components/actionPanel';
import { Button } from '../../components/button';
import { IconType } from '../../components/button/iconType';
import { H4 } from '../../components/headings';
import { Input } from '../../components/input';
import { Article } from '../../components/layout/article';
import { Section } from '../../components/layout/section';
import { List } from '../../components/list';
import { ITask } from '../../components/list/task.interface';

export const TaskList: React.FunctionComponent = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const addTask = () => {
        if (inputValue) {
            setTasks([{ name: inputValue, isCompleted: false }, ...tasks]);
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
        return tasks.length > 0 ? (
            <List items={tasks} onCompleteTask={reorderTasks}></List>
        ) : (
            <H4>There are no tasks.</H4>
        );
    };

    const reorderTasks = () => {
        const tasksCopy = tasks.slice(0);
        tasksCopy.push(
            tasksCopy.splice(
                tasksCopy.findIndex(task => task.isCompleted),
                1
            )[0]
        );
        setTasks(tasksCopy);
    };

    return (
        <>
            <Section>
                <ActionPanel>
                    <Button
                        iconType={IconType.Add}
                        shouldDisable={inputValue ? false : true}
                        onClick={addTask}
                    />
                    <Input
                        value={inputValue}
                        onChange={handleChangeInputValue}
                        onKeyDown={handleKeyDown}
                        shouldFocus={true}
                    />
                </ActionPanel>
                <Article>{renderTasks()}</Article>
            </Section>
        </>
    );
};
