/**
 * @jest-environment jsdom
 */

import { TestEnvironment } from 'jest-environment-jsdom';
import Todo from '../src/modules/Todo.js';
import TodoArr from '../__mocks__/TodoArr.js';

const todoArr = new TodoArr();

for (let i = 0; i < 3; i += 1) {
  const todo = new Todo(`Task ${i}`, false, i + 1);
  todoArr.addTodo(todo);
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

describe('Manipulate updates', () => {
  test('Update the task', () => {
    const newTask = new Todo('Its okay', false, 1);
    todoArr.updateTodo(1, newTask);
    const newTask2 = new Todo('Its okay', false, 2);
    todoArr.updateTodo(2, newTask2);

    renderTodos();
    console.log(todoArr.getAllTodos());
    expect(todoArr.getAllTodos()[1].description).toBe('Its okay');
  });
  test('Completed status', () => {
    todoArr.changeCompleted(2);
    todoArr.changeCompleted(2);
    todoArr.changeCompleted(2);
    todoArr.changeCompleted(1);

    renderTodos();
    expect(todoArr.getAllTodos()[0].completed).toBe(true);
  });

  test('Clearing all completed', () => {
    todoArr.clearAllTodos();
    renderTodos();
    expect(todoArr.getAllTodos().length).toBe(1);
  });
});
