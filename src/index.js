import './style.css'
var main = document.getElementById('main')
var header = document.createElement('div')
var headerTitle = document.createElement('h1')
header.classList.add('header')
headerTitle.textContent = 'To-Do List ✅'
main.append(header)
header.appendChild(headerTitle)

