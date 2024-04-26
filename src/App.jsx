import { useState, useRef } from 'react';

import { ProjectsSidebar } from './components/ProjectsSidebar';
import { DefaultContent } from './components/DefaultContent';
import { NewProject } from './components/NewProject';
import { ProjectDetails } from './components/ProjectDetails';
import image from './assets/no-projects.png';

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

function App() {
  const [addBtnClicked, setAddBtnClicked] = useState(false);
  const [projectBtnClicked, setProjectBtnClicked] = useState(false);
  const [projects, setProjects] = useState(PROJECTS);
  const [project, setProject] = useState();

  const handleAddBtnClick = () => {
    setAddBtnClicked(true);
  };

  const handleSaveCancelClick = () => {
    setAddBtnClicked(false);
  };

  const handleUpdateProjects = (newProject) => {
    setProjects((prevProjects) => {
      return [...prevProjects, newProject];
    });
  };

  const handleProjectBtnClick = () => {
    setProjectBtnClicked(true);
  };

  const handleGetProject = (projectObj) => {
    setProject(
      projects.filter((item) => {
        if (item === projectObj) {
          return item;
        }
      })
    );
  };

  const handleDeleteProject = (projectTitle) => {
    setProjectBtnClicked(false);
    setProjects((prevProjects) => {
      return [...prevProjects].filter((item) => item.title !== projectTitle);
    });
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onAddBtnClick={handleAddBtnClick}
        projects={projects}
        onProjectBtnClick={handleProjectBtnClick}
        onGetProject={handleGetProject}
      />
      {!addBtnClicked && !projectBtnClicked && (
        <DefaultContent image={image} onAddBtnClick={handleAddBtnClick} />
      )}
      {addBtnClicked && (
        <NewProject
          onSaveCancelClick={handleSaveCancelClick}
          onUpdateProjects={handleUpdateProjects}
        />
      )}
      {projectBtnClicked && (
        <ProjectDetails
          project={project}
          onDeleteProject={handleDeleteProject}
        />
      )}
    </main>
  );
}

export default App;
