import createPortfolio from './portfolioCreator';
import createJobItem from './jobCreator';
import { createLinkAndIcon } from './domHelper';
import handleNavClick from './navigationCtrl';
import projsList from '../projsList.json';
import jobs from '../jobs.json';
import footerData from '../footerData.json';

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

function createFooterItems(arrData) {
  const footerLinks = document.getElementById('footer-links');

  for (let i = 0; i < arrData.length; i += 1) {
    const iData = arrData[i];
    const anchor = createLinkAndIcon(
      iData.link,
      iData.name,
      '',
      iData.iconClass.concat(' icon')
    );

    const paragraph = document.createElement('p');
    paragraph.innerHTML = anchor.outerHTML;

    footerLinks.appendChild(paragraph);
  }
}

createPortfolioFromJson(projsList.projects);
createJobsFromJson(jobs.jobs);
createFooterItems(footerData.data);
handleNavClick();
