// import createInboxContent from './inboxContent'
import './style.css'
import createList from './inboxListCreate'
import createRanList from '../createProject'
var main = document.getElementById('main')
const subnav = document.querySelector('.subnav')
const middleBar = document.querySelector('.middle-container');
// var inbox = document.querySelector('.inbox')
// var today = document.querySelector('.today')
// var project = document.querySelector('.project')
// var middleBar = document.querySelector('.middle-container')
// var listContainerProject = document.createElement('div')
// var listContainerToday = document.createElement('div')

function setupTabs() {
    document.querySelectorAll(".tabs_buttons").forEach(button => {
        button.addEventListener('click', () => {
            const sideBar = button.parentElement;
            const tabsContainer = document.querySelector('.middle-container');
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs_content[data-tab="${tabNumber}"]`)

            sideBar.querySelectorAll('.tabs_buttons').forEach(button => {
                button.classList.remove("tabs_buttons--active")
            })

            tabsContainer.querySelectorAll('.tabs_content').forEach(tab => {
                tab.classList.remove("tabs_content--active")
            })

            button.classList.add('tabs_button--active');
            tabToActivate.classList.add('tabs_content--active')
        })
    })
}
setupTabs();

var inboxListen = document.querySelector('.submit-inbox-button')
inboxListen.addEventListener('click', () => {
    createList();
})

// var createProjectListener = document.querySelector('.create-project')
// createProjectListener.addEventListener('click', () => {
//     createProjectContent()
// })
// var defaultProjectListen = document.querySelector('.default-project')
// defaultProjectListen.addEventListener('click', () => {

// })
const plus = document.querySelector('.plus')
plus.addEventListener('click', () => {
    createProjectContent();
})
function createProjectContent() {
let projectName = prompt('What is the name of your project?')
var newTab = document.createElement('button')
const prDisplay = document.querySelector('.create-project')
var title = document.createElement('h3')
var tabs_content = document.createElement('div')
tabs_content.classList.add('tabs_content')
tabs_content.dataset.tab = projectName;
newTab.classList.add('tabs_buttons')
newTab.dataset.forTab = projectName;
newTab.textContent = projectName;
title.textContent = projectName;
title.classList.add('titleMiddleBar')

subnav.appendChild(newTab)
middleBar.appendChild(tabs_content)
tabs_content.appendChild(title)
createRanList();
setupTabs();

} 
// function createTodayContent() {
//     var todayTitle = document.createElement('h3')
//     todayTitle.textContent = 'Today'
//     todayTitle.classList.add('today-title')
//     listContainerToday.appendChild(todayTitle)
//     return todayTitle
// }
// // event Listeners //

// project.addEventListener('click', () => {
// listContainerProject.className = 'list-container-project'
// listContainerInbox.className = 'hidden'
// listContainerToday.className = 'hidden'
// // createProjectContent()
// })

// inbox.addEventListener('click', () => {
//     listContainerProject.className = 'hidden'
//     listContainerInbox.className ='list-container-inbox'
//     listContainerToday.className = 'hidden'
// })

// today.addEventListener('click', () => {
//     listContainerInbox.className = 'hidden'
//     listContainerProject.className = 'hidden'
//     listContainerToday.className = 'list-container-today'
// })


// middleBar.appendChild(createInboxContent())
// middleBar.appendChild(listContainerProject)
// middleBar.appendChild(listContainerToday)
// // listContainerProject.appendChild(createProjectContent())
// // listContainerInbox.appendChild(createInboxContent())
// listContainerToday.appendChild(createTodayContent())
