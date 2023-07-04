interface Task {
  id: number;
  name: string;
  completed: boolean;
}

let tasks: Task[] = [];

const taskForm = document.getElementById('taskForm') as HTMLFormElement;
const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    addTask(taskName);
    taskInput.value = '';
  }
});

function addTask(name: string) {
  const newTask: Task = {
    id: tasks.length + 1,
    name: name,
    completed: false
  };
  tasks.push(newTask);
  renderTasks();
}

function deleteTask(id: number) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function toggleTask(id: number) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id));
    const label = document.createElement('label');
    label.textContent = task.name;
    if (task.completed) {
      label.classList.add('completed');
    }
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => deleteTask(task.id));
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

  