setTimeout(() => {
  const menu = document.getElementById("menu-check");

  menu.addEventListener("click", () => {
    if (menu.checked) {
      document.getElementById("nav").style.top = 0;
    } else {
      document.getElementById("nav").style.top = "-100vh";
    }
  });
}, 1000)
