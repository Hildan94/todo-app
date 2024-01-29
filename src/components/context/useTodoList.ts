import { createContext } from "react";

import { useTodoList } from "../hooks/useTodoListContext";

type ContextType = ReturnType<typeof useTodoList>;

export const TodoListContext = createContext<ContextType>({
    todoValues: [],
    createTodo: () => null,
    deleteTodo: () => null,
    editTodo: () => null,
    editTask: () => null,
    checkedChanged: () => null,
});