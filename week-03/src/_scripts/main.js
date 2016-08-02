var eventListener = document.querySelector('.challenge-container');
var updateInfo = document.querySelector('#lastUpdated');
var formArray = [ "date", "pfirstname", "plastname", "ccompany", "cvatId", "cstreet", "cpostal", "ccity", "amount", "titlePerson", "titleCompany", "invoicePrinted", "invoicePaid", "invoiceLate", "invoiceDelivered"];

eventListener.addEventListener('click', formApp);
eventListener.addEventListener('keyup', formApp);

function formApp() {
  fillForm();
  hideUnnecessaryFormFields();
  storeData();
}

function fillForm() {
  for (var formField in formArray) {
    if (localStorage.getItem(formField) !== "") {
      formField.textContent = localStorage.getItem(formField).value;
    }
  }
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

function storeData() {
  for (var formField in formArray) {
    if (document.getElementById(formField).value !== "") {
      localStorage.setItem(formField, document.getElementById(formField).value);
      date = new Date().toLocaleString('pl-PL');
    }
  }
}

if (typeof(Storage) != 'undefined') {
  updateInfo.textContent = localStorage.getItem('updateDate');
} else {
  updateInfo.textContent = 'Sorry! No Web Storage support.';
}
