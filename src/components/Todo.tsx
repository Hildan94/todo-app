import React, { FC, useEffect, useState } from "react";
import {AiFillEdit} from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs';

interface TodoProps {
    todo: {task: string, id: number, isEditing: boolean, isDone: boolean},
        key:number,
        deleteTodo: (id: number) => void,
        editTodo: (id: number) => void,
        checkedChanged: (id: number) => void
}

const Todo: FC<TodoProps> = ({todo, deleteTodo, editTodo, checkedChanged}) => {
    const [checked, setChecked] = useState(todo.isDone)

    const handleChecked = () => {
        checkedChanged(todo.id);
        setChecked(todo.isDone);
    }

    return (
        <div className="flex justify-between items-center bg-gray-600 text-white
        py-3 px-4 rounded-md mb-1 cursor-pointer">
            <input className="font-primary" type="checkbox" checked={checked} onChange={handleChecked} />
            <p className="font-primary">{todo.task}</p>
            <div className="flex items-center gap-x-4">
                <AiFillEdit className="text-xl" onClick={() => editTodo(todo.id)}/>
                <BsFillTrashFill className="text-xl" onClick={() => deleteTodo(todo.id)}/>
            </div>
        </div>
    )
}

export default Todo;