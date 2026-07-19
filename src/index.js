document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// src/index.js

const createTaskForm = document.getElementById("create-task-form");
const taskDescriptionInput = document.getElementById("new-task-description");
const taskList = document.getElementById("tasks");

createTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskDescriptionInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);

  createTaskForm.reset();
});