import React, { useState } from "react";
import TodoForm from "./components/todoForm";
import ItemList from "./components/itemList";
import Title from "./components/title";
import API from "./api";
import "../App/app.css";
function App() {
  const [tasks, setTasks] = useState(API.tasks.fetchAll());
  const handleClick = (items) => {
    setTasks(items);
    API.tasks.addTask(items[items.length - 1].name);
    console.log(API.tasks);
  };
  const handleDelete = (id) => {
    const filterTask = tasks.filter((task) => task.id !== id);
    setTasks(filterTask);
    API.tasks.deleteTask(id);
  };

  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      <Title />
      <TodoForm tasks={tasks} handleClick={handleClick} />
      <ItemList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
