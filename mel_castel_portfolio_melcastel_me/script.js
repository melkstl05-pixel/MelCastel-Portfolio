const toggle = document.getElementById("soundToggle");
let on = false;
toggle.addEventListener("click", () => {
  on = !on;
  toggle.querySelector("span").textContent = on ? "ON" : "OFF";
  // Intentionally no autoplay audio: browsers block it and visitors should choose to listen.
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:"smooth"}); }
  });
});
