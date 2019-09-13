import { createDivWithClass, createLink, createLinkAndIcon } from './domHelper';

function websiteImage(imgLink) {
  const divWebsiteImg = createDivWithClass('website-image');

  const img = document.createElement('img');
  img.setAttribute('src', imgLink);

  divWebsiteImg.appendChild(img);
  return divWebsiteImg;
}

const classForLink = 'website-link';
function createWebsiteInfo(websiteLink, repoLink) {
  const divWebsiteInfo = createDivWithClass('website-info');
  const divCentered = createDivWithClass('centered');

  divCentered.appendChild(
    createLinkAndIcon(
      websiteLink,
      'Visit Website',
      classForLink,
      'fas fa-external-link-alt icon'
    )
  );

  divCentered.appendChild(
    createLinkAndIcon(
      repoLink,
      'View on Github',
      classForLink,
      'fab fa-github-alt icon'
    )
  );

  divWebsiteInfo.appendChild(divCentered);

  return divWebsiteInfo;
}

function websiteImgContainer(imgLink, websiteLink, repoLink) {
  const divImgContainer = createDivWithClass(
    'left image-container hoverable big-mobile'
  );

  divImgContainer.appendChild(websiteImage(imgLink));
  divImgContainer.appendChild(createWebsiteInfo(websiteLink, repoLink));
  return divImgContainer;
}

function rightSection(title, text, shortLink) {
  const divRight = createDivWithClass('right');

  const divInner = document.createElement('div');

  const h3 = document.createElement('h3');
  h3.classList.add('title');
  h3.innerText = title;

  const h4 = document.createElement('h4');
  h4.classList.add('url');
  h4.innerHTML = createLink(shortLink, shortLink).outerHTML;

  const paragraph = document.createElement('p');
  paragraph.classList.add('text');
  paragraph.innerText = text;

  divInner.appendChild(h3);
  divInner.appendChild(h4);
  divInner.appendChild(paragraph);

  divRight.appendChild(divInner);

  return divRight;
}

function createPorfolioProject(project) {
  const divProject = document.createElement('div');
  divProject.classList.add('project');

  divProject.appendChild(
    websiteImgContainer(project.img, project.link, project.repoLink)
  );
  divProject.appendChild(
    rightSection(project.name, project.description, project.shortLink)
  );

  return divProject;
}

export default createPorfolioProject;
