const todoList = JSON.parse(localStorage.getItem('TodoListData')) || [];

if(todoList.length > 0){
    renderTodoList();
}

function addTodoList(){
    const todoName = document.querySelector('.js-todo-input');
    const todoDate = document.querySelector('.js-todo-date-input');
    todoList.push({
        name: todoName.value,
        date: todoDate.value
    });
    localStorage.setItem('TodoListData', JSON.stringify(todoList));
    todoName.value = '';
    todoDate.value = '';
    renderTodoList(); 
}

function removeItem(index){
    todoList.splice(index, 1);
    localStorage.setItem('TodoListData', JSON.stringify(todoList));
    renderTodoList();
}

function renderTodoList(){ 
    const todoListElm = document.querySelector('.js-card-todo-list');
    let htmlCode = '';
    let n = todoList.length;
    todoList.forEach((todoObj, index) => {
        htmlCode += `
        <div class="todo-name">
            ${todoObj.name}
        </div>
        <div class="todo-date">
            ${todoObj.date}
        </div>
        <button class="todo-del-btn js-todo-del-btn">
            Remove
        </button>
        `;
    });
    todoListElm.innerHTML = htmlCode;
    document.querySelectorAll('.js-todo-del-btn').forEach((todoBtn, index) => {
        todoBtn.addEventListener('click', () => {
            removeItem(index);
        });
    });
}

const addTodoBtnElm = document.querySelector('.js-add-todo-btn');

addTodoBtnElm.addEventListener('click', addTodoList);

