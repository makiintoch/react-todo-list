import React, { Component } from 'react';
import './Todo.css';
import TodoList from './TodoList';
import AddTask from './AddTask';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const inputValue = event.target.querySelector('input[name="task"]');
        const task = inputValue.value;
        const todos = this.state.todos;
        const id = todos.length + 1;

        todos.push({
            id: id,
            name: task,
            complete: false
        });

        inputValue.value = '';

        this.setState({
            todos: todos
        });
    }
    
    render() {
        return (
            <div className="todo">
                <TodoList removeTask={this.removeTask} {...this.state}/>
                <AddTask handleSubmit={this.handleSubmit} {...this.state}/>
            </div>
        );
    }
}

export default Todo;