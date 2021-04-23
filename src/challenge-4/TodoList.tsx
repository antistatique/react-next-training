import React, { ChangeEvent, useContext, useEffect, useState } from "react";

interface TaskInterface {
  taskName: string
}

const ToDoList = () :JSX.Element => {

  // Va servir à récuperer la valeur de l'input
  const [task, setTask] = useState<string>('');
  // Va servir à récuperer toutes nos tâches (tableau de type string)
  const [toDoList, setToDoList] = useState<TaskInterface[]>([]);

  // Ajouter la value à notre state task
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }

  // Va ajouter au tableau une nouvelle tâche
  const addTask = () => {
    const newTask = { taskName: task }
    setToDoList([...toDoList, newTask])
    console.log(toDoList)
  }

  return (
    <div>
      <input type="text" placeholder="write a task" onChange={handleChange}/>
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default ToDoList;