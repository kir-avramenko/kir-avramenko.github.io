"use strict";

function createXpSectionDiv(xpSection) {
  console.log("populate log");

  var xpSectionDiv = document.createElement("div");
  xpSectionDiv.setAttribute("class", "xp-section");

  xpSectionDiv.appendChild(
    createHeader(xpSection.jobGeneral, xpSection.srcPic)
  );
  xpSectionDiv.appendChild(
    createXpDescription(
      xpSection.jobDesc,
      xpSection.skills,
      xpSection.xpJobSrcPic
    )
  );

  return xpSectionDiv;
}

function createHeader(jobGeneral, srcPic) {
  var cardHeader = document.createElement("div");
  cardHeader.setAttribute("class", "card-header");

  cardHeader.appendChild(createHeaderLogo(srcPic));
  cardHeader.appendChild(createHeaderInfo(jobGeneral));

  return cardHeader;
}

function createHeaderLogo(srcPic) {
  var logo = document.createElement("img");
  logo.setAttribute("src", srcPic);
  logo.setAttribute("alt", "logo");

  return logo;
}

function createHeaderInfo(jobGeneral) {
  var headerInfo = document.createElement("div");
  headerInfo.setAttribute("class", "header-info");

  var h3 = document.createElement("h3");
  var h4 = document.createElement("h4");
  var h5 = document.createElement("h5");

  h3.textContent = jobGeneral.jobTitle;
  h4.textContent = jobGeneral.companyName;
  h5.textContent = jobGeneral.dates;

  headerInfo.appendChild(h3);
  headerInfo.appendChild(h4);
  headerInfo.appendChild(h5);

  return headerInfo;
}

function createXpDescription(jobDesc, skills, xpJobSrcPic) {
  var divXpDesc = document.createElement("div");
  divXpDesc.setAttribute("class", "xp-description");

  var p = document.createElement("p");
  p.innerHTML = jobDesc;

  divXpDesc.appendChild(p);
  divXpDesc.appendChild(CreateSkills(skills));
  divXpDesc.appendChild(CreateXpDescImg(xpJobSrcPic));
  return divXpDesc;
}

function CreateSkills(skills) {
  var divSkillTag = document.createElement("div");
  divSkillTag.setAttribute("class", "skill-tag");

  skills.forEach(element => {
    const spanSkill = document.createElement("span");
    spanSkill.textContent = element;
    divSkillTag.appendChild(spanSkill);
  });

  return divSkillTag;
}

function CreateXpDescImg(srcPic) {
  var img = document.createElement("img");
  img.setAttribute("src", srcPic);
  img.setAttribute("alt", "description image");

  return img;
}

export default function attachWorkExpToCardContent(xpSections) {
  const section = document
    .getElementById("two")
    .getElementsByClassName("card-content")[0];

  xpSections.forEach(xp => {
    const divXpSection = createXpSectionDiv(xp);
    section.appendChild(divXpSection);
  });
}
