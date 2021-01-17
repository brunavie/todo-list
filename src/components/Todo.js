import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function Todo({ todo, toggleComplete, deleteTodo }) {
    function handleChechboxClick() {
        toggleComplete(todo.id);
    }

    function handleDeleteClick() {
        deleteTodo(todo.id);
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox checked={todo.completed} onClick={handleChechboxClick} />
            <Typography variant="body1" style={{ textDecoration: todo.completed ? "line-through" : null }}>{todo.task}</Typography>
            <IconButton onClick={handleDeleteClick}><CloseIcon /></IconButton>
        </ListItem>
    );
}

export default Todo;