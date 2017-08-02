(function(){

  var numberButton = document.querySelectorAll('.calc-number');
  var operatorButton = document.querySelectorAll('.calc-operator');
  var equalButton = document.querySelector('.calc-equals');
  var clearButton = document.querySelector('.calc-clear');
  var displayArea = document.querySelector('.calc-header');
  calculation = [];

  equalButton.addEventListener("click", calculate);
  clearButton.addEventListener("click", clearDisplay);

  for (var i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", pushNumber);
  }

  for (var i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", pushOperator);
  }


  function pushNumber() {
    var numValue = event.target.textContent;
    console.log(numValue);
    addNum = calculation.push(numValue);
    console.log(addNum);
    display(numValue);
  }
  
  function pushOperator() {
    var opValue = event.target.textContent;
    console.log(opValue);
    addOp = calculation.push(opValue);
    console.log(addOp);
    display(opValue);
  }

  function calculate() {
    var eqValue = event.target.textContent;
    console.log(eqValue);
  }

  function display(value) {
    displayArea.textContent = displayArea.textContent += value;
  }

  function clearDisplay() {
    displayArea.textContent = 0;
  }
}());
