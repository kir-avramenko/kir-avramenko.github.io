import attachWorkExpToCardContent from "./elementsCreator";
import XpSection from "./xpSection";
import JobGeneral from "./jobGeneral";

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
    "/ms_logo.72701fb7.png",
    ["Typescript", "Knockout JS", "C#", "Unit testing"],
    "/azure_b2c.0440c1f4.jpg"
  ),

  new XpSection(
    new JobGeneral(
      "Software Engineer",
      "Institute of Software Systems NAS of Ukraine ",
      "July 2017 – Nov 2018"
    ),
    nasXp,
    "/nas.ce32c4e4.jpg",
    ["HTML", "CSS", "JavaScript", "C#", "Unit testing", "Selenium"],
    "visasnippet.jpg"
  ),
  new XpSection(
    new JobGeneral("Game developer", "Superlemon Games", "Dec 2016 - Jan 2019"),
    gameXp,
    "/superlemonlog.0b9c7449.png",
    ["Unity engine", "C#"],
    "superlemonsnippet.jpg"
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
