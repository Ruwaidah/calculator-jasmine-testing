window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = (document.getElementById("loan-amount").value = 2000);
  const years = (document.getElementById("loan-years").value = 5);
  const rate = (document.getElementById("loan-rate").value = 6);
  calculateMonthlyPayment({ amount, years, rate });
  updateMonthly(calculateMonthlyPayment({ amount, years, rate }));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const topNumber = values.amount * (values.rate / 100 / 12);
  const bottomNumber =
    1 - Math.pow(1 + values.rate / 100 / 12, -values.years * 12);
  const monthly = topNumber / bottomNumber;
  return monthly.toFixed(2);
  // updateMonthly(monthly);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector("#monthly-payment").innerText = monthly;
}
