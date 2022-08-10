class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  changeTodo(index, todo) {
    this.todos[index] = todo;
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  getTodos() {
    return this.todos;
  }
}

export default TodoList;
