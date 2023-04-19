class Calculator {
  constructor() {
    this.screenElement = document.querySelector("#screen");
    this.rows = document.querySelectorAll(".keyboard-container__row");
    this.isDotAlreadyThere = false;

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
    if (this.screenElement.value !== "Error") {
      if (this.screenElement.value === "") {
        this.screenElement.value = "0";
      } else if (this.screenElement.value === "0") {
        this.screenElement.value = "";
      }
    } else if (this.screenElement.value === "Error") {
      this.screenElement.value = "";
    }
    this.screenElement.value += number;
  }

  inputOperation(operationName) {
    let operators = ["+", "-", "/", "*", "."];
    let isSecondOperator = operators.findIndex((o) => {
      return this.screenElement.value.includes(o);
    });

    const isLastSymbolNotOps = (ops) => {
      let lastSymbol = this.screenElement.value.slice(
        this.screenElement.value.length - 1
      );
      if (!ops.includes(lastSymbol)) {
        return true;
      } else {
        return false;
      }
    };

    if (operationName === "reset") {
      this.screenElement.value = "0";
      isSecondOperator = -1;
      this.isDotAlreadyThere = false;
    }

    if (operationName === "del") {
      if (this.screenElement.value === "0") {
        return;
      }
      if (this.screenElement.value != "Error") {
        let currentResult = this.screenElement.value;
        this.screenElement.value = currentResult.substring(
          0,
          currentResult.length - 1
        );
        isSecondOperator = -1;
        this.isDotAlreadyThere = false;
        if (this.screenElement.value === "") {
          this.screenElement.value = "0";
        }
      } else {
        this.screenElement.value = "0";
      }
    }

    if (operationName === ".") {
      if (this.screenElement.value !== "Error") {
        if (
          isLastSymbolNotOps(operators) &&
          isLastSymbolNotOps(["."]) &&
          !this.isDotAlreadyThere
        ) {
          this.screenElement.value += ".";
          isSecondOperator = -1;
          this.isDotAlreadyThere = true;
        }
      }
    }

    if (operationName === "equals" || isSecondOperator !== -1) {
      if (isLastSymbolNotOps(operators) && isLastSymbolNotOps(["."])) {
        let currentResult = this.screenElement.value;
        if (currentResult === "Error") {
          return;
        }
        let answer = math.evaluate(currentResult);
        if (String(answer) === "Infinity" || String(answer) === "NaN") {
          answer = "Error";
          this.screenElement.value = answer;
        }
        if (
          !Number.isInteger(answer) &&
          String(answer).length > 4 &&
          String(answer) !== "Error"
        ) {
          console.log(answer);
          this.screenElement.value = answer.toFixed(3);
        } else {
          this.screenElement.value = answer;
        }
        isSecondOperator = -1;
      }
    }

    if (operationName === "add" && this.screenElement.value !== "Error") {
      if (isLastSymbolNotOps(operators)) {
        this.screenElement.value += "+";
        this.isDotAlreadyThere = false;
      }
    }

    if (operationName === "subtract" && this.screenElement.value !== "Error") {
      if (isLastSymbolNotOps(operators)) {
        this.screenElement.value += "-";
        this.isDotAlreadyThere = false;
      }
    }

    if (operationName === "divide" && this.screenElement.value !== "Error") {
      if (isLastSymbolNotOps(operators)) {
        this.screenElement.value += "/";
        this.isDotAlreadyThere = false;
      }
    }

    if (operationName === "multiply" && this.screenElement.value !== "Error") {
      if (isLastSymbolNotOps(operators)) {
        this.screenElement.value += "*";
        this.isDotAlreadyThere = false;
      }
    }
  }
}

export default Calculator;
