import React, { Component } from 'react';
import './Todo.css';
import TodoList from './TodoList';
import AddTask from './AddTask';

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    render() {
        console.log(this.state.todos);
        return (
            <div className="todo">
                <TodoList/>
                <AddTask {...this.state}/>
            </div>
        );
    }
}

export default Todo;