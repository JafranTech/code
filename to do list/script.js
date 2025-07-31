// To-Do List Logic
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = function () {
    li.classList.toggle("completed");
  };

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "🗑️";
  delBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
}

// Smooth trailing dot
const trail = document.getElementById("cursor-trail");

let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTrail() {
  trailX += (mouseX - trailX) * 0.3;
  trailY += (mouseY - trailY) * 0.3;

  trail.style.transform = `translate(${trailX}px, ${trailY}px)`;

  requestAnimationFrame(animateTrail);
}

animateTrail();
