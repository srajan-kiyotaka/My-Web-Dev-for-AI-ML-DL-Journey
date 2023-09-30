const todoList = [];

function addTodoList(){
    let todo = document.querySelector('.js-todo-input');
    todoList.push(todo.value);
    todo.value = '';
}

