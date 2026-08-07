(function () {
  const overlay = document.getElementById("devtools-block");
  const threshold = 160;
  let isOpen = false;

  function check() {
    const wDiff = window.outerWidth - window.innerWidth > threshold;
    const hDiff = window.outerHeight - window.innerHeight > threshold;
    const open = wDiff || hDiff;

    if (open !== isOpen) {
      isOpen = open;
      overlay.classList.toggle("active", isOpen);
    }
  }

  setInterval(check, 300);
  window.addEventListener("resize", check);

  document.addEventListener("contextmenu", (e) => e.preventDefault());

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
      e.preventDefault();
    }
  });
})();