var eventListener = document.querySelector('form');
var textForm = document.querySelectorAll('input[type="text"]');
var numberForm = document.querySelector('input[type="number"]');
var titleRadio = document.querySelectorAll('input[name="title"]');
var invoiceRadio = document.querySelectorAll('input[name="invoice"]');
var date;

retrieveData();
hideUnnecessaryFormFields();

eventListener.addEventListener('change', formApp);

function formApp() {
  hideUnnecessaryFormFields();
  storeData();
  showLastUpdate();
}

function hideUnnecessaryFormFields() {
  if (document.getElementById('titleCompany').checked) {
    document.querySelector('.customer-person').style.display = 'none';
    document.querySelector('.customer-company').style.display = 'block';
  } else {
    document.querySelector('.customer-company').style.display = 'none';
    document.querySelector('.customer-person').style.display = 'block';
  }
}

function updateDate() {
  date = new Date().toLocaleString('pl-PL');
  localStorage.setItem("updateDate", date);
}

function showLastUpdate() {
  document.querySelector('#lastUpdated').textContent = localStorage.getItem('updateDate');
}
function saveTextInput() {
  for (var input in textForm) {
    var inputName = textForm[input].id;
    var inputValue = textForm[input].value;
    if (inputValue !== "") {
      localStorage.setItem(inputName, inputValue);
      updateDate();
    }
  }
}

function saveAmountInput() {
  if (numberForm.value !== "") {
    localStorage.setItem(numberForm.id, numberForm.value);
    updateDate();
  }
}

function saveRadioInput() {
  for (var radio1 in titleRadio) {
    if (titleRadio[radio1].checked) {
      localStorage.setItem("titleMark", titleRadio[radio1].id);
      updateDate();
    }
  }
  for (var radio2 in invoiceRadio) {
    if (invoiceRadio[radio2].checked) {
      localStorage.setItem("invoiceMark", invoiceRadio[radio2].id);
      updateDate();
    }
  }
}

function storeData() {
  saveTextInput();
  saveAmountInput();
  saveRadioInput();
}

function isRadioInput(o) {
  if (o !== null && o.type === 'radio') {
    return true;
  }
  return false;
}

function isTextInput(t) {
  if (t !== null && (t.type === 'text' || 'number')) {
    return true;
  }
  return false;
}

function retrieveData() {
  if (typeof(Storage) != 'undefined') {
    var element;
    var elementRadio;
    for (var fieldName in localStorage) {
      element = document.getElementById(fieldName);
      elementRadio = document.getElementById(localStorage[fieldName]);
      if (localStorage[fieldName] !== "" && fieldName !== "undefined") {
        if (isTextInput(element)) {
          element.value = localStorage.getItem(fieldName);
        } else if (isRadioInput(elementRadio)) {
          elementRadio.checked = true;
        }
      }
    }
    showLastUpdate();
  } else {
    document.querySelector('#autoSaveInfo').textContent = 'Your browser does not support Auto-Save option.';
    document.querySelector('#lastUpdated').textContent = 'Sorry! No Web Storage support.';
  }
}
