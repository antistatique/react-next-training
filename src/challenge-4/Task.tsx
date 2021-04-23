import React from "react";
import { TaskInterface } from "./TodoList";

// Va prendre les mêmes props que notre interface
interface TaskProps  {
  task: TaskInterface;
  completeTask(taskToDelete: string):void; // On récupère la fonction qui est dans toDoList
}

const Task = ({ task, completeTask }:TaskProps) :JSX.Element => {
  return (
    <div>
      {task.taskName}
      <button onClick={()=>{ completeTask(task.taskName)}}>X</button>
    </div>
  )
}

export default Task;