import React, { Component } from 'react';
import './AddTask.css';

const AddTask = props => {
    return (
        <div className="add-task">
            <form onSubmit={event => props.handleSubmit(event)}>
                <input name="task" type="text"/>
                <input type="submit" value="Add task" />
            </form>
        </div>
    );
}

export default AddTask;