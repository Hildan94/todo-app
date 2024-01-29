import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import Edit from "./Edit";
import { TodoListContext } from "./context/useTodoList";

const ToDoList = () => {

    const {todoValues, createTodo, deleteTodo, editTodo, editTask, checkedChanged} = useContext(TodoListContext);


    return (
        <div className="container bg-gray-700 mt-20 p-8
        rounded-md">
            <Form createTodo={createTodo} />
            {
                todoValues.map((todo, idx) => (
                    todo.isEditing ? (
                        <Edit editTask={editTask} todo={todo}/>
                    ) : (
                    <Todo todo={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} checkedChanged={checkedChanged}/>
                    )
                ))
            }
        </div>
    )
}

export default ToDoList;