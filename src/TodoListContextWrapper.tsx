import { FC } from "react";
import App from "./App";
import { useTodoList } from "./components/hooks/useTodoListContext";
import { TodoListContext } from "./components/context/useTodoList";

const TodoListContextWrapper: FC = () => {
    const todoList = useTodoList();

    return (
        <TodoListContext.Provider value={todoList}>
            <App />
        </TodoListContext.Provider>
    )
}

export default TodoListContextWrapper;