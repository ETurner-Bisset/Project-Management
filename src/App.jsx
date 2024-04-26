import { useState, useRef } from 'react';

import { ProjectsSidebar } from './components/ProjectsSidebar';
import { DefaultContent } from './components/DefaultContent';
import { NewProject } from './components/NewProject';
import { ProjectDetails } from './components/ProjectDetails';
// import image from './assets/no-projects.png';

const PROJECTS = [
  {
    title: 'test1',
    description: 'odjdmrhfy',
    date: '03/27/98',
  },
  {
    title: 'test2',
    description: 'odjdmrhfy',
    date: '03/27/98',
  },
  {
    title: 'test3',
    description: 'odjdmrhfy',
    date: '03/27/98',
  },
];

// function App() {
//   const [addBtnClicked, setAddBtnClicked] = useState(false);
//   const [projectBtnClicked, setProjectBtnClicked] = useState(false);
//   const [projects, setProjects] = useState(PROJECTS);
//   const [project, setProject] = useState();

//   const handleAddBtnClick = () => {
//     setAddBtnClicked(true);
//   };

//   const handleSaveCancelClick = () => {
//     setAddBtnClicked(false);
//   };

//   const handleUpdateProjects = (newProject) => {
//     setProjects((prevProjects) => {
//       return [...prevProjects, newProject];
//     });
//   };

//   const handleProjectBtnClick = () => {
//     setProjectBtnClicked(true);
//   };

//   const handleGetProject = (projectObj) => {
//     setProject(
//       projects.filter((item) => {
//         if (item === projectObj) {
//           return item;
//         }
//       })
//     );
//   };

//   const handleDeleteProject = (projectTitle) => {
//     setProjectBtnClicked(false);
//     setProjects((prevProjects) => {
//       return [...prevProjects].filter((item) => item.title !== projectTitle);
//     });
//   };

//   return (
//     <main className="h-screen my-8 flex gap-8">
//       <ProjectsSidebar
//         onAddBtnClick={handleAddBtnClick}
//         projects={projects}
//         onProjectBtnClick={handleProjectBtnClick}
//         onGetProject={handleGetProject}
//       />
//       {!addBtnClicked && !projectBtnClicked && (
//         <DefaultContent image={image} onAddBtnClick={handleAddBtnClick} />
//       )}
//       {addBtnClicked && (
//         <NewProject
//           onSaveCancelClick={handleSaveCancelClick}
//           onUpdateProjects={handleUpdateProjects}
//         />
//       )}
//       {projectBtnClicked && (
//         <ProjectDetails
//           project={project}
//           onDeleteProject={handleDeleteProject}
//         />
//       )}
//     </main>
//   );
// }

// Solution
const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <ProjectDetails
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <DefaultContent onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
};

export default App;
