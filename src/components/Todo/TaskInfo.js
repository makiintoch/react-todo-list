import React from 'react';
import './TaskInfo.css';

const TaskInfo = props => {
    return (
        <div className={'task-info'}>
            <p>Всего задач: {props.todos.length}</p>
            <p>Выполненных задач: {props.todos.filter(item => item.complete === true).length}</p>
            <p>Невыполненных задач: {props.todos.filter(item => item.complete === false).length}</p>
        </div>
    );
}

export default TaskInfo;