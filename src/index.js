// import addList from './addList';
import './style.css'

var main = document.getElementById('main')
var header = document.createElement('div')
var headerTitle = document.createElement('h1')
var sideBar = document.createElement('div')
var middleBar = document.createElement('div')
var container = document.createElement('div')
var inbox = document.createElement('div')
var inboxP = document.createElement('p')
var today = document.createElement('div')
var todayP = document.createElement('p')
var project = document.createElement('div')
var projectP = document.createElement('p')
var listContainerInbox = document.createElement('div')
var listContainerProject = document.createElement('div')
var listContainerToday = document.createElement('div')




// class-add //


listContainerInbox.classList.add('hidden')
listContainerProject.classList.add('hidden')
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

function createInboxContent() {
    var ul_inbox = document.createElement('ul')
    var div = document.createElement('div')
    var input1 = document.createElement('input')
    var div1 = document.createElement('div')
    var div2 = document.createElement('div')
    var input2 = document.createElement('input')
    var submitB = document.createElement('button')
    var h3 = document.createElement('h3')
    var dateInput = document.createElement('input')
    var today = new Date();
    var dateNow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(); 
    dateInput.type = 'date'
    dateInput.id = 'date'
    dateInput.setAttribute('value', dateNow)
    // dateInput.setAttribute('min', today)
    // dateInput.setAttribute('max', '2023-04-16')
    h3.classList.add('inboxTitle')
    var divContainer = document.createElement('form')
    input1.setAttribute('name', 'title')
    input1.id = 'title-inbox'
    input1.setAttribute('type','text')
    input1.setAttribute('placeholder','Title here')
    input2.setAttribute('name', 'desc')
    input2.setAttribute('type','text')
    input2.setAttribute('placeholder','Desc here')
    input2.id = 'desc-inbox'
    h3.textContent = 'Inbox'
    ul_inbox.classList.add('ul-list-inbox')
    divContainer.classList.add('form-container')
    submitB.setAttribute('type','button')
    submitB.setAttribute('value','Submit')
    submitB.textContent = '+'
    submitB.addEventListener('click', () => {
        if (input1.value.length == 20 || input2.value.length == 0) {
            alert('Description cannot be empty!')
        } else {
            let todoInfo = {
                title:document.getElementById('title-inbox').value,
                description:document.getElementById('desc-inbox').value,
                date:document.getElementById('date').value
            }

            var h3 = document.createElement('h3')
            var li = document.createElement('li')
            var mkDate = document.createElement('p')
            var ul = document.querySelector('.ul-list-inbox')
            var div = document.createElement('div')
            var x = document.createElement('div')
            x.classList.add('delete-task')
            div.classList.add('list-border')
        
            h3.textContent = `${todoInfo.title}`
            if (`${todoInfo.title}`== '') {
        
            }
            x.textContent ='✖'
            li.textContent = `${todoInfo.description} `
            mkDate.textContent = `${todoInfo.date}`
            li.style.textAlign = 'center'
            h3.style.textAlign ='center'
                div.addEventListener('click', ()=>{
                    div.style.textDecoration = 'line-through'
            })
            x.addEventListener('click', () => {
                div.remove();
            })
           
            ul.appendChild(div)
            div.append(x)
            div.appendChild(h3)
            div.appendChild(li)
            li.appendChild(mkDate)
            document.getElementById('title-inbox').value = ''
            document.getElementById('desc-inbox').value = ''
            h3.textContent = `${todoInfo.title}`
            if (`${todoInfo.title}`== '') {
        h3.remove()
            }
        }
    })
    listContainerInbox.appendChild(h3)
    listContainerInbox.appendChild(ul_inbox)
    listContainerInbox.appendChild(divContainer)
    // listContainerInbox.appendChild(h3)
    divContainer.appendChild(div)
    div.appendChild(input1)
    divContainer.appendChild(div1)
    divContainer.appendChild(div2)
    div1.appendChild(input2)
    div2.appendChild(dateInput)
    divContainer.appendChild(submitB)
    return ul_inbox;
}

