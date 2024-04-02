const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("inputBox");
const taskList = document.getElementById("taskList");
const totalTasksElement = document.getElementById("totalTasks");

// Initialize total tasks count
let totalTasks = 0;

// Event listener for "Add" button click
addBtn.addEventListener("click", addTask);

// Event listener for Enter key press in the input box
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to update total tasks count 
function updateTotalTasksCount() {
    totalTasksElement.textContent = `Total Tasks:
    
    ${totalTasks}
`}

// Function to add a new task
function addTask() {
  // Get the task text from the input box, removing leading and trailing whitespaces
    const taskText = taskInput.value.trim();

  // Check if the input is not empty
    if (taskText !== "") {
      totalTasks++;

    // Update total tasks count in the UI
        updateTotalTasksCount();

    // Create a new list item
        const li = document.createElement("li");

    // Set the HTML content of the list item
        li.innerHTML = `
        <input type="checkbox" class="check">
        <span>${taskText}</span>
        <span class="delete">X</span>
    `;


    // Append the new task item to the task list
    taskList.appendChild(li);

    // Clear the input box
    taskInput.value = "";

    // Add event listeners to the new task item
    addEventListeners(li);
    }
}

// Function to toggle the "completed" class on a task item
function toggleTask(event) {
  // Get the checkbox that triggered the event
    const check = event.target;

  // Get the parent task item (list item) of the checkbox
    const task = check.parentElement;

  // Toggle the "completed" class on the task item
    task.classList.toggle("completed");
}

// Function to delete a task item
function deleteTask(event) {
    const deleteBtn = event.target;
    const task = deleteBtn.parentElement;

  // Decrement total tasks count
    totalTasks--;

  // Update total tasks count in the UI
    updateTotalTasksCount();

    task.remove();
}

// Function to add event listeners to a task item
function addEventListeners(li) {
    const checkbox = li.querySelector(".check");
    const deleteBtn = li.querySelector(".delete");

  // Event listener for checkbox change
    checkbox.addEventListener("change", toggleTask);

  // Event listener for delete button click
    deleteBtn.addEventListener("click", deleteTask);
}

// Initial update of total tasks count
updateTotalTasksCount();