import React from 'react'
import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContent';


const TaskList = () => {

  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className='text-white bg-blue-500 text-4xl text-center p-2 w-full'>No hay tareas</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-5 '>
      {tasks.map((task)=>
      <TaskCard key={task.id} task={task} />
      )}
    </div>
  )
}

export default TaskList;
