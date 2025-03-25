const form = document.querySelector('.calculator-container form');
const amountInputError = document.querySelector('.amount-input-error');
const amountInputError2 = document.querySelector('.error2');
const tipAmount = document.querySelector('.tip-amount');
const totalAmount = document.querySelector('.total-amount');
const billAmount = document.getElementById('amount');
const peopleAmount = document.getElementById('number-of-people');
const tipButtons = document.querySelectorAll('.tip-buttons');
const customTip = document.getElementById('tip');
const resetButton = document.querySelector('.reset-button');

let bill = 0;
let persons = 0;
let tip = 0;
let reset = 0;

const formSubmitHideErrorBill = () => {
  amountInputError.style.display = 'none';
};
const formSubmitBill = () => {
  const data = new FormData(form);
  const amount = Number(data.get('amount'));

  if (reset === 1) {
    billAmount.value = 0;
    return;
  }

  if (amount <= 0) {
    amountInputError.style.display = 'block';
    totalAmount.textContent = '$0.00';
    return;
  } else {
    bill = amount;
  }

  formResults();
};

const formSubmitHideErrorPeople = () => {
  amountInputError2.style.display = 'none';
};
const formSubmitPeople = () => {
  const data = new FormData(form);
  const nrOfPeople = Number(data.get('amount-people'));

  if (reset === 1) {
    peopleAmount.value = 0;
    return;
  }

  if (nrOfPeople <= 0) {
    amountInputError2.style.display = 'block';
    totalAmount.textContent = '$0.00';
    return;
  } else {
    persons = nrOfPeople;
  }

  formResults();
};

billAmount.addEventListener('focus', formSubmitHideErrorBill);
billAmount.addEventListener('blur', formSubmitBill);
peopleAmount.addEventListener('focus', formSubmitHideErrorPeople);
peopleAmount.addEventListener('blur', formSubmitPeople);

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

const formResults = () => {
  if (bill === 0) {
    formSubmitBill();
    // totalAmount.textContent = '$0.00';
    bill = 0;
    return;
  }

  if (persons === 0) {
    formSubmitPeople();
    // totalAmount.textContent = '$0.00';
    persons = 0;
    return;
  }

  resetButton.disabled = false;

  tipAmount.textContent = `$${(tip / persons).toFixed(2)}`;
  totalAmount.textContent = `$${((bill + tip) / persons).toFixed(2)}`;
};

for (let i = 0; i < tipButtons.length; i++) {
  tipButtons[i].addEventListener('click', () => {
    if (bill === 0 || persons === 0) {
      formResults();
      return;
    }
    tip = (tipButtons[i].value / 100) * bill;
    formResults();
  });
}

const addCustomTip = () => {
  if (bill === 0 || persons === 0) {
    formResults();
    return;
  }

  if (customTip.value > 0) {
    tip = (customTip.value / 100) * bill;
    formResults();
  }
};

customTip.addEventListener('blur', addCustomTip);

const resetAll = () => {
  reset = 1;
  formSubmitBill();
  formSubmitPeople();
  bill = 0;
  tip = 0;
  persons = 0;
  customTip.value = 'Custom';
  tipAmount.textContent = '$0.00';
  totalAmount.textContent = '$0.00';
  resetButton.disabled = true;
  reset = 0;
};
resetButton.addEventListener('click', resetAll);
