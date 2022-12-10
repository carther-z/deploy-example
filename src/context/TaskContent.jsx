import { createContext, useState, useEffect } from "react";
import { tasks as data } from '../data/Task';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {

   const [tasks, setTasks] = useState([]);

   const createTask = (task) => {
      setTasks([...tasks, {
         title: task.title,
         id: tasks.length,
         des: task.des
      }]);
   }

   const deleteTask = (taskId) => {
      // console.log(tasks);
      // console.log(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
   }

   useEffect(() => {
      setTasks(data)
   }, []);


   return (
      <TaskContext.Provider
         value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
         }}>
         {props.children}
      </TaskContext.Provider>
   )
}

