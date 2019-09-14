function createLink(url, text) {
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('target', '_blank');
  link.innerHTML = text;
  return link;
}

function createDivWithClass(className) {
  const created = document.createElement('div');
  created.setAttribute('class', className);

  return created;
}

function createLinkAndIcon(link, textOnLink, anchorClasses, iconClasses) {
  const anchor = document.createElement('a');
  anchor.setAttribute('class', anchorClasses);
  anchor.setAttribute('href', link);
  anchor.setAttribute('target', '_blank');

  const iIcon = document.createElement('i');
  iIcon.setAttribute('class', iconClasses);
  anchor.innerHTML = iIcon.outerHTML.concat(textOnLink);

  return anchor;
}

export { createLink, createDivWithClass, createLinkAndIcon };
