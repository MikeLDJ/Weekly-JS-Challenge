var eventListener = document.querySelector('.challenge-container');
var updateInfo = document.querySelector('#lastUpdated');
var date = new Date().toLocaleString('pl-PL');
var pfirstname = document.getElementById('pfirstname').value;
var plastname = document.getElementById('plastname').value;
var ccompany = document.getElementById('ccompany').value;
var cvatId = document.getElementById('cvatId').value;
var cstreet = document.getElementById('cstreet').value;
var cpostal = document.getElementById('cpostal').value;
var ccity = document.getElementById('ccity').value;
var amount = document.getElementById('amount').value;
var titlePerson = document.getElementById('titlePerson').value;
var titleCompany = document.getElementById('titleCompany').value;
var invoicePrinted = document.getElementById('invoicePrinted').value;
var invoicePaid = document.getElementById('invoicePaid').value;
var invoiceLate = document.getElementById('invoiceLate').value;
var invoiceDelivered = document.getElementById('invoiceDelivered').value;

eventListener.addEventListener('click', saveForm);
eventListener.addEventListener('keyup', saveForm);

function saveForm() {
  hideUnnecessaryFormFields();
  storeData();
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
  localStorage.setItem("updateDate", date);
  localStorage.setItem("pfirstname", pfirstname);
  localStorage.setItem("plastname", plastname);
  localStorage.setItem("ccompany", ccompany);
  localStorage.setItem("cvatId", cvatId);
  localStorage.setItem("cstreet", cstreet);
  localStorage.setItem("cpostal", cpostal);
  localStorage.setItem("ccity", ccity);
  localStorage.setItem("amount", amount);
  localStorage.setItem("titlePerson", titlePerson);
  localStorage.setItem("titleCompany", titleCompany);
  localStorage.setItem("invoicePrinted", invoicePrinted);
  localStorage.setItem("invoicePaid", invoicePaid);
  localStorage.setItem("invoiceLate", invoiceLate);
  localStorage.setItem("invoiceDelivered", invoiceDelivered);
}

if (typeof(Storage) != 'undefined') {
    updateInfo.textContent = localStorage.getItem('updateDate');
    pfirstname.textContent = localStorage.getItem("pfirstname");
    plastname.textContent = localStorage.getItem("plastname");
    ccompany.textContent = localStorage.getItem("ccompany");
    cvatId.textContent = localStorage.getItem("cvatId");
    cstreet.textContent = localStorage.getItem("cstreet");
    cpostal.textContent = localStorage.getItem("cpostal");
    ccity.textContent = localStorage.getItem("ccity");
    amount.textContent = localStorage.getItem("amount");
    titlePerson.textContent = localStorage.getItem("titlePerson");
    titleCompany.textContent = localStorage.getItem("titleCompany");
    invoicePrinted.textContent = localStorage.getItem("invoicePrinted");
    invoicePaid.textContent = localStorage.getItem("invoicePaid");
    invoiceLate.textContent = localStorage.getItem("invoiceLate");
    invoiceDelivered.textContent = localStorage.getItem("invoiceDelivered");
} else {
    updateInfo.textContent = 'Sorry! No Web Storage support.';
}
