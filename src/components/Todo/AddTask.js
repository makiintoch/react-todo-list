import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(event) {
        event.preventDefault();
        const inputValue = event.target.querySelector('input[name="task"]');
        const task = inputValue.value;
        const todos = this.props.todos;
        const id = todos.length + 1;

        todos.push({
            id: id,
            name: task,
            complete: false
        });

        console.log(todos);

        inputValue.value = '';

        // this.setState({
        //     todos: todos
        // });
    }

    render() {
        return (
            <div className="add-task">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input name="task" type="text"/>
                    <input type="submit" value="Add task" />
                </form>
            </div>
        );
    }
}

export default AddTask;