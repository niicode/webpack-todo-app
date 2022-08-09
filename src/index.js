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
  const list = document.getElementById('todo-list');
  TodoList.forEach((todo) => {
    const item = document.createElement('li');
    item.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span>${todo.desctiption}</span>
        `;
    list.appendChild(item);
  });
};

RenderTodos();
