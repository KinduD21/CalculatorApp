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

  // check if the last character is an operator
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
