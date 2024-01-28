import { useEffect, useState } from 'react';
import './App.css';
import { TodoItem } from './types/todoItem';

function App() {

  const [todoItems, setTodoItems] = useState<TodoItem[]>();

  useEffect(() => {
    //happens on page load
    console.log("Hey I loaded up")

    if(!todoItems){
    fetch('http://localhost:8080/api/todoItems')
      .then((response) => response.json())
      .then((data: TodoItem[]) => {console.log("Todo items list: ", data)
        setTodoItems(data);
      });
    }
  }, [todoItems]);

  return (
    <div>
      {todoItems 
      ? todoItems.map((todoItem: any) => {
        return (
        <div key={todoItem.id}>
          <input type='checkbox' checked={todoItem.isDone} /> {" "}
          <span>{todoItem.task}</span>
        </div>
        )
      }) 
      : 'loading data ...'}
    </div>
  );
}

export default App;
