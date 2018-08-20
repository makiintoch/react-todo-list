import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="todo">
                task list
            </div>
        );
    }
}

export default Todo;