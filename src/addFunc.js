export default function addListP() {
    let todoInfo = {
        title:document.getElementById('task').value,
        description:document.getElementById('description').value
    }
        addThisP();
        
function addThisP() {
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
    document.forms[0].reset();
    ul.appendChild(div)
    div.append(x)
    div.appendChild(h3)
    div.appendChild(li)
    
    }
}