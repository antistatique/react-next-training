import React, { ChangeEvent } from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./styles.css";


/* PARTIE ITEM */
interface TaskProps  {
  task: TaskInterface;
  completeTask(taskToDelete: string):void; // On récupère la fonction qui est dans toDoList
}

const Item = ({ task, completeTask }:TaskProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
  <AnimatePresence>{isOpen &&
    <motion.li layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex justify-between">
      <p>{task.taskName}</p>
      <button onClick={() => { completeTask(task.taskName), toggleOpen} }>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.li>
    }</AnimatePresence>
  );
}

/* PARTIE LISTE */
interface TaskInterface {
  taskName: string
}

const List = (): JSX.Element => {
  // Va servir à récuperer la valeur de l'input
  const [task, setTask] = useState<string>('');
  // Va servir à récuperer toutes nos tâches (tableau de type string)
  const [toDoList, setToDoList] = useState<TaskInterface[]>([]);

  // Ajouter la value à notre state task
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  // Va ajouter au tableau une nouvelle tâche
  const addTask = () => {
    const newTask = { taskName: task }
    setToDoList([...toDoList, newTask]);
    //Clear l'input après avoir appuyer sur le bouton
    setTask('');
    console.log(toDoList)
  };

  // On va comparer avec les taches si elles sont à delete ou pas
  const completeTask = (taskToDelete:string) => {
    setToDoList(toDoList.filter( (task) => {
      return task.taskName != taskToDelete
    }));
  };
  
  return (
  <section>
    <div className="mb-16 flex justify-between">
      <input type="text" placeholder="write a task" value={task} onChange={handleChange}/>
      <button className="add" onClick={addTask}>Add task</button>
    </div>
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
      {toDoList.map((task, index) => {
        return <Item task={task} completeTask={completeTask} key={`task-${index}`} />
        })}
      </motion.ul>
    </AnimateSharedLayout>
  </section>
  );
}

export default List;