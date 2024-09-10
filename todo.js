const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate,time } = todoObject;
    const html = `
      <div class="result-2">${name}</div>
      <div class="result-2">${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  }

  document.querySelector('.result')
    .innerHTML = todoListHTML;
}

function todo() {
  const inputElement = document.querySelector('.todo1');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.date');
  const dueDate = dateInputElement.value;

  if (name.trim() === '' || dueDate.trim() === '' ) {
    alert('Please fill in all fields (task name, date).');
    return;

  }

  todoList.push({
    name,
    dueDate,
  });

  inputElement.value = '';

  renderTodoList();
}