const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById('todo-list');
const todos_key = "todos "

let toDos = [];

function handletodosubmit(e) {
    e.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value = ""; 
    const newTodoObj = {
        text: newtodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(todos_key, JSON.stringify(toDos));

}

function deleteTodo(e) {
    const li = e.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newtodo) {
    const li = document.createElement("li");
    li.id = newtodo.id
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

todoForm.addEventListener('submit', handletodosubmit);

const savedTodos = localStorage.getItem(todos_key);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
} 

