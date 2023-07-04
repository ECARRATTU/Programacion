var tasks = [];
var taskForm = document.getElementById('taskForm');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var taskName = taskInput.value.trim();
    if (taskName !== '') {
        addTask(taskName);
        taskInput.value = '';
    }
});
function addTask(name) {
    var newTask = {
        id: tasks.length + 1,
        name: name,
        completed: false
    };
    tasks.push(newTask);
    renderTasks();
}
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    renderTasks();
}
function toggleTask(id) {
    tasks = tasks.map(function (task) {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    renderTasks();
}
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(function (task) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function () { return toggleTask(task.id); });
        var label = document.createElement('label');
        label.textContent = task.name;
        if (task.completed) {
            label.classList.add('completed');
        }
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function () { return deleteTask(task.id); });
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
