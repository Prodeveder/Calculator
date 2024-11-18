//* Toggling and Theme Change
localStorage.clear();

const body = document.body;
const toggleSwitches = document.querySelectorAll(".toggle");
toggleSwitches[0].classList.add("active");

const currentTheme = localStorage.getItem("theme");
body.classList.add(currentTheme ? currentTheme : "theme1");

const clearActiveToggle = () => {
  toggleSwitches.forEach((toggle) => {
    toggle.classList.remove("active");
  });
};

toggleSwitches.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const theme = toggle.getAttribute("data-theme");

    body.classList.remove("theme1", "theme2", "theme3");
    clearActiveToggle();
    body.classList.add(theme);
    toggle.classList.add("active");

    localStorage.setItem("theme", theme);
  });
});

// Calculations
const calculations = document.querySelector(".calculations");
calculations.textContent = "";

const keys = document.querySelectorAll(".key");
let display = "",
  results = "";

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.textContent === "DEL") {
      display = display.slice(0, -1);
      results = results.slice(0, -1);
    } else if (key.textContent === "RESET") {
      display = "";
    } else if (key.textContent === "=") {
      try {
        display = eval(results);
      } catch {
        display = "Error";
      }
    } else {
      if (key.textContent === "x") {
        display += key.textContent;
        results += "*";
        console.log(results);
      } else if (key.textContent === ".") {
        display += ",";
        results += ".";
      } else {
        display += key.textContent;
        results += key.textContent;
      }
    }

    calculations.textContent = display;
    console.log(results);
  });
});
