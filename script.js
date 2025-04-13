let tasks = [];

// Set dynamic date
window.onload = () => {
  const dayTitle = document.getElementById("dayTitle");
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dayTitle.textContent = date.toLocaleDateString('en-US', options);
};

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskTime = document.getElementById('taskTime');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() === '' || taskTime.value === '') return;

  const time = taskTime.value;
  const text = taskInput.value;

  const li = document.createElement('li');
  li.innerHTML = `<strong>${time}</strong> - ${text} <span onclick="removeTask(this)">×</span>`;
  taskList.appendChild(li);

  tasks.push({ time, text });

  // Reset input fields
  taskInput.value = '';
  taskTime.value = '';
}

function removeTask(element) {
  const taskText = element.parentElement.textContent.trim();
  tasks = tasks.filter(task => !taskText.includes(task.text));
  element.parentElement.remove();
}
