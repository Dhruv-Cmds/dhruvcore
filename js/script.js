
function hovers() {

  const hover = document.querySelector(".btn-primary");
  const hover2 = document.querySelector(".btn-ghost");

  if (!hover || !hover2) return

  hover.addEventListener("mouseenter", () => {

    hover.style.backgroundColor = "rgb(255, 132, 0)";
    hover.style.transform = "scale(1.1)";

    hover2.style.backgroundColor = "white";

  })

  hover2.addEventListener("mouseenter", () => {

    hover.style.backgroundColor = "white";

    hover2.style.backgroundColor = "rgb(255, 132, 0)";
    hover2.style.transform = "scale(1.1)";

  })

  function restoreButtonColors() {

    hover.style.backgroundColor = "";
    hover.style.transform = "";
    
    hover2.style.backgroundColor = "";
    hover2.style.transform = "";

  }

  hover.addEventListener("mouseleave", restoreButtonColors);
  hover2.addEventListener("mouseleave", restoreButtonColors);

}

hovers();
