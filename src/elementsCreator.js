"use strict";
function createXpSectionDiv() {
  console.log("populate log");

  var xpSectionDiv = document.createElement("div");
  xpSectionDiv.setAttribute("class", "xp-section");

  xpSectionDiv.appendChild(createHeader());
  xpSectionDiv.appendChild(createXpDescription());

  return xpSectionDiv;
}

function createHeader() {
  var cardHeader = document.createElement("div");
  cardHeader.setAttribute("class", "card-header");

  cardHeader.appendChild(createHeaderLogo());
  cardHeader.appendChild(createHeaderInfo());

  return cardHeader;
}

function createHeaderLogo() {
  var logo = document.createElement("img");
  logo.setAttribute("src", "/ms_logo.72701fb7.png");
  logo.setAttribute("alt", "logo");

  return logo;
}

function createHeaderInfo() {
  var headerInfo = document.createElement("div");
  headerInfo.setAttribute("class", "header-info");

  var h3 = document.createElement("h3");
  var h4 = document.createElement("h4");
  var h5 = document.createElement("h5");

  h3.textContent = "Some company";
  h4.textContent = "Some company";
  h5.textContent = "Some company";

  headerInfo.appendChild(h3);
  headerInfo.appendChild(h4);
  headerInfo.appendChild(h5);

  return headerInfo;
}

function createXpDescription() {
  var divXpDesc = document.createElement("div");
  divXpDesc.setAttribute("class", "xp-description");

  var p = document.createElement("p");
  p.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lacus id nunc varius congue sed quis nibh. Nullam condimentum magna eget risus mattis, sit amet imperdiet odio hendrerit. Aliquam luctus semper facilisis. Ut lobortis laoreet metus eget vulputate. Duis vel libero blandit, mollis erat vel, gravida elit. Nulla nec tellus eu sapien molestie rhoncus eu id erat. Proin vestibulum est purus, sit amet suscipit nulla dapibus et. Sed est erat, molestie sit amet vehicula quis, porta sed nisi. Aliquam nec ornare ante. Maecenas non quam sit amet ante hendrerit congue vel at odio. Mauris ornare dictum neque eget sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc in odio vulputate quam interdum ultrices. Vestibulum condimentum placerat consectetur.";

  divXpDesc.appendChild(p);
  divXpDesc.appendChild(
    CreateSkills([
      "Typescript",
      "KnockoutJs",
      "BMW",
      "Typescript",
      "KnockoutJs",
      "BMW",
      "Typescript",
      "KnockoutJs",
      "BMW"
    ])
  );
  divXpDesc.appendChild(CreateXpDescImg());
  return divXpDesc;
}

function CreateSkills(arrSkills) {
  var divSkillTag = document.createElement("div");
  divSkillTag.setAttribute("class", "skill-tag");

  arrSkills.forEach(element => {
    let spanSkill = document.createElement("span");
    spanSkill.textContent = element;
    divSkillTag.appendChild(spanSkill);
  });

  return divSkillTag;
}

function CreateXpDescImg() {
  var img = document.createElement("img");
  img.setAttribute("src", "/azure_b2c.0440c1f4.jpg");
  img.setAttribute("alt", "description image");

  return img;
}

export default function attachWorkExpToCardContent(workXP) {
  let section = document
    .getElementById("two")
    .getElementsByClassName("card-content")[0];

  const xpSectionDiv = createXpSectionDiv();
  section.appendChild(xpSectionDiv);
}
