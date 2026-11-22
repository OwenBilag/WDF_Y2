(() => {
  const toggle = document.querySelector("[data-theme-toggle]");
  const root = document.documentElement;

  const apply = (theme) => {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    if (toggle) toggle.setAttribute("aria-pressed", String(isDark));
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      //nothing here
    }
  };

  apply(root.dataset.theme === "dark" ? "dark" : "light");

  if (toggle) {
    toggle.addEventListener("click", () => {
      apply(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }
})();