import { useState, useEffect } from "react"
import { TodoType } from "../../types/TodoType";

export const useTodoList = () => {
    const [todoValues, setTodoValues] = useState<TodoType[]>([]);

  useEffect(() => {
    //happens on page load
    console.log("Hey I loaded up")

    fetch('http://localhost:8080/api/todoItems')
      .then((response) => response.json())
      .then((data: TodoType[]) => {console.log("Todo items list: ", data)
      setTodoValues(data);
      console.log(data);
      });
  }, []);

  useEffect(()=>{
console.log("TodoValues updated:", todoValues)
  },[todoValues])


  const createTodo = (todo: string) => {
    createTodoItem(todo);
  }

  const deleteTodo = (id: number) => {
    deleteTodoItem(id);
  }

  const editTodo = (id:number) => {
    setTodoValues(todoValues.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
  }

  const editTask = (task: string, id:number) => {
    setTodoValues(todoValues.map(todo => todo.id === id ? {...todo, task: task ,isEditing: !todo.isEditing}: todo))
  }

  const checkedChanged = (id: number) => {
    const updatedItem = todoValues.find(todo => todo.id === id);
    console.log("item: ", JSON.stringify(updatedItem))
    if(updatedItem) {
      updatedItem.isDone = !updatedItem.isDone;
      informAboutUpdate(updatedItem);
    } 
  }

  const informAboutUpdate = (updatedTodo: TodoType) => {
    fetch(`http://localhost:8080/api/todoItems/${updatedTodo.id}`, {
      method: 'PUT',
      headers: {
      "content-type": "application/json"
      },
      body: JSON.stringify(updatedTodo)
    })
    .then(response => response.json())
    .then(updatedTodo => {
      console.log("the todo item changed: ", updatedTodo);
      const previousTodoList: TodoType[] = todoValues;
      const previousValueIndex = previousTodoList.findIndex(todo => todo.id === updatedTodo.id);
      previousTodoList[previousValueIndex] = updatedTodo;
      setTodoValues(previousTodoList);
      console.log("the todo list heeeeello: ", todoValues);
    })
  }

  const deleteTodoItem = (id: number) => {
    fetch(`http://localhost:8080/api/todoItems/${id}`, {
      method: 'DELETE',
      headers: {
      "content-type": "application/json"
      },
  })
  .then(response => response.json())
  .then(updatedList => {
    console.log("the todo item was deleted: ", updatedList);
    setTodoValues(updatedList);
  })
  }

  const createTodoItem = (todo: string) => {
    fetch(`http://localhost:8080/api/todoItems/todoItem`, {
      method: 'POST',
      headers: {
      "content-type": "application/json"
      },
      body: JSON.stringify({id: null, task: todo, isDone: false, isEditing: false })
  })
  .then(response => response.json())
  .then(createdTodo => {
    console.log("the todo item was created: ", createdTodo);
    setTodoValues([...todoValues, createdTodo]);
  })
  }
  

  return {
    todoValues,
    createTodo,
    deleteTodo,
    editTodo,
    editTask,
    checkedChanged
  }
}