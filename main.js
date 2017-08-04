(function(){

  var numberButton = document.querySelectorAll('.calc-number');
  var operatorButton = document.querySelectorAll('.calc-operator');
  var equalButton = document.querySelector('.calc-equals');
  var clearButton = document.querySelector('.calc-clear');
  var reverseNumButton = document.querySelector('.calc-reverse');
  var displayArea = document.querySelector('.calc-header');
  var currentNum = '';
  var calculation = [];
  var isCleared = false;
  var operator = '';
  var displayText = displayArea.textContent;

  equalButton.addEventListener("click", calculate);
  clearButton.addEventListener("click", clearDisplay);
  reverseNumButton.addEventListener("click", reverseNum);

  for (var i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", pushNumber);
  }

  for (var i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", pushOperator);
  }


  function display(value) {
    displayArea.textContent = value;
  }


  function pushNumber() {
    if (isCleared === true) {
      currentNum = '';
    }

    isCleared = false;
    currentNum += this.textContent;
    console.log(currentNum);
    display(currentNum);
  }

  function pushOperator(event) {
    if (currentNum != '') {
      operator = event.target.value;
      console.log(operator);
      calculation.push(Number(currentNum));
      console.log(calculation);
      currentNum = '';          
    } else {
      console.log('ya big dummy');
    }
  }

  function calculate() {  
    calculation.push(Number(currentNum));
    console.log(calculation);
    if (operator === 'add') {
      var answer = calculation[0] + calculation[1];      
    } else if (operator === "subtract") {
      var answer = calculation[0] - calculation[1];      
    } else if (operator === 'multiply') {
      var answer = calculation[0] * calculation[1];      
    } else if (operator === 'divide') {
      var answer = calculation[0] / calculation[1];      
    }
    console.log(answer);
    display(answer);
    return answer;
    calculation = '';
  }

  function reverseNum(){
    if (displayArea.textContent === 0) {
    } else if (displayArea.textContent > 0) {
      displayArea.textContent = -displayArea.textContent;
    } else if (displayArea.textContent < 0) {
      displayArea.textContent = +displayArea.textContent;
    }
  }

  function clearDisplay() {
    currentNum = 0;
    display(currentNum);
    isCleared = true;
    calculation = [];
    console.log('calc is cleared.');
  }

}());
