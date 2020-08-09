let amount = document.querySelector('#amount');
let interest = document.querySelector('#interest');
let years = document.querySelector('#years');
const form = document.querySelector('.loan-form');
const img = document.querySelector('#loading');
const results = document.querySelector('#results');

let totalPay = document.querySelector('#total-payment');
let monthlyPay = document.querySelector('#monthly-payment');
let totalInt = document.querySelector('#total-interest');

let monthlyPayment;

form.addEventListener('submit', calcResult);

function calcResult(e) {
    e.preventDefault();

    let principal = parseFloat(amount.value);
    let calcInterest = parseFloat(interest.value) / 100 / 12;
    let numPay = parseFloat(years.value) * 12;

    // ANNUITY FORMULA
    monthlyPayment = ((principal * calcInterest) / (1 - Math.pow((1 + calcInterest), -numPay)));

    // SHOW SPINNER AND HIDE RESULR BLOCK
    img.style.display = 'block';
    results.style.display = 'none';

    setTimeout(() => {
        img.style.display = 'none';
    }, 2000);

    if(isFinite(monthlyPayment)) {
        totalPay.value = (monthlyPayment * numPay).toFixed(2);
        monthlyPay.value = monthlyPayment.toFixed(2);
        totalInt.value = (monthlyPayment * numPay - principal).toFixed(2);
        setTimeout(() => {
            results.style.display = 'block';
        }, 2000);
    } else {
        setTimeout(() => {
            showError('Please check your numbers');
        }, 2000);
    }

    // NO NUMBERS ARE IN INPUTS
    function showError(error) {
        const errorDiv = document.createElement('div');
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');

        // ALERT BLOCK FOR 3 SEC
        errorDiv.className = 'alert alert-danger';
        errorDiv.appendChild(document.createTextNode(error));
        card.insertBefore(errorDiv, heading);
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }

    
}







