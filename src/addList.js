export default function addList() {
    let todoInfo = {
        title:document.getElementById('task').value,
        description:document.getElementById('description').value
    }
    if (todoInfo.title == '') {
        alert(' u entered nothin')
    } else {
        addThis();
    }

function addThis() {
    var h3 = document.createElement('h3')
    var li = document.createElement('li')
    var ul = document.querySelector('.ul-list')
    h3.textContent = `${todoInfo.title}`
    li.textContent = `${todoInfo.description}`
    ul.appendChild(h3)
    ul.appendChild(li)
    }
}