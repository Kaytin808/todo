import './style.css'
import addList from './addList'

var button = document.querySelector('.submit-btn')
button.addEventListener('click', ()=>{
    addList();
})

var main = document.getElementById('main')
var header = document.createElement('div')
var headerTitle = document.createElement('h1')
var sideBar = document.createElement('div')
var middleBar = document.createElement('div')
var container = document.createElement('div')
var inbox = document.createElement('div')
var inboxP = document.createElement('p')
var addTask = document.createElement('div')
var spanAdd = document.createElement('div')
var main = document.getElementById('main')
var listContainer = document.createElement('div')
listContainer.classList.add('list-container')
var ul = document.createElement('ul')
ul.classList.add('ul-list')
// var h3 = document.createElement('h3')
// var li = document.createElement('li')
// li.textContent = 'Work on a lesson'
// h3.textContent = 'The Odin Project'
spanAdd.classList.add('add')
spanAdd.textContent = '+'
var addTaskP = document.createElement('span')
addTaskP.textContent = 'Add Task'
addTask.classList.add('add-task')
var taskContainer = document.createElement('div')
taskContainer.classList.add('task-container')
inbox.classList.add('inbox')
container.classList.add('container')
middleBar.classList.add('middle-container')
sideBar.classList.add('sideBar-container')
header.classList.add('header')
headerTitle.textContent = 'To-Do List ✅'
inboxP.textContent = 'Inbox'

addTask.addEventListener('click', ()=> {
    var form = document.getElementById('myForm') 
    form.style.display = 'flex'
})

main.append(header)
main.append(container)
listContainer.appendChild(ul)
// ul.appendChild(h3)
// ul.appendChild(li)
container.append(sideBar)
sideBar.appendChild(inbox)
inbox.appendChild(inboxP)
container.append(middleBar)
middleBar.appendChild(taskContainer)
middleBar.append(listContainer)
taskContainer.appendChild(addTask)
addTask.appendChild(spanAdd)
spanAdd.appendChild(addTaskP)
header.appendChild(headerTitle)