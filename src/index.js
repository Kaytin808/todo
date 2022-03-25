import './style.css'
var main = document.getElementById('main')
var header = document.createElement('div')
var headerTitle = document.createElement('h1')
var sideBar = document.createElement('div')
sideBar.classList.add('sideBar-container')
header.classList.add('header')
headerTitle.textContent = 'To-Do List ✅'



main.append(header)
main.append(sideBar)
header.appendChild(headerTitle)