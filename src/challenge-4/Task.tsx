import React from "react";
import { TaskInterface } from "./TodoList";

// Va prendre les mêmes props que notre interface
interface TaskProps  {
  task: TaskInterface;
}

const Task = ({ task }:TaskProps) :JSX.Element => {
  return (
    <div>
      {task.taskName}
    </div>
  )
}

export default Task;