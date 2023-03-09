const body = document.querySelector("body");
const h2 = document.querySelector("h2");
const h6 = document.querySelector("h6");
const p = document.querySelectorAll("p");

// Calc Function

const result = document.querySelector("#screen");

const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");
const deleteButton = document.getElementById("delete");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const resetButton = document.getElementById("reset");
const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");

resetButton.addEventListener("click", resetResult);
deleteButton.addEventListener("click", backspace);
divideButton.addEventListener("click", function () {
  addValue("/");
});
multiplyButton.addEventListener("click", function () {
  addValue("*");
});
sevenButton.addEventListener("click", function () {
  addValue("7");
});
eightButton.addEventListener("click", function () {
  addValue("8");
});
nineButton.addEventListener("click", function () {
  addValue("9");
});
subtractButton.addEventListener("click", function () {
  addValue("-");
});
fourButton.addEventListener("click", function () {
  addValue("4");
});
fiveButton.addEventListener("click", function () {
  addValue("5");
});
sixButton.addEventListener("click", function () {
  addValue("6");
});
addButton.addEventListener("click", function () {
  addValue("+");
});
oneButton.addEventListener("click", function () {
  addValue("1");
});
twoButton.addEventListener("click", function () {
  addValue("2");
});
threeButton.addEventListener("click", function () {
  addValue("3");
});
equalsButton.addEventListener("click", calculate);
zeroButton.addEventListener("click", function () {
  addValue("0");
});
decimalButton.addEventListener("click", function () {
  addValue(".");
});

function addValue(val) {
  result.value += val;
}

function resetResult() {
  result.value = "";
}

function backspace() {
  let currentResult = result.value;
  result.value = currentResult.substring(0, currentResult.length - 1);
}

function calculate() {
  let currentResult = result.value;
  let operators = ["+", "-", "*", "/"];

  if (operators.includes(currentResult.slice(-1))) {
    currentResult = currentResult.slice(0, -1);
  }

  try {
    let answer = eval(currentResult);
    result.value = answer;
  } catch (error) {
    result.value = "Error";
  }
}

// Theme switcher - Variables

const switcher = document.querySelector(
  ".calc-container__switch-button_background"
);
const switchButton = switcher.querySelector(".calc-container__switch-button");

const keyboardContainer = document.querySelector(".keyboard-container");
const keyboardContainerRows = keyboardContainer.querySelectorAll(
  ".keyboard-container__row"
);

// Theme switcher - Function

switcher.addEventListener("click", function switchTheme() {
  if (!body.classList.contains("body2") && !body.classList.contains("body3")) {
    body.classList.add("body2");
    h2.classList.add("h2_theme2");
    h6.classList.add("h6_theme2");
    p.forEach((el) => el.classList.add("p_theme2"));
    switcher.classList.add("calc-container__switch-button_background2");
    switchButton.classList.add("calc-container__switch-button2");
    keyboardContainer.classList.add("keyboard-container2");
    result.classList.add("screen2", "input2");

    keyboardContainerRows.forEach((keyboardContainerRow) => {
      const buttons = Array.from(
        keyboardContainerRow.querySelectorAll("button")
      );
      buttons.forEach((button) => {
        button.classList.add("keyboard-container__button2");
      });
      const delResetButton = Array.from(
        keyboardContainerRow.querySelectorAll(".button_delreset-color")
      );
      delResetButton.forEach((button) => {
        button.classList.add("button_delreset-color2");
      });
      const equalButton = Array.from(
        keyboardContainerRow.querySelectorAll(".button_equal-color")
      );
      equalButton.forEach((button) => {
        button.classList.add("button_equal-color2");
      });
    });

  } else if (
    body.classList.contains("body2") &&
    !body.classList.contains("body3")
  ) {
    body.classList.add("body3");
    h2.classList.add("h2_theme3");
    h6.classList.add("h6_theme3");
    p.forEach((el) => el.classList.add("p_theme3"));
    switcher.classList.add("calc-container__switch-button_background3");
    switchButton.classList.add("calc-container__switch-button3");
    keyboardContainer.classList.add("keyboard-container3");
    result.classList.add("screen3", "input3");

    keyboardContainerRows.forEach((keyboardContainerRow) => {
        const buttons = Array.from(
          keyboardContainerRow.querySelectorAll("button")
        );
        buttons.forEach((button) => {
          button.classList.add("keyboard-container__button3");
        });
        const delResetButton = Array.from(
          keyboardContainerRow.querySelectorAll(".button_delreset-color")
        );
        delResetButton.forEach((button) => {
          button.classList.add("button_delreset-color3");
        });
        const equalButton = Array.from(
          keyboardContainerRow.querySelectorAll(".button_equal-color")
        );
        equalButton.forEach((button) => {
          button.classList.add("button_equal-color3");
        });
      });

  } else if (
    body.classList.contains("body2") &&
    body.classList.contains("body3")
  ) {
    body.classList.remove("body2", "body3");
    h2.classList.remove("h2_theme2", "h2_theme3");
    h6.classList.remove("h6_theme2", "h6_theme3");
    p.forEach((el) => el.classList.remove("p_theme2", "p_theme3"));
    switcher.classList.remove(
      "calc-container__switch-button_background2",
      "calc-container__switch-button_background3"
    );
    switchButton.classList.remove(
      "calc-container__switch-button2",
      "calc-container__switch-button3"
    );
    keyboardContainer.classList.remove(
      "keyboard-container2",
      "keyboard-container3"
    );
    result.classList.remove("screen2", "screen3", "input2", "input3");

    keyboardContainerRows.forEach((keyboardContainerRow) => {
        const buttons = Array.from(
          keyboardContainerRow.querySelectorAll("button")
        );
        buttons.forEach((button) => {
          button.classList.remove("keyboard-container__button2", "keyboard-container__button3");
        });
        const delResetButton = Array.from(
          keyboardContainerRow.querySelectorAll(".button_delreset-color")
        );
        delResetButton.forEach((button) => {
          button.classList.remove("button_delreset-color3", "button_delreset-color3");
        });
        const equalButton = Array.from(
          keyboardContainerRow.querySelectorAll(".button_equal-color")
        );
        equalButton.forEach((button) => {
          button.classList.remove("button_equal-color2", "button_equal-color3");
        });
      });

  }
});
