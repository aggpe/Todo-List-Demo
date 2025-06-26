const todoList = document.getElementById('todo-list');
const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');

function createTask(taskText) {
  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️';
  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit your task:', taskSpan.textContent);
    if (newText && newText.trim() !== '') {
      taskSpan.textContent = newText.trim();
    }
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task !== '') {
    createTask(task);
    input.value = '';
  }
});

