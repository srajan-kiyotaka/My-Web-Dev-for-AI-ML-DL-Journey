const todoList = [];

function addTodoList(){
    const todoName = document.querySelector('.js-todo-input');
    const todoDate = document.querySelector('.js-todo-date-input');
    todoList.push({
        name: todoName.value,
        date: todoDate.value
    });
    todoName.value = '';
    todoDate.value = '';
    renderTodoList(); 
}

function removeItem(index){
    todoList.splice(index, 1);
    renderTodoList();
}

function renderTodoList(){ 
    const todoListElm = document.querySelector('.js-card-todo-list');
    let htmlCode = '';
    let n = todoList.length;
    for(let i = 0; i < n; i++){
        const todoObj = todoList[i];
        htmlCode += `
        <div class="todo-name">
            ${todoObj.name}
        </div>
        <div class="todo-date">
            ${todoObj.date}
        </div>
        <button class="todo-del-btn" onclick="
            removeItem(${i});
        ">
            Remove
        </button>
        `;
    }
    todoListElm.innerHTML = htmlCode;
}
