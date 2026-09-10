let tasks = [];

const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const taskElement = document.createElement("div");
        taskElement.className = "task";

        if (task.completed) {
            taskElement.classList.add("completed");
        }

        const taskText = document.createElement("span");
        taskText.textContent = task.name + " - " + task.priority;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function() {
            task.completed = true;
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            displayTasks();
        });

        taskElement.appendChild(taskText);
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);

        taskList.appendChild(taskElement);
    });
}

function addTask() {
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        return;
    }

    const task = {
        name: taskName,
        priority: prioritySelect.value,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}

addTaskButton.addEventListener("click", addTask);