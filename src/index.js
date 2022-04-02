import './style.css'
import addList from './addList'



var main = document.getElementById('main')
var header = document.createElement('div')
var headerTitle = document.createElement('h1')
var sideBar = document.createElement('div')
var middleBar = document.createElement('div')
var container = document.createElement('div')
var taskContainer = document.createElement('div')
var addTaskP = document.createElement('span')
var inbox = document.createElement('div')
var inboxP = document.createElement('p')
var today = document.createElement('div')
var todayP = document.createElement('p')
var project = document.createElement('div')
var projectP = document.createElement('p')
var addTask = document.createElement('div')
var spanAdd = document.createElement('div')
var listContainer = document.createElement('div')
var ul = document.createElement('ul')
var taskX = document.querySelector('.delete-task1')

// class-add //
ul.classList.add('ul-list')
spanAdd.classList.add('add')
addTask.classList.add('add-task')
listContainer.classList.add('list-container')
taskContainer.classList.add('task-container')
inbox.classList.add('inbox')
today.classList.add('today')
project.classList.add('project')
container.classList.add('container')
middleBar.classList.add('middle-container')
sideBar.classList.add('sideBar-container')
header.classList.add('header')

// text-content //
headerTitle.textContent = 'To-Do List ✅'
inboxP.textContent = 'Inbox'
todayP.textContent = 'Today'
projectP.textContent = 'Projects'
spanAdd.textContent = '+'
addTaskP.textContent = 'Add Task'

// event Listeners //
addTask.addEventListener('click', ()=> {
    var form = document.getElementById('myForm') 
    form.style.display = 'flex'
})
taskX.addEventListener('click' , () => {
    var form = document.getElementById('myForm')
    form.style.display = 'none'
})

// Submit button form //
var button = document.querySelector('.submit-btn')
button.addEventListener('click', ()=>{
    addList();
})

project.addEventListener('click', () => {
listContainer.style.display = 'none'
})

main.append(header)
main.append(container)
listContainer.appendChild(ul)
container.append(sideBar)
sideBar.appendChild(inbox)
inbox.appendChild(inboxP)
sideBar.appendChild(today)
today.appendChild(todayP)
sideBar.appendChild(project)
project.appendChild(projectP)
container.append(middleBar)
middleBar.appendChild(taskContainer)
middleBar.append(listContainer)
taskContainer.appendChild(addTask)
addTask.appendChild(spanAdd)
spanAdd.appendChild(addTaskP)
header.appendChild(headerTitle)