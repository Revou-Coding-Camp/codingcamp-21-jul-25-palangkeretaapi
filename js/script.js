console.log("Hello, World!");

// This is a simple JavaScript file for a Todo List application
let tasks = [];
let showOnlyNotCompleted = false;

function addTask() {
    // Function to add a task
    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");

    // Check if the inputs are empty
    if (taskInput.value === "" || dateInput.value === "") {
        // Alert the user to enter both task and date
        alert("Please enter a task and a date.");
    } else {
        // Add the task to the tasks array
        tasks.push({
            title: taskInput.value,
            date: dateInput.value,
            completed: false,
        });

        console.log("Task added:", taskInput.value, "on", dateInput.value);
        console.log(tasks);

        renderTasks();
    }

}

function removeAllTask() {
    // Function to remove a task
    tasks = [];

    renderTasks();
}

function toggleFilter() {
    showOnlyNotCompleted = !showOnlyNotCompleted;
    renderTasks();
}


function completeTask(index) {
    tasks[index].completed = true;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}


function renderTasks() {
    const taskList = document.getElementById("todo-list");
    taskList.innerHTML = ""; // Kosongkan daftar

    tasks.forEach((task, index) => {
        // Filter: jika hanya ingin menampilkan yang belum selesai
        if (showOnlyNotCompleted && task.completed) {
            return; // Skip task yang sudah selesai
        }

        taskList.innerHTML += `
            <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
                <span ${task.completed ? 'style="text-decoration: line-through;"' : ''}>
                    ${task.title}
                </span>
                <div>
                    <button type="button" class="px-[10px] py-[2px] bg-green-500 text-white rounded-md" onclick="completeTask(${index});">Complete</button>
                    <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md" onclick="deleteTask(${index});">Delete</button>
                </div>
            </li>
        `;
    });
}