function createProjectContent() {
    var ul_project = document.createElement('ul')
    var div = document.createElement('div')
    var label1 = document.createElement('label')
    var input1 = document.createElement('input')
    var div1 = document.createElement('div')
    var label2 = document.createElement('label')
    var input2 = document.createElement('input')
    var submitB = document.createElement('button')
    var h3 = document.createElement('h3')
    var div2 = document.createElement('div')
    var dateInput = document.createElement('input')
    var today = new Date();
    var dateNow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(); 
    dateInput.type = 'date'
    dateInput.id = 'date'
    dateInput.setAttribute('value', dateNow)
    // dateInput.setAttribute('value', '2022-04-17')
    // dateInput.setAttribute('min', '2022-04-16')
    // dateInput.setAttribute('max', '2023-04-16')
    h3.classList.add('project-title')
    var divContainer = document.createElement('form')
    
    input1.setAttribute('name', 'title')
    input1.id = 'title-project'
    input1.setAttribute('type','text')
    input1.setAttribute('placeholder','Title here')
    input2.setAttribute('name', 'desc')
    input2.setAttribute('type','text')
    input2.setAttribute('placeholder','Desc here')
    input2.id = 'desc-project'
    h3.textContent = 'Projects'
    ul_project.classList.add('ul-list-project')
    divContainer.classList.add('form-container')
    submitB.setAttribute('type','button')
    submitB.setAttribute('value','Submit')
    submitB.textContent = '+'
    
    submitB.addEventListener('click', () => {
        if (input1.value.length == 20 || input2.value.length == 0) {
            alert('Fields cannot be empty!')
        } else {
            let todoInfo = {
                title:document.getElementById('title-project').value,
                description:document.getElementById('desc-project').value
            }
            var h3 = document.createElement('h3')
            var li = document.createElement('li')
            var ul = document.querySelector('.ul-list-project')
            var div = document.createElement('div')
            var x = document.createElement('div')
            x.classList.add('delete-task')
            div.classList.add('list-border')
            h3.textContent = `${todoInfo.title}`
            x.textContent ='✖'
            li.textContent = `${todoInfo.description} `
            li.style.textAlign = 'center'
            h3.style.textAlign ='center'
                div.addEventListener('click', ()=>{
                    div.style.textDecoration = 'line-through'
            })
            x.addEventListener('click', () => {
                div.remove();
            })
        
            ul.appendChild(div)
            div.append(x)
            div.appendChild(h3)
            div.appendChild(li)
            document.getElementById('title-project').value = ''
            document.getElementById('desc-project').value = ''
        }
    })

    listContainerProject.appendChild(ul_project)
    listContainerProject.appendChild(h3)
    listContainerProject.appendChild(divContainer)
    // ul_project.appendChild(divContainer)
    divContainer.appendChild(div)
    div.appendChild(label1)
    div.appendChild(input1)
    divContainer.appendChild(div1)
    divContainer.appendChild(div2)
    div1.appendChild(label2)
    div1.appendChild(input2)
    div2.appendChild(dateInput)
    divContainer.appendChild(submitB)
    return ul_project;
}

// event Listeners //

project.addEventListener('click', () => {
let projectContainer = document.querySelector('.list-container-project')
let inbox = document.querySelector('.list-container-inbox')
let today = document.querySelector('.ul-list-today')
listContainerProject.className = 'list-container-project'
listContainerInbox.className = 'hidden'
})

inbox.addEventListener('click', () => {
    let inboxContainer = document.querySelector('.list-container-inbox')
    let today = document.querySelector('.ul-list-today')
    listContainerProject.className = 'hidden'
    listContainerInbox.className ='list-container-inbox'
})

main.append(header)
main.append(container)
listContainerProject.appendChild(createProjectContent())
listContainerInbox.appendChild(createInboxContent())
container.append(sideBar)
sideBar.appendChild(inbox)
inbox.appendChild(inboxP)
sideBar.appendChild(today)
today.appendChild(todayP)
sideBar.appendChild(project)
project.appendChild(projectP)
container.append(middleBar)
middleBar.append(listContainerInbox)
middleBar.appendChild(listContainerProject)
header.appendChild(headerTitle)