class TodoForm {
  constructor(form) {
    this.form = form;
    this.input = this.form.querySelector('input');
    this.button = this.form.querySelector('button');
    this.list = this.form.querySelector('ul');
    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputValue = this.input.value;
    this.input.value = '';
    this.list.innerHTML += `<li>${inputValue}</li>`;
  }
}

export default TodoForm;