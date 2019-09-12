import createPortfolio from './portfolioCreator';
import createJobItem from './jobCreator';
import projsList from '../projsList.json';
import jobs from '../jobs.json';

function createPortfolioFromJson(projects) {
  const divProjects = document.getElementById('portfolio-projects');

  for (let i = 0; i < projects.length; i += 1) {
    const divProject = createPortfolio(projects[i]);
    divProjects.appendChild(divProject);
  }
}

function createJobsFromJson(arrJobs) {
  const divJobs = document.getElementById('jobs');

  for (let i = 0; i < arrJobs.length; i += 1) {
    const divProject = createJobItem(arrJobs[i]);
    divJobs.appendChild(divProject);
  }
}

createPortfolioFromJson(projsList.projects);
createJobsFromJson(jobs.jobs);
