const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate,Timer } = todoObject;
    const html = `
      <div class="result-2">${name}</div>
      <div class="result-2">${dueDate}</div>
      <div class="result-2">${Timer}</div>
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

  const timeEle = document.querySelector('.times');
  const Timer = timeEle.value;

  if (name.trim() === '' || dueDate.trim() === ''||Timer.trim()=='' ) {
    alert('Please fill in all fields (task name, date and).');
    return;

  }

  todoList.push({
    name,
    dueDate,
    Timer,
  });

  inputElement.value = '';
  dateInputElement.value = '';
  timeEle.value = '';

  renderTodoList();
}
function downloadPDF() {
  if (todoList.length === 0) {
    alert('No tasks to download.');
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let todoListContent = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate, Timer } = todoObject;
    todoListContent += `Task: ${name}, DUE-DATE: ${dueDate}, Time: ${Timer}\n`;
  }

  doc.text(todoListContent, 10, 10);
  doc.save('todo-list.pdf');
}
