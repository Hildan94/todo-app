import React, { FC, useState } from "react";

interface FormProps {
    createTodo: (option: string) => void
}

const Form: FC<FormProps> = ({createTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createTodo(value);
        setValue('');
    }


    return (
        <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
            <input type="text" 
            className="outline-none 
            bg-transparent border border-gray-500 p-4
            w-[300px] text-white mb-8 rounded 
            placeholder:text-gray-300"
            placeholder="~Write new task~" 
            onChange={(e) => setValue(e.target.value)}
            value={value}/>
            <button className="bg-gray-500 border-none p-4
            text-white cursor-pointer rounded ml-2" >
                Add task
            </button>
        </form>
    )
}

export default Form;