let draggedTask = null;

const tasks = document.querySelectorAll(".task");

const containers = document.querySelectorAll(".task-list");

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

tasks.forEach((task) => {
  task.addEventListener("dragstart", (e) => {
    draggedTask = task;
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", (e) => {
    e.preventDefault();
    task.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    container.classList.add("hovered");
  });

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  container.addEventListener("drop", (e) => {
    e.preventDefault();
    container.classList.remove("hovered");
    container.appendChild(draggedTask);
  });
});

function createNewTask(taskText) {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.draggable = true;
  newTask.textContent = taskText;

  newTask.addEventListener("dragstart", (e) => {
    draggedTask = newTask;
    newTask.classList.add("dragging");
  });

  newTask.addEventListener("dragend", (e) => {
    e.preventDefault();
    newTask.classList.remove("dregging");
  });

  return newTask;
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText == "") {
    alert("enter task first");
    return;
  }

  const newTask = createNewTask(taskText);
  const firstContainer = document.querySelector(".task-list");
  firstContainer.appendChild(newTask);
  const edit = document.createElement("button");
  edit.textContent = "e";
  newTask.appendChild(edit, delet);

  taskInput.value = "";
});
