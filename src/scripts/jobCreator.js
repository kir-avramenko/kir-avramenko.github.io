function createHeaderInfo(jobGeneral) {
  const headerInfo = document.createElement('div');
  headerInfo.setAttribute('class', 'header-info');

  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');
  const h5 = document.createElement('h5');

  h3.textContent = jobGeneral.jobTitle;
  h4.textContent = jobGeneral.companyName;
  h5.textContent = jobGeneral.dates;

  headerInfo.appendChild(h3);
  headerInfo.appendChild(h4);
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

function createJobDescription(description, skills) {
  const divDesc = document.createElement('div');
  divDesc.setAttribute('class', 'job-description');

  const para = document.createElement('p');
  para.setAttribute('class', 'text');
  para.innerText = description;

  divDesc.appendChild(para);

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
