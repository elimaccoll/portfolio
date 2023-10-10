function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

// Onload hero name scramble effect
const heroNameElem = document.getElementById("hero-name");
const finalName = "ELI MACCOLL";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let displayName = "ELI MACCOLL";
let iter = 0;
const interval = setInterval(() => {
  displayName = displayName
    .split("")
    .map((letter, ind) => {
      if (ind < iter) return finalName[ind];
      return LETTERS[Math.floor(Math.random() * 26)];
    })
    .join("");
  heroNameElem.textContent = displayName;
  if (iter >= finalName.length) clearInterval(interval);
  iter += 1 / 4;
}, 40);

// Contact form
document.getElementById("contact-send").addEventListener("click", (e) => {
  e.preventDefault();
  const emailTo = "elimaccoll@gmail.com";
  const emailName = document.getElementById("contact-name");
  const emailMessage = document.getElementById("contact-message");
  const emailSubject = document.getElementById("contact-subject");

  const emailBody = encodeURIComponent(
    `${emailName.value}\r\n\r\n${emailMessage.value}`
  );

  location.href =
    "mailto:" +
    emailTo +
    "?subject=" +
    emailSubject.value +
    "&body=" +
    emailBody;

  emailName.value = "";
  emailMessage.value = "";
  emailSubject.value = "";
  const sentMessage =
    "Thanks for reaching out! I'll get back to you as soon as possible!";
  document.getElementById("contact-sent").textContent = sentMessage;
});
