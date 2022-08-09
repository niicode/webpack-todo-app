import './index.css';

const TodoList = [
  {
    id: 1,
    desctiption: 'Learn React',
    completed: false,
  },
  {
    id: 2,
    desctiption: 'Learn Redux',
    completed: false,
  },
  {
    id: 3,
    desctiption: 'Learn React Native',
    completed: false,
  },
  {
    id: 4,
    desctiption: 'Learn GraphQL',
    completed: false,
  },
];

const RenderTodos = () => {
  const list = document.querySelector('.todo-container');
  TodoList.forEach((todo) => {
    const item = document.createElement('div');
    item.innerHTML = `
      <div class="todo border-bottom flex">
        <input class="box" type="checkbox" />
        <input type="text" value="${todo.desctiption}" />
        <i class='bx bx-dots-vertical-rounded'></i>
      </div>
        `;
    list.appendChild(item);
  });
};

RenderTodos();
