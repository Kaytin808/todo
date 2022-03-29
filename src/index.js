
import './style.css'



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
    form.style.display = 'block'
})

main.append(header)
main.append(container)
container.append(sideBar)
sideBar.appendChild(inbox)
inbox.appendChild(inboxP)
container.append(middleBar)
middleBar.appendChild(taskContainer)
taskContainer.appendChild(addTask)
addTask.appendChild(spanAdd)
spanAdd.appendChild(addTaskP)
header.appendChild(headerTitle)