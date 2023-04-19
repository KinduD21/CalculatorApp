class themeSwitcher {
  constructor() {
    this.switcher = document.querySelector(
      ".calc-container__switch-button_background"
    );
    this.switcher.addEventListener("click", this.switch.bind(this));

    this.body = document.querySelector("body");
  }

  switch() {
    if (
      !this.body.classList.contains("theme-2") &&
      !this.body.classList.contains("theme-3")
    ) {
      this.body.classList.add("theme-2");
    } else if (
      this.body.classList.contains("theme-2") &&
      !this.body.classList.contains("theme-3")
    ) {
      this.body.classList.add("theme-3");
    } else if (
      this.body.classList.contains("theme-2") &&
      this.body.classList.contains("theme-3")
    ) {
      this.body.classList.remove("theme-2", "theme-3");
    }
  }
}

export default themeSwitcher;
