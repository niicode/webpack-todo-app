/**
 * @jest-environment jsdom
 */

import Todo from '../src/modules/Todo.js';
import TodoArr from '../__mocks__/TodoArr.js';

const todoArr = new TodoArr();

let index = 0;
const todo = new Todo(index, `Task ${index}`, false);

for (let i = 0; i < 3; i += 1) {
  todoArr.addTodo(todo);
  index += 1;
}

const renderTodos = () => {
  document.body.innerHTML = '<div id="todo-list"></div>';
  todoArr.getAllTodos().forEach((todo) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    todoElement.innerHTML = `<input type="text" value="${todo}" />`;
    document.querySelector('#todo-list').appendChild(todoElement);
  });
};

beforeAll(() => {
  renderTodos();
});

describe('Manipulate todos', () => {
  test('remove todo', () => {
    todoArr.deleteTodo(1);
    renderTodos();
    expect(todoArr.getAllTodos().length).toBe(2);
  });
  test('remove div deleted from the dom', () => {
    const list = document.querySelector('#todo-list').childNodes;
    expect(list.length).toBe(2);
  });
  test('add todo item', () => {
    todoArr.addTodo(new Todo(index, `Task ${index}`, false));
    renderTodos();
    expect(todoArr.getAllTodos().length).toBe(3);
  });
});
