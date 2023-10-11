function trail(e) {
  var div = document.createElement("div");

  div.classList.add("mouse-trail");

  Object.assign(div.style, {
    top: e.pageY - 10 + "px",
    left: e.pageX - 10 + "px",
  });

  document.body.appendChild(div);
  setTimeout(function () {
    document.body.removeChild(div);
  }, 500);
}

document.getElementById("hero").addEventListener("mousemove", trail);
