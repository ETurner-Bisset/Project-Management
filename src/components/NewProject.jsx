import { useRef } from 'react';

// export const NewProject = ({ onSaveCancelClick, onUpdateProjects }) => {
//   const title = useRef();
//   const description = useRef();
//   const date = useRef();

//   const handleAddProject = () => {
//     if (
//       title.current.value !== '' &&
//       description.current.value !== '' &&
//       date.current.value !== ''
//     ) {
//       onUpdateProjects({
//         title: title.current.value,
//         description: description.current.value,
//         date: date.current.value,
//       });
//       onSaveCancelClick();
//     }
//   };

//   return (
//     <div className="w-[35rem] mt-16">
//       <menu className="flex items-center justify-end gap-4 my-4">
//         <button
//           onClick={onSaveCancelClick}
//           className="text-stone-800 hover:text-stone-950"
//         >
//           Cancel
//         </button>
//         <button
//           onClick={handleAddProject}
//           className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
//         >
//           Save
//         </button>
//       </menu>
//       <label className="text-sm font-bold uppercase text-stone-500">
//         Title
//       </label>
//       <input
//         ref={title}
//         required
//         className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
//       />
//       <label className="text-sm font-bold uppercase text-stone-500">
//         Description
//       </label>
//       <textarea
//         ref={description}
//         required
//         className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
//       ></textarea>
//       <label className="text-sm font-bold uppercase text-stone-500">
//         Due Date
//       </label>
//       <input
//         ref={date}
//         required
//         type="date"
//         className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
//       />
//     </div>
//   );
// };

// solution
import Input from './Input';
import Modal from './Modal';

export const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      // Show error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Opps ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" isTextArea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};
