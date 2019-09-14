import { createLink } from './domHelper';

function createHeaderInfo(jobGeneral) {
  const headerInfo = document.createElement('div');
  headerInfo.setAttribute('class', 'header-info');

  const h3 = document.createElement('h3');
  const h4CompanyName = document.createElement('h4');
  const h5 = document.createElement('h5');

  h3.textContent = jobGeneral.jobTitle;
  h4CompanyName.innerHTML = createLink(
    jobGeneral.companyWebSite,
    jobGeneral.companyName
  ).outerHTML;
  h5.textContent = jobGeneral.dates;

  headerInfo.appendChild(h3);
  headerInfo.appendChild(h4CompanyName);
  headerInfo.appendChild(h5);

  return headerInfo;
}

function createHeader(jobGeneral) {
  const divJobHeader = document.createElement('div');
  divJobHeader.setAttribute('class', 'job-header');

  const logo = document.createElement('img');
  logo.setAttribute('class', 'company-img');
  logo.setAttribute('src', jobGeneral.jobIcon);
  logo.setAttribute('alt', `icon of ${jobGeneral.companyName}`);

  divJobHeader.appendChild(logo);
  divJobHeader.appendChild(createHeaderInfo(jobGeneral));

  return divJobHeader;
}

function createDivSkillsTags(arrSkills) {
  const divSkillTag = document.createElement('div');
  divSkillTag.setAttribute('class', 'skill-tag');

  for (let i = 0; i < arrSkills.length; i += 1) {
    const spanSkill = document.createElement('span');
    spanSkill.textContent = arrSkills[i];
    divSkillTag.appendChild(spanSkill);
  }
  return divSkillTag;
}

function createJobDescription(description, skills) {
  const divDesc = document.createElement('div');
  divDesc.setAttribute('class', 'job-description');

  const para = document.createElement('p');
  para.setAttribute('class', 'text');
  para.innerHTML = description;

  divDesc.appendChild(para);

  divDesc.appendChild(createDivSkillsTags(skills));
  return divDesc;
}

function createJobItem(jobObj) {
  const { jobGeneral } = jobObj;

  const divProject = document.createElement('div');
  divProject.classList.add('project');

  divProject.appendChild(createHeader(jobGeneral));
  divProject.appendChild(createJobDescription(jobObj.jobDesc, jobObj.skills));

  return divProject;
}

export default createJobItem;
