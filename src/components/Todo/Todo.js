import React, { Component } from 'react';
import './Todo.css';
import TodoList from './TodoList';
import AddTask from './AddTask';
import TaskInfo from './TaskInfo';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeState = this.changeState.bind(this);
        this.canTitleEdit = this.canTitleEdit.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
    }

    componentDidMount() {
        const todos = JSON.parse(localStorage.getItem('todos'));
        this.setState({todos: todos});
    }

    componentWillUpdate() {
        const todos = this.state.todos;
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    handleSubmit(event) {
        event.preventDefault();
        const inputValue = event.target.querySelector('input[name="task"]');
        const task = inputValue.value;
        const todos = this.state.todos;
        const id = Math.random().toString(36).substr(2, 9);

        todos.push({
            id: id,
            name: task,
            complete: false,
            editable: false
        });

        inputValue.value = '';

        this.setState({todos});
    }

    changeTitle(event, index) {
        event.preventDefault();
        const title = event.target.querySelector('input[name="title"]').value;
        const todos = this.state.todos;

        todos[index].name = title;
        todos[index].editable = false;

        this.setState({todos});
    }

    canTitleEdit(index) {
        const todos = this.state.todos;
        const editable = todos[index].editable;

        todos[index].editable = !editable;

        this.setState({todos});
    }

    changeState(index) {
        const todos = this.state.todos;
        const complete = todos[index].complete;

        todos[index].complete = !complete;

        this.setState({todos});
    }

    removeTask(index) {
        const todos = this.state.todos;

        todos.splice(index, 1);

        this.setState({todos});
    }

    render() {
        return (
            <div className="todo">
                <TodoList changeState={this.changeState} changeTitle={this.changeTitle} canTitleEdit={this.canTitleEdit} removeTask={this.removeTask} {...this.state}/>
                <AddTask handleSubmit={this.handleSubmit} {...this.state}/>
                <TaskInfo {...this.state} />
            </div>
        );
    }
}

export default Todo;