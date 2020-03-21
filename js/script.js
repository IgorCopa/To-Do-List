const inputElement = document.querySelector('input');
const buttonClear = document.querySelector('#clearList');
const buttonAdd = document.querySelector('#addItem');
const buttonSave = document.querySelector('#saveList');
const ulElement = document.querySelector('ul');

const todos = JSON.parse(localStorage.getItem("saveInfo")) || [];

function renderTodos(){
    ulElement.innerHTML = '';
    for(todo of todos){
        let liElement = document.createElement('li');
        let liTextElement = document.createTextNode(`${todo}`);
        let aElement = document.createElement('a');
        aElement.setAttribute('href', '#');
        let position = todos.indexOf(todo);
        aElement.setAttribute('onclick', `removeTodo(${position})`);
        
        const aTextElementx = document.createTextNode('\u00D7');
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
}

function removeTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
}

function saveToStorage(){
    localStorage.setItem("saveInfo", JSON.stringify(todos));
}

buttonAdd.onclick = begins;
buttonSave.onclick = saveToStorage;