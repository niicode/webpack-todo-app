/**
 * @jest-environment jsdom
 */
import Todo from '../src/modules/Todo.js';
import TodoArr, { localStorage } from '../__mocks__/TodoArr.js';

const todoArr = new TodoArr();

for (let i = 0; i < 3; i += 1) {
  const todo = new Todo(`Task ${i}`, false, i + 1);
  todoArr.addTodo(todo);
}

const checkTodoStatus = (status) => {
  let state;
  if (status === true) {
    state = 'checked';
  } else {
    state = '';
  }
  return state;
};

const renderTodos = () => {
  document.body.innerHTML = '<div id="todo-list"></div>';
  todoArr.getAllTodos().forEach((todo) => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    todoElement.innerHTML = `
                              <input type="text" value="${todo}" />
                              <input type="checkbox"  ${checkTodoStatus(todo.completed)}/>  
                            `;
    document.querySelector('#todo-list').appendChild(todoElement);
  });
};

beforeAll(() => {
  renderTodos();
});

describe('Manipulate updates', () => {
  test('Update or edit the task description', () => {
    const newTask = new Todo('Its okay', false, 1);
    todoArr.updateTodo(1, newTask);
    const newTask2 = new Todo('Its okay', false, 2);
    todoArr.updateTodo(2, newTask2);
    renderTodos();
    expect(todoArr.getAllTodos()[1].description).toBe('Its okay');
  });

  test('check the localStorage for updates', () => {
    expect(localStorage.store[0].description).toBe('Its okay');
  });

  test('check completed status', () => {
    todoArr.changeCompleted(1);
    renderTodos();
    expect(todoArr.getAllTodos()[0].completed).toBe(true);
  });

  test('check dom element is checked completed checkbox', () => {
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    expect(checkbox[0].checked).toBe(true);
  });

  test('Clearing all completed tasks', () => {
    todoArr.clearAllTodos();
    renderTodos();
    expect(todoArr.getAllTodos().length).toBe(2);
  });
});
