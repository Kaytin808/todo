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
    var listContainerInbox = document.createElement('div')
    listContainerInbox.classList.add('hidden')
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
export default createInboxContent;