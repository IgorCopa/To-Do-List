const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const ulElement = document.querySelector('ul');

const todos = JSON.parse(localStorage.getItem("saveInfo")) || [];

function renderTodos(){
    ulElement.innerHTML = '';
    for(todo of todos){
        let liElement;
        liElement = document.createElement('li');
        let liTextElement = document.createTextNode(`${todo}`);
        let aElement = document.createElement('a');
        aElement.setAttribute('href', '#');
        let position = todos.indexOf(todo);
        aElement.setAttribute('onclick', `removeTodo(${position})`);
        
        const aTextElementx = document.createTextNode('x');
        aElement.appendChild(aTextElementx);

        liElement.appendChild(liTextElement);
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    }
}

renderTodos();

function begins(){
    let toDoText = inputElement.value;
    todos.push(toDoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function removeTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem("saveInfo", JSON.stringify(todos));
}

buttonElement.onclick = begins;