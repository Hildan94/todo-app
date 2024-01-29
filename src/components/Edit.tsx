import React, { FC, useState } from "react";
import { TodoType } from "../types/TodoType";

interface EditProps {
    editTask: (task: string, id: number) => void,
    todo: TodoType
}

const Edit: FC<EditProps> = ({editTask, todo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        editTask(value, todo.id);
        setValue('');
    }


    return (
        <form className="mb-2 font-primary w-full" onSubmit={handleSubmit}>
            <input type="text" 
            className="outline-none
            bg-transparent border border-gray-500 p-4
            w-[300px] text-white mb-8 rounded 
            placeholder:text-gray-300"
            onChange={(e) => setValue(e.target.value)} placeholder={todo.task}
            value={value}/>
            <button className="bg-gray-500 border-none p-4
            text-white cursor-pointer rounded ml-2" >
                Update Task
            </button>
        </form>
    )
}

export default Edit;