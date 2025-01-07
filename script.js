// Get DOM elements
const taskNameInput = document.getElementById('task-name');
const taskDateInput = document.getElementById('task-date');
const taskTimeInput = document.getElementById('task-time');
const taskObjectiveInput = document.getElementById('task-objective');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add Task Function
function addTask() {
  const taskName = taskNameInput.value.trim();
  const taskDate = taskDateInput.value;
  const taskTime = taskTimeInput.value;
  const taskObjective = taskObjectiveInput.value.trim();

  if (!taskName || !taskDate || !taskTime || !taskObjective) {
    alert('Please fill in all the fields!');
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.classList.add('task');
  listItem.innerHTML = `
    <div class="task-header">
      <span>${taskName}</span>
      <button class="delete-btn">Delete</button>
    </div>
    <p><strong>Date:</strong> ${taskDate}</p>
    <p><strong>Time:</strong> ${taskTime}</p>
    <p><strong>Objective:</strong> ${taskObjective}</p>
  `;

  // Add event listener to delete button
  listItem.querySelector('.delete-btn').addEventListener('click', () => {
    listItem.remove();
  });

  // Append the new task to the task list
  taskList.appendChild(listItem);

  // Clear the input fields
  taskNameInput.value = '';
  taskDateInput.value = '';
  taskTimeInput.value = '';
  taskObjectiveInput.value = '';
}

// Add Event Listener to Add Task Button
addTaskButton.addEventListener('click', addTask);

// Allow pressing Enter to add a task
taskObjectiveInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // Prevent adding a new line in the textarea
    addTask();
  }
});
