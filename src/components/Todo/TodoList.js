import React, { Component } from 'react';
import './TodoList.css';

const TodoList = props => {
    return (
        <div className="todo-list">
            <ul>
                {
                    props.todos.map((task, idx) =>
                        {
                            return (
                                <li key={task.id} className={task.complete ? 'task-complete' : ''}>
                                    <span onClick={() => props.changeState(idx)} className={'change-state'}></span>
                                    <span onDoubleClick={() => props.canTitleEdit(idx)} className={'task-name'}>
                                        {task.editable
                                            ? <form onSubmit={event => props.changeTitle(event, idx)}><input name={"title"} type="text" defaultValue={task.name} /></form>
                                            : task.name}
                                    </span>
                                    <span onClick={() => props.removeTask(idx)} className={'remove-task'}></span>
                                </li>
                            );
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default TodoList;

