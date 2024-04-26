export const ProjectsSidebar = ({
  onAddBtnClick,
  projects,
  onProjectBtnClick,
  onGetProject,
}) => {
  let listItems;
  if (projects.length !== 0) {
    listItems = projects.map((project) => {
      const getProject = () => {
        onProjectBtnClick();

        onGetProject(project);
      };

      return (
        <li
          key={project.title + project.date}
          className="flex justify-between my-4"
        >
          <button
            onClick={getProject}
            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
          >
            {project.title}
          </button>
        </li>
      );
    });
  }
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        onClick={onAddBtnClick}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      <ul className="mt-8">{listItems}</ul>
    </aside>
  );
};
