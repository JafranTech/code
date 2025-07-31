// Typewriter Effect
const typewriter = document.getElementById("typewriter");
const roles = ["Web Developer", "UI Designer", "JavaScript Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = roles[wordIndex];
  typewriter.textContent = current.substring(0, charIndex);
  if (!isDeleting && charIndex < current.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % roles.length;
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark", document.body.classList.contains("dark-mode"));
}
window.onload = () => {
  if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark-mode");
  }
};

// Animate skill bars on scroll
const skills = document.querySelectorAll('.skill-bar');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.getAttribute('data-level');
    }
  });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));

// Contact form submission
function submitForm(e) {
  e.preventDefault();
  alert("Thank you! Your message was sent.");
}

// Custom Cursor
const cursor = document.getElementById("cursor-dot");
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;
  cursor.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();
