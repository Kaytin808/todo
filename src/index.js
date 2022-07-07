import "./style.css";
// import createList from "./inboxListCreate";
import createProjectContent from "./createProject";
import setupTabs from "./setuptabs"

// function setupTabs() {
//   document.querySelectorAll(".tabs_buttons").forEach((button) => {
//     button.addEventListener("click", () => {
//       const sideBar = button.parentElement;
//       const tabsContainer = document.querySelector(".middle-container");
//       const tabNumber = button.dataset.forTab;
//       const tabToActivate = tabsContainer.querySelector(
//         `.tabs_content[data-tab="${tabNumber}"]`
//       );

//       sideBar.querySelectorAll(".tabs_buttons").forEach((button) => {
//         button.classList.remove("tabs_buttons--active");
//       });

//       tabsContainer.querySelectorAll(".tabs_content").forEach((tab) => {
//         tab.classList.remove("tabs_content--active");
//       });

//       button.classList.add("tabs_button--active");
//       tabToActivate.classList.add("tabs_content--active");
//     });
//   });
// }
setupTabs();


var inboxListen = document.querySelector(".submit-inbox-button");
inboxListen.addEventListener("click", () => {
  // createList();
});
var cond = true;
console.log(cond)
const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  createProjectContent();
  setupTabs();
});

// function createProjectContent() {
//   var projectName = prompt("What is the name of your project?");
//   var newTab = document.createElement("button");
//   var title = document.createElement("h3");
//   var tabs_content = document.createElement("div");
//   var ul = document.createElement("ul");
//   var deleteProjectCross = document.createElement('div')
//   deleteProjectCross.classList.add('projectx')
//   deleteProjectCross.textContent = '✖'
//   ul.classList.add("ul-form");
//   tabs_content.classList.add("tabs_content");
//   tabs_content.dataset.tab = projectName;
//   newTab.classList.add("tabs_buttons");
//   newTab.dataset.forTab = projectName;
//   newTab.textContent = projectName;
//   title.textContent = projectName.toUpperCase();
//   title.classList.add("titleMiddleBar");
//   deleteProjectCross.dataset.tab = projectName;


//   // Delete project tab by data attribute //
//   deleteProjectCross.addEventListener('click', () => {
//   if (deleteProjectCross[`'data-tab ="${projectName}"`] == tabs_content[`'data-tab ="${projectName}`]) {
//     tabs_content.remove()
//     newTab.remove()
//   }
//   })

//   var formContainer = document.createElement("div");
//   formContainer.classList.add("form-container");
//   var ulList = document.createElement("ul");
//   ulList.classList.add("ul-list");
//   var descDiv = document.createElement("div");
//   var dateDiv = document.createElement("div");



//   var descInput = document.createElement("input");
//   descInput.setAttribute("name", "description");
//   descInput.id = "desc-form";
//   descInput.setAttribute("type", "text");
//   descInput.setAttribute("placeholder", "Description");

//   var dateInput = document.createElement("input");
//   dateInput.setAttribute("id", "date-form");
//   dateInput.setAttribute("type", "text");
//   dateInput.setAttribute("placeholder", "Date here~")
//   dateInput.setAttribute("onfocus", "this.type='date'")
//   dateInput.setAttribute("onblur", "this.type='text'")

//   var submitButton = document.createElement("button");
//   submitButton.setAttribute("type", "submit");
//   submitButton.setAttribute("value", "Submit");
//   submitButton.classList.add("formSubmitBtn");
//   submitButton.innerText = "+";
//   submitButton.addEventListener('click', () => {
    

//     if (`${descInput.value}` == "" && `${dateInput.value}` == "") {
//       alert("Can't be empty!")
//       return;
//     } else if (dateInput.value == "" && typeof descInput.value === "string") {
//       alert('Needs a date!')
//       return;
//     } else if (descInput.value == "" && typeof dateInput.value === "string") {
//       alert ('You need a description~!')
//       return;
//     }

//     var li = document.createElement("li");
//     var mkDate = document.createElement("p");
//     var div = document.createElement("div");
//     var x = document.createElement("div");
//     x.classList.add("delete-task");
//     div.classList.add("list-border");
  

//     x.textContent = "✖";
//     li.textContent = `${descInput.value} `;
//     mkDate.textContent = `${dateInput.value}`;
//     li.style.textAlign = "center";
//     div.addEventListener("click", () => {
//       div.style.textDecoration = "line-through";
//     });
//     x.addEventListener("click", () => {
//       div.remove();
//     });
  
//     ul.appendChild(div);
//     div.append(x);
//     div.appendChild(li);
//     li.appendChild(mkDate);
//  descInput.value = "";
//  dateInput.value = "";
//     console.log(descInput.value)
//   })
  

//   tabs_content.appendChild(title);
//   tabs_content.appendChild(formContainer);
//   tabs_content.appendChild(ul)
//   formContainer.appendChild(descDiv);
//   descDiv.appendChild(descInput);
//   formContainer.appendChild(dateDiv);
//   dateDiv.appendChild(dateInput);
//   formContainer.appendChild(submitButton);
//   subnav.appendChild(newTab);
//   newTab.appendChild(deleteProjectCross)
//   middleBar.appendChild(tabs_content);
//   setupTabs();
// }
