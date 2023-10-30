const tipForm = document.getElementById('tipForm');
const billTotalInput = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipAmountInput = document.getElementById('tipAmount');
const totalWithTipInput = document.getElementById('totalWithTip');

tipForm.addEventListener('input', function () {
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = parseInt(tipSlider.value);

    // Set tip percentage based on slider position
    tipPercentageInput.value = tipPercentage + "%";

    if (!isNaN(billTotal) && !isNaN(tipPercentage)) {
        const tipAmount = (billTotal * tipPercentage) / 100;
        const totalWithTip = billTotal + tipAmount;

        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
    } else {
        // Handle invalid input (non-numeric value)
        // Show error message or disable calculation button
        tipAmountInput.value = '';
        totalWithTipInput.value = '';
    }
});

// Trigger the input event initially to set default values
tipForm.dispatchEvent(new Event('input'));
