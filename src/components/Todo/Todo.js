import React, { Component } from 'react';
import './Todo.css';
import TodoList from './TodoList';
import AddTask from './AddTask';

class Todo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="todo">
                <TodoList/>
                <AddTask/>
            </div>
        );
    }
}

export default Todo;