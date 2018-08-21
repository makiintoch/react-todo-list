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
                                    {task.name}
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

