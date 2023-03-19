function jumpToAnchor(anchor) {
  const loc = document.location.toString().split("#")[0];
  document.location = loc + "#" + anchor;
  return;
}

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
