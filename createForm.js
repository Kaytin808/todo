export default function createForm(a) {
  var tabs = document.querySelector(a);
  var formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  var ulList = document.createElement("ul");
  ulList.classList.add("ul-list-inbox");

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

  tabs.appendChild(formContainer);
  formContainer.appendChild(titleDiv);
  titleDiv.appendChild(titleInput);
  formContainer.appendChild(descDiv);
  descDiv.appendChild(descInput);
  formContainer.appendChild(dateDiv);
  dateDiv.appendChild(dateInput);
  return tabs;
}
