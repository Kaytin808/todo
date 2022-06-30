// import createInboxContent from './inboxContent'
import "./style.css";
// import createList from "./inboxListCreate";
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
  // createList();
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
  var ul = document.createElement("ul");
  var deleteProjectCross = document.createElement('div')

  deleteProjectCross.textContent = '✖'
  deleteProjectCross.style.float = 'right';
  deleteProjectCross.style.marginRight = '4px'
  ul.classList.add("ul-form");
  tabs_content.classList.add("tabs_content");
  tabs_content.dataset.tab = projectName;
  newTab.classList.add("tabs_buttons");
  newTab.dataset.forTab = projectName;
  newTab.textContent = projectName;
  title.textContent = projectName.toUpperCase();
  title.classList.add("titleMiddleBar");
  deleteProjectCross.dataset.tab = projectName;
  
  // Delete project tab by data attribute //
  deleteProjectCross.addEventListener('click', () => {
  if (deleteProjectCross[`'data-tab ="${projectName}"`] == tabs_content[`'data-tab ="${projectName}`]) {
    tabs_content.remove()
    newTab.remove()
  }
  })

  var formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  var ulList = document.createElement("ul");
  ulList.classList.add("ul-list");
  // var titleDiv = document.createElement("div");
  var descDiv = document.createElement("div");
  var dateDiv = document.createElement("div");

  // var titleInput = document.createElement("input");
  // titleInput.setAttribute("name", "title");
  // titleInput.id = "title-form";
  // titleInput.setAttribute("type", "text");
  // titleInput.setAttribute("placeholder", "Title here...");

  var descInput = document.createElement("input");
  descInput.setAttribute("name", "description");
  descInput.id = "desc-form";
  descInput.setAttribute("type", "text");
  descInput.setAttribute("placeholder", "Description");

  var dateInput = document.createElement("input");
  dateInput.setAttribute("id", "date-form");
  dateInput.setAttribute("type", "text");
  dateInput.setAttribute("placeholder", "Date here~")
  dateInput.setAttribute("onfocus", "this.type='date'")
  dateInput.setAttribute("onblur", "this.type='text'")

  var submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");
  submitButton.classList.add("formSubmitBtn");
  submitButton.innerText = "+";
  submitButton.addEventListener('click', () => {
    
    // let todoInfo = {
    //   // title: document.getElementById("title-form").value,
    //   description: document.getElementById("desc-form").value,
    //   date: document.getElementById("date-form").value,
    // }
    if (`${descInput.value}` == "" && `${dateInput.value}` == "") {
      alert("Can't be empty!")
      return;
    } else if (dateInput.value == "" && typeof descInput.value === "string") {
      alert('Needs a date!')
      return;
    } else if (descInput.value == "" && typeof dateInput.value === "string") {
      alert ('You need a description~!')
      return;
    }
    // document.getElementById("title-inbox").val ue = "";
    // document.getElementById("desc-inbox").value = "";
  
    // var h3 = document.createElement("h3");
    var li = document.createElement("li");
    var mkDate = document.createElement("p");
    var div = document.createElement("div");
    var x = document.createElement("div");
    // var ul_inbox = document.querySelector(".ul-list-inbox");
    x.classList.add("delete-task");
    div.classList.add("list-border");
  
    // h3.textContent = todoInfo.title.toUpperCase();
    x.textContent = "✖";
    li.textContent = `${descInput.value} `;
    mkDate.textContent = `${dateInput.value}`;
    li.style.textAlign = "center";
    // li.style.padding = '5px'
    // h3.style.textAlign = "center";
    div.addEventListener("click", () => {
      div.style.textDecoration = "line-through";
    });
    x.addEventListener("click", () => {
      div.remove();
    });
  
    ul.appendChild(div);
    div.append(x);
    // div.appendChild(h3);
    div.appendChild(li);
    li.appendChild(mkDate);
    // document.getElementById("title-form").value = "";
 descInput.value = "";
 dateInput.value = "";
    // h3.textContent = `${todoInfo.title}`;
    console.log(descInput.value)
  })
  

  tabs_content.appendChild(title);
  tabs_content.appendChild(formContainer);
  tabs_content.appendChild(ul)
  // formContainer.appendChild(titleDiv);
  // titleDiv.appendChild(titleInput);
  formContainer.appendChild(descDiv);
  descDiv.appendChild(descInput);
  formContainer.appendChild(dateDiv);
  dateDiv.appendChild(dateInput);
  formContainer.appendChild(submitButton);
  subnav.appendChild(newTab);
  newTab.appendChild(deleteProjectCross)
  middleBar.appendChild(tabs_content);
  setupTabs();
}
