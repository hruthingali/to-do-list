// Get DOM elements
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add Task Function
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.classList.add('task');
  listItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Add event listener to delete button
  listItem.querySelector('.delete-btn').addEventListener('click', () => {
    listItem.remove();
  });

  // Append the new task to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  newTaskInput.value = '';
}

// Add Event Listener to Add Task Button
addTaskButton.addEventListener('click', addTask);

// Allow pressing Enter to add a task
newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
