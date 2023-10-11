const skillsTop = document.getElementById("skills-top");
const skillsBot = document.getElementById("skills-bot");

skillsTop.addEventListener("mouseenter", () => {
  skillsTop.classList.toggle("paused");
});
skillsTop.addEventListener("mouseleave", () => {
  skillsTop.classList.toggle("paused");
});

skillsBot.addEventListener("mouseenter", () => {
  skillsBot.classList.toggle("paused");
});
skillsBot.addEventListener("mouseleave", () => {
  skillsBot.classList.toggle("paused");
});
