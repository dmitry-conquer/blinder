const horisontalSpoilers = document.querySelectorAll(".horisontal-spoiler");

horisontalSpoilers.forEach(el => {
  el.addEventListener("click", e => {
    horisontalSpoilers.forEach(iel => {
      iel.classList.remove("active-horisontal-spoiler");
    });
    e.target.closest(".horisontal-spoiler").classList.add("active-horisontal-spoiler");
  });
});
