class Calculator {
  constructor() {
    this.screenElement = document.querySelector("#screen");
    this.rows = document.querySelectorAll(".keyboard-container__row");

    this.rows.forEach((row) => {
      row.addEventListener("click", this.userInput.bind(this));
    });
  }

  userInput(event) {
    if (event.target.dataset.number)
      this.inputNumber(event.target.dataset.number);
    if (event.target.dataset.operation)
      this.inputOperation(event.target.dataset.operation);
  }

  inputNumber(number) {
    this.screenElement.value += number;

    // const currentInput = this.screenElement.value;
    // const lastCharacter = currentInput[currentInput.length - 1];

    // if (lastCharacter === "." && number === ".") {
    //   // If the last character is already a decimal point and the user tries to input another decimal point
    //   return; // Do not append the additional decimal point
    // }

    // if (currentInput === "" && number !== ".") {
    //   // If the current input is "0" and the user tries to input a digit other than a decimal point
    //   this.screenElement.value = number; // Replace the current input with the new digit
    // } else if (currentInput === "" && number === ".") {
    //   // If the current input is empty and the user tries to input a decimal point
    //   return; // Set the input as "0." to start a decimal number
    // }
    // else if (!/^\d+(\.\d*)?$/.test(currentInput + number)) {
    //   // If the current input and the new number do not form a valid decimal number
    //   return; // Do not append the new number
    // } else {
    //   this.screenElement.value += number;
    // }
  }

  inputOperation(operationName) {
    // let operation = null;
    let operators = ["+", "-", "/", "*", "."];

    const isOpsNotIncluded = (ops) => {
      let lastSymbol = this.screenElement.value.slice(
        this.screenElement.value.length - 1
      );
      if (!ops.includes(lastSymbol)) {
        return true;
      } else {
        return false;
      }
    };

    if (operationName === "add") {
      if (this.screenElement.value !== "") {
        if (isOpsNotIncluded(operators)) {
          // operation = "+";
          // this.screenElement.value += "+";
          // split + join instead of "="
          this.screenElement.value += "+";
        }
      }
    }

    if (operationName === "subtract") {
      if (this.screenElement.value !== "") {
        if (isOpsNotIncluded(operators)) {
          // operation = "-";
          this.screenElement.value += "-";
        }
      }
    }

    if (operationName === "divide") {
      if (this.screenElement.value !== "") {
        if (isOpsNotIncluded(operators)) {
          // operation = "/";
          this.screenElement.value += "/";
        }
      }
    }

    if (operationName === "multiply") {
      if (this.screenElement.value !== "") {
        if (isOpsNotIncluded(operators)) {
          // operation = "*";
          this.screenElement.value += "*";
        }
      }
    }

    if (operationName === ".") {
      if (this.screenElement.value !== "") {
        if (isOpsNotIncluded(operators)) {
          // operation = ".";
          this.screenElement.value += ".";
        }
      }
    }

    if (operationName === "equals") {
      let currentResult = this.screenElement.value;
      try {
        let answer = math.evaluate(currentResult);
        this.screenElement.value = answer;
      } catch (error) {
        currentResult = "Error";
      }
    }

    if (operationName === "del") {
      let currentResult = this.screenElement.value;
      this.screenElement.value = currentResult.substring(
        0,
        currentResult.length - 1
      );
    }

    if (operationName === "reset") {
      this.screenElement.value = "";
    }
  }
}

export default Calculator;
