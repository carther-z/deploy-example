import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContent';

const TaskForm = () => {

   const [title, setTitle] = useState("");
   const [des, setDes] = useState("");

   const { createTask } = useContext(TaskContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(title, des);

      createTask({
         title,
         des
      });
      setTitle("");
      setDes("");
   }

   return (
      <div className='max-w-md mx-auto'>
         <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
         <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
         <input type="text" className='bg-slate-300 p-3 w-full mb-2' placeholder='Write your task' onChange={(e) => setTitle(e.target.value)} value={title} autoFocus/>
         <textarea placeholder='Write your description' className='bg-slate-300 p-3 w-full mb-2' onChange={(e) => setDes(e.target.value)} value={des}></textarea>
         <button className='bg-indigo-500 px-10 py-1 text-white'>Save</button>
      </form>
      </div>
   )
}

export default TaskForm;