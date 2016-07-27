var enteredValue = document.querySelector('.input-value');
var result = document.querySelector('.result');
var eventListener = document.querySelector('.challenge-container');
var lenCalc = {
    milimeters: 1000,
    centimeters: 100,
    decimeters: 10,
    meters: 1,
    kilometers: 0.001,
    inches: 39.370079,
    foot: 3.280840,
    yards: 1.093613,
    miles: 0.000621
};
var lenIn = '';
var lenOut = '';

eventListener.addEventListener('click', modifyResult);
eventListener.addEventListener('keyup', modifyResult);

function isNumeric(x) {
  return !Number.isNaN(Number(x));
}

function calculate(y) {
  if(document.getElementById('in-milimeters').checked) {
    lenIn = lenCalc.milimeters;
  } else if(document.getElementById('in-centimeters').checked) {
    lenIn = lenCalc.centimeters;
  } else if(document.getElementById('in-decimeters').checked) {
    lenIn = lenCalc.decimeters;
  } else if(document.getElementById('in-meters').checked) {
    lenIn = lenCalc.meters;
  } else if(document.getElementById('in-kilometers').checked) {
    lenIn = lenCalc.kilometers;
  } else if(document.getElementById('in-inches').checked) {
    lenIn = lenCalc.inches;
  } else if(document.getElementById('in-foot').checked) {
    lenIn = lenCalc.foot;
  } else if(document.getElementById('in-yards').checked) {
    lenIn = lenCalc.yards;
  } else {
    lenIn = lenCalc.miles;
  }

  if(document.getElementById('out-milimeters').checked) {
    lenOut = lenCalc.milimeters;
  } else if(document.getElementById('out-centimeters').checked) {
    lenOut = lenCalc.centimeters;
  } else if(document.getElementById('out-decimeters').checked) {
    lenOut = lenCalc.decimeters;
  } else if(document.getElementById('out-meters').checked) {
    lenOut = lenCalc.meters;
  } else if(document.getElementById('out-kilometers').checked) {
    lenOut = lenCalc.kilometers;
  } else if(document.getElementById('out-inches').checked) {
    lenOut = lenCalc.inches;
  } else if(document.getElementById('out-foot').checked) {
    lenOut = lenCalc.foot;
  } else if(document.getElementById('out-yards').checked) {
    lenOut = lenCalc.yards;
  } else {
    lenOut = lenCalc.miles;
  }
  return y * lenOut / lenIn;
}

function modifyResult() {
  if (isNumeric(enteredValue.value)) {
    result.textContent = calculate(enteredValue.value).toPrecision(12);
  } else {
    result.textContent = 'enter valid number';
  }
}
