const todoList = [];

function addTodoList(){
    const todo = document.querySelector('.js-todo-input');
    todoList.push(todo.value);
    todo.value = '';
    renderTodoList(); 
}

function renderTodoList(){ 
    const todoListCard = document.querySelector('.js-card-todo-list');
    let htmlCode = '';
    let n = todoList.length;
    for(let i = 0; i < n; i++){
        htmlCode += `<p>${todoList[i]}</p>`;
    }
    todoListCard.innerHTML = htmlCode;
    console.log(todoListCard);
}

