"use strict";

function clickEvent(event) {
  var targetElement = event.target || event.srcElement;

  if (targetElement == currSelectedLink) return;

  currSelectedLink.className = "";
  targetElement.className = "active";
  currSelectedLink = targetElement;
  console.log(targetElement);
}

let navLinks = document.querySelectorAll(".nav a");
let currSelectedLink;
navLinks.forEach(function(elem) {
  if (elem.className == "active") {
    currSelectedLink = elem;
  }
  elem.addEventListener("click", clickEvent);
});
