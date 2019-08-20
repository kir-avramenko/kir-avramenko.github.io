import attachWorkExpToCardContent from "./elementsCreator.js";
import XpSection from "./xpSection.js";
import JobGeneral from "./jobGeneral.js";

const msXp = `Did apprenticeship in ${createLink(
  "identity management team",
  "http://aka.ms/b2c"
)}. I was implementing full stack project that allows customers to setup RestApi endpoints on Azure Portal during sign up flow`;

const nasXp = `Worked on ${createLink(
  "Ukrainian transit visa registration",
  "https://visa.mfa.gov.ua"
)} government web app with 30k unique visitors per month`;

const gameXp = `Created 2 arcade/puzzle mobile games: ${createLink(
  "BunnyGolf",
  "https://visa.mfa.gov.ua"
)}  and ${createLink("BeeCell", "https://youtu.be/TnggONrg0c8")}`;

const xpSectionsArr = [
  new XpSection(
    new JobGeneral(
      "Software Design Engineer",
      "Microsoft via InConsulting",
      "Feb 2019 - June 2019"
    ),
    msXp,
    "imgs/ms_logo.png",
    ["Typescript", "Knockout JS", "C#", "Unit testing"],
    "imgs/azure_b2c.jpg" 
  ),

  new XpSection(
    new JobGeneral(
      "Software Engineer",
      "Institute of Software Systems NAS of Ukraine ",
      "July 2017 – Nov 2018"
    ),
    nasXp,
    "imgs/nas.jpg",
    ["HTML", "CSS", "JavaScript", "C#", "Unit testing", "Selenium"],
    "imgs/visasnippet.jpg"
  ),
  new XpSection(
    new JobGeneral("Game developer", "Superlemon Games", "Dec 2016 - Jan 2019"),
    gameXp,
    "imgs/superlemonlogo.png",
    ["Unity engine", "C#"],
    "imgs/superlemonsnippet.jpg"
  )
];

function createLink(text, url) {
  var link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("target", "_blank");
  link.innerHTML = text;
  console.log("link: " + link);
  return link.outerHTML;
}

attachWorkExpToCardContent(xpSectionsArr);
