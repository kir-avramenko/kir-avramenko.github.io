function createLink(url, text) {
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('target', '_blank');
  link.innerHTML = text;
  return link;
}

function createElementWithClass(element, className) {
  const created = document.createElement(element);
  created.setAttribute('class', className);

  return created;
}

function createDivWithClass(className) {
  return createElementWithClass('div', className);
}

export { createLink, createDivWithClass, createElementWithClass };
