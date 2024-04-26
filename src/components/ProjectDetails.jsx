import { useState, useRef } from 'react';

// export const ProjectDetails = ({ project, onDeleteProject }) => {
//   const [tasks, setTasks] = useState([]);
//   const task = useRef();

//   const handleAddTask = (newTask) => {
//     setTasks((prevTasks) => {
//       return [...prevTasks, newTask];
//     });
//     task.current.value = '';
//   };

//   const handleDeleteTask = (task) => {
//     setTasks((prevTasks) => {
//       return [...prevTasks].filter((item) => item !== task);
//     });
//   };

//   return (
//     <div className="w-[35rem] mt-16">
//       <header className="pb-4 mb-4 border-b-2 border-stone-300">
//         <div className="flex items-center justify-between">
//           <h1 className="text-3xl font-bold text-stone-600 mb-2">
//             {project[0].title}
//           </h1>
//           <button
//             onClick={() => onDeleteProject(project[0].title)}
//             className="text-stone-700 hover:text-red-500"
//           >
//             Delete
//           </button>
//         </div>
//         <p className="mb-4 text-stone-400">
//           {new Date(project[0].date).toLocaleDateString('en-US', {
//             month: 'short',
//             day: 'numeric',
//             year: 'numeric',
//           })}
//         </p>
//         <p className="text-stone-600 whitespace-pre-wrap">
//           {project[0].description}
//         </p>
//       </header>
//       <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
//       <div className="flex items-center gap-4">
//         <input ref={task} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
//         <button
//           onClick={() => handleAddTask(task.current.value)}
//           className="text-stone-600 hover:text-stone-950"
//         >
//           Add Task
//         </button>
//       </div>

//       {tasks.length === 0 && (
//         <p className="text-stone-800 my-4">
//           This project does not have any tasks yet.
//         </p>
//       )}
//       {tasks.length >= 1 && (
//         <ul className="p-4 mt-8 rounded-md bg-stone-100">
//           {tasks.map((task) => (
//             <li key={task} className="flex justify-between my-4">
//               {task}
//               <button
//                 id={task}
//                 onClick={(event) => handleDeleteTask(event.target.id)}
//                 className="text-stone-700 hover:text-red-500"
//               >
//                 Clear
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// Solution
import { Tasks } from './Tasks';
export const ProjectDetails = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-700 hover:text-stone-900"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
};
