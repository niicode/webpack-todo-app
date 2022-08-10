import './index.css';
import TodoList from './modules/TodoList.js';
import Todo from './modules/Todo.js';

const formSubmit = document.querySelector('#form');
const clear = document.querySelector('#remove');
const todoElement = document.querySelector('.todo-container');

const todoList = new TodoList();

const renderTodos = () => {
  todoElement.innerHTML = '';
  if (todoList.getAllTodos().length === 0) {
    todoElement.innerHTML = '<p class= "empty"> No todos yet</p>';
  } else {
    todoList.getAllTodos().forEach((todo, index) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      todoItem.innerHTML = `
      <div data-check = ${index} class="todo border-bottom flex">
        <input class="box" type="checkbox" />
        <input data-item = ${todo.id} class="todo-item" type="text" value="${todo.description}" />
        <i id="delete-btn" data-remote = ${index} class='bx bx-trash' id="delete-btn"></i>
      </div>
    `;
      todoElement.appendChild(todoItem);
    });
  }

  const deletBtn = document.querySelectorAll('#delete-btn');
  deletBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.remote;
      todoList.deleteTodo(id);
      renderTodos();
    });
  });

  const editTodo = document.querySelectorAll('.todo-item');
  editTodo.forEach((todo) => {
    todo.addEventListener('keyup', (e) => {
      const id = e.target.dataset.item;
      const description = e.target.value.trim();
      const completed = false;
      const newTodo = new Todo(description, completed, id);
      todoList.updateTodo(id, newTodo);
    });
  });

  const clearAllTodos = () => {
    todoList.clearAllTodos();
    renderTodos();
  };
  clear.addEventListener('click', clearAllTodos);
};

formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoDescription = document.querySelector('.input').value;
  const todo = new Todo(todoDescription, false, todoList.getAllTodos().length + 1);
  todoList.addTodo(todo);
  formSubmit.reset();
  document.querySelector('.input').focus();
  renderTodos();
});

window.onload = renderTodos();
