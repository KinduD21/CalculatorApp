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
  }

  inputOperation(operationName) {
    let operation = null;
    let operators = ["+", "-", "/", "x"];

    const isOpsNotIncludes = (ops) => {
      let lastSymbol = this.screenElement.value.slice(this.screenElement.value.length - 1);
      if (!ops.includes(lastSymbol)) {
        return true;
      } else {
        return false;
      }
    };

    if (operationName === "add") {
      if (this.screenElement.value !== "") {
        if (isOpsNotIncludes(operators)) {
          operation = "+";
          // this.screenElement.value += "+";
          // split + join instead of "="
          this.screenElement.value.slice(this.screenElement.value.length - 1) = "+";
        }
      }
    }

    if (operationName === "subtract") {
      if (this.screenElement.value !== "") {
        if (isOpsNotIncludes(operators)) {
          operation = "-";
          this.screenElement.value += "-";
        }
      }
    }

    if (operationName === "divide") {
      if (this.screenElement.value !== "") {
        if (isOpsNotIncludes(operators)) {
          operation = "/";
          this.screenElement.value += "/";
        }
      }
    }

    if (operationName === "multiply") {
      if (this.screenElement.value !== "") {
        if (isOpsNotIncludes(operators)) {
          operation = "*";
          this.screenElement.value += "x";
        }
      }
    }
  }
}

export default Calculator;
