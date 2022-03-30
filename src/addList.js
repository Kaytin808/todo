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
    var div = document.createElement('div')
    h3.textContent = `${todoInfo.title}`
    li.textContent = `${todoInfo.description}`
    ul.appendChild(div)
    div.appendChild(h3)
    div.appendChild(li)
    }
}