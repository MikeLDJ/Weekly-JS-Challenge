var eventListener = document.querySelector('.challenge-container');
var textForm = document.querySelectorAll('input[type="text"]');
var numberForm = document.querySelector('input[type="number"]');
var titleRadio = document.querySelectorAll('input[name="title"]');
var invoiceRadio = document.querySelectorAll('input[name="invoice"]');
var date;

retrieveData();
hideUnnecessaryFormFields();

eventListener.addEventListener('click', formApp);
eventListener.addEventListener('keyup', formApp);

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

function retrieveData() {
  if (typeof(Storage) != 'undefined') {
    document.getElementById('pfirstname').value = localStorage.getItem("pfirstname");
    document.getElementById('plastname').value = localStorage.getItem("plastname");
    document.getElementById('ccompany').value = localStorage.getItem("ccompany");
    document.getElementById('cvatId').value = localStorage.getItem("cvatId");
    document.getElementById('cstreet').value = localStorage.getItem("cstreet");
    document.getElementById('cpostal').value = localStorage.getItem("cpostal");
    document.getElementById('ccity').value = localStorage.getItem("ccity");
    document.getElementById('amount').value = localStorage.getItem("amount");
    if (localStorage.getItem('titleMark') === 'titlePerson') {
      document.getElementById('titlePerson').checked = true;
    } else {
      document.getElementById('titleCompany').checked = true;
    }
    switch (localStorage.getItem('invoiceMark')) {
      case 'invoicePrinted':
        document.getElementById('invoicePrinted').checked = true;
        break;
      case 'invoicePaid':
        document.getElementById('invoicePaid').checked = true;
        break;
      case 'invoiceLate':
        document.getElementById('invoiceLate').checked = true;
        break;
      default:
        document.getElementById('invoiceDelivered').checked = true;
    }
    showLastUpdate();
  } else {
    document.querySelector('#lastUpdated').textContent = 'Sorry! No Web Storage support.';
  }
}
