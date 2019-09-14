function addEventListenerForScroll(navElmntId, elmntToScrollTo) {
  document
    .getElementById(navElmntId)
    .addEventListener('click', function click() {
      elmntToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

function handleNavClick() {
  addEventListenerForScroll(
    'nav-portfolio',
    document.getElementsByClassName('section portfolio')[0]
  );

  addEventListenerForScroll(
    'nav-experience',
    document.getElementsByClassName('section experience')[0]
  );

  addEventListenerForScroll(
    'nav-contact',
    document.getElementsByClassName('foot')[0]
  );
}

export default handleNavClick;
