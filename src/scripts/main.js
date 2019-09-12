import createPortfolio from './createPorfolio';
import projsList from '../projsList.json';

const divProjects = document.getElementById('projects');

function createProjectsFromJson(projects) {
  for (let i = 0; i < projects.length; i += 1) {
    const divProject = createPortfolio(projects[i]);
    divProjects.appendChild(divProject);
  }
}

createProjectsFromJson(projsList.projects);
