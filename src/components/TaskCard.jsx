import { useContext } from 'react';
import { TaskContext } from '../context/TaskContent';


const TaskCard = ({task}) => {

   const { deleteTask } = useContext(TaskContext);

   return (
      <div className='bg-gray-800 text-white p-4 rounded-md'>
         <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
         <span className='text-gray-500 text-sm'>{task.des}</span>
         <button className='bg-red-500 p-2 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}> Delete task</button>
      </div>
   )
}

export default TaskCard