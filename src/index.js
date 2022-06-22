// import createInboxContent from './inboxContent'
import "./style.css";
import createList from "./inboxListCreate";
// import createForm from "../createForm";
var main = document.getElementById("main");
const subnav = document.querySelector(".subnav");
const middleBar = document.querySelector(".middle-container");

function setupTabs() {
  document.querySelectorAll(".tabs_buttons").forEach((button) => {
    button.addEventListener("click", () => {
      const sideBar = button.parentElement;
      const tabsContainer = document.querySelector(".middle-container");
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(
        `.tabs_content[data-tab="${tabNumber}"]`
      );

      sideBar.querySelectorAll(".tabs_buttons").forEach((button) => {
        button.classList.remove("tabs_buttons--active");
      });

      tabsContainer.querySelectorAll(".tabs_content").forEach((tab) => {
        tab.classList.remove("tabs_content--active");
      });

      button.classList.add("tabs_button--active");
      tabToActivate.classList.add("tabs_content--active");
    });
  });
}
setupTabs();

var inboxListen = document.querySelector(".submit-inbox-button");
inboxListen.addEventListener("click", () => {
  createList();
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  createProjectContent();
});
function createProjectContent() {
  var projectName = prompt("What is the name of your project?");
  var newTab = document.createElement("button");
  var title = document.createElement("h3");
  var tabs_content = document.createElement("div");
  var ulTest = document.createElement("ul");
  ulTest.classList.add(".testMe");
  tabs_content.classList.add("tabs_content");
  tabs_content.dataset.tab = projectName;
  newTab.classList.add("tabs_buttons");
  newTab.dataset.forTab = projectName;
  newTab.textContent = projectName;
  title.textContent = projectName;
  title.classList.add("titleMiddleBar");

  var formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  var ulList = document.createElement("ul");
  ulList.classList.add("ul-list");
  var titleDiv = document.createElement("div");
  var descDiv = document.createElement("div");
  var dateDiv = document.createElement("div");

  var titleInput = document.createElement("input");
  titleInput.setAttribute("name", "title");
  titleInput.id = "title-inbox";
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Title here...");

  var descInput = document.createElement("input");
  descInput.setAttribute("name", "description");
  descInput.id = "desc-inbox";
  descInput.setAttribute("type", "text");
  descInput.setAttribute("placeholder", "description");

  var dateInput = document.createElement("input");
  dateInput.setAttribute("id", "date-inbox");
  dateInput.setAttribute("type", "date");

  var submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");
  submitButton.classList.add("formSubmitBtn");
  submitButton.innerText = "+";

  tabs_content.appendChild(title);
  tabs_content.appendChild(formContainer);
  formContainer.appendChild(titleDiv);
  titleDiv.appendChild(titleInput);
  formContainer.appendChild(descDiv);
  descDiv.appendChild(descInput);
  formContainer.appendChild(dateDiv);
  dateDiv.appendChild(dateInput);
  formContainer.appendChild(submitButton);
  subnav.appendChild(newTab);
  middleBar.appendChild(tabs_content);

  setupTabs();
}
