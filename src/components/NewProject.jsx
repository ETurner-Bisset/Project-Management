import { useRef } from 'react';

export const NewProject = ({ onSaveCancelClick, onUpdateProjects }) => {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const handleAddProject = () => {
    if (
      title.current.value !== '' &&
      description.current.value !== '' &&
      date.current.value !== ''
    ) {
      onUpdateProjects({
        title: title.current.value,
        description: description.current.value,
        date: date.current.value,
      });
      onSaveCancelClick();
    }
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={onSaveCancelClick}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={handleAddProject}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <label className="text-sm font-bold uppercase text-stone-500">
        Title
      </label>
      <input
        ref={title}
        required
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <label className="text-sm font-bold uppercase text-stone-500">
        Description
      </label>
      <textarea
        ref={description}
        required
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      ></textarea>
      <label className="text-sm font-bold uppercase text-stone-500">
        Due Date
      </label>
      <input
        ref={date}
        required
        type="date"
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    </div>
  );
};
