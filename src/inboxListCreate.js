export default function createList() {
  var titleInbox = document.getElementById("title-inbox");
  var descInbox = document.getElementById("desc-inbox");
  let todoInfo = {
    title: document.getElementById("title-inbox").value,
    description: document.getElementById("desc-inbox").value,
    date: document.getElementById("date-inbox").value,
  };

  document.getElementById("title-inbox").value = "";
  document.getElementById("desc-inbox").value = "";

  var h3 = document.createElement("h3");
  var li = document.createElement("li");
  var mkDate = document.createElement("p");
  var div = document.createElement("div");
  var x = document.createElement("div");
  var ul_inbox = document.querySelector(".ul-list-inbox");
  x.classList.add("delete-task");
  div.classList.add("list-border");

  h3.textContent = `${todoInfo.title}`;
  x.textContent = "✖";
  li.textContent = `${todoInfo.description} `;
  mkDate.textContent = `${todoInfo.date}`;
  li.style.textAlign = "center";
  h3.style.textAlign = "center";
  div.addEventListener("click", () => {
    div.style.textDecoration = "line-through";
  });
  x.addEventListener("click", () => {
    div.remove();
  });

  ul_inbox.appendChild(div);
  div.append(x);
  div.appendChild(h3);
  div.appendChild(li);
  li.appendChild(mkDate);
  document.getElementById("title-inbox").value = "";
  document.getElementById("desc-inbox").value = "";
  h3.textContent = `${todoInfo.title}`;
  if (`${todoInfo.title}` == "") {
    h3.remove();
  }

  // Retrieve existing todos from local storage or initialize an empty array
  let existingTodos = JSON.parse(localStorage.getItem('todos')) || [];

  // Add the new todoInfo to the existing array
  existingTodos.push(todoInfo);

  // Store the updated array back to local storage
  localStorage.setItem('todos', JSON.stringify(existingTodos));
}