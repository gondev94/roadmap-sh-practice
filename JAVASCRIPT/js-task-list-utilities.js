function addTask(tasks, title) {
    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false,
    };
    tasks.push(newTask);
    return newTask;
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks;
}

function loadTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function completeTask(tasks, taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = true;
        return task;
    }
    return null;
}

function removeTask(tasks, taskId) {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
        return tasks;
    }
    return null;
}

function countIncompleteTasks(tasks) {
    return tasks.filter(task => !task.completed).length;
}

function countCompletedTasks(tasks) {
    return tasks.filter(task => task.completed).length;
}

function displayTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.title;
        taskList.appendChild(taskItem);
    });
    return taskList;
}

function filterTasks(tasks, status) {
    return tasks.filter(task => task.completed === status);
}

function findTask(tasks, taskId) {
    return tasks.find(task => task.id === taskId);
}
