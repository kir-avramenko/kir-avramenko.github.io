import {
  createDivWithClass,
  createLink,
  createElementWithClass
} from './domHelper';

function websiteImage(imgLink) {
  const divWebsiteImg = createDivWithClass('website-image');

  const img = document.createElement('img');
  img.setAttribute('src', imgLink);

  divWebsiteImg.appendChild(img);
  return divWebsiteImg;
}

function createDivWithLinkAndIcon(link, textOnLink, iconClasses) {
  const div = document.createElement('div');

  const anchor = document.createElement('a');
  anchor.classList.add('website-link');
  anchor.setAttribute('href', link);
  anchor.setAttribute('target', '_blank');

  const iIcon = document.createElement('i');
  iIcon.setAttribute('class', iconClasses);
  anchor.innerHTML = iIcon.outerHTML.concat(textOnLink);

  div.appendChild(anchor);
  return div;
}
function createWebsiteInfo(websiteLink, repoLink) {
  const divWebsiteInfo = createDivWithClass('website-info');
  const divCentered = createDivWithClass('centered');
  const divForWebSiteLink = document.createElement('div');

  divForWebSiteLink.appendChild(
    createDivWithLinkAndIcon(
      websiteLink,
      'Visit Website',
      'fas fa-external-link-alt icon'
    )
  );

  divForWebSiteLink.appendChild(
    createDivWithLinkAndIcon(
      repoLink,
      'View on Github',
      'fab fa-github-alt icon'
    )
  );

  divCentered.appendChild(divForWebSiteLink);
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

  const h3 = createElementWithClass('h3', 'title');
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
