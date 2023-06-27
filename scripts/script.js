//input id find machine 
function getInputFieldValue(inputId) {
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldValueString = inputFieldValue.value;
    const inputValue = parseFloat(inputFieldValueString);

    if (inputValue < 0) {
        alert('Please give positive number');
    }
    else {
        return inputValue;
    }

}
//element id find machine 
function getElementFieldValue(elementId) {
    const elementFieldValue = document.getElementById(elementId);
    const elementFieldValueString = elementFieldValue.innerText;
    const elementValue = parseFloat(elementFieldValueString);
    return elementValue;

}
function getTotalExpanses() {
    //Expenses----------->
    const foodExpenses = getInputFieldValue('food-cost');
    const rentExpenses = getInputFieldValue('rent-cost');
    const clothesExpenses = getInputFieldValue('clothes-cost');
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;

    /* if (foodExpenses < 0 || rentExpenses < 0 || clothesExpenses < 0) {
        alert('Please give positive number')
    }
    else {

        return totalExpenses;
    } */
    return totalExpenses;
}
//set value funcation 
function setValue(totalId, totalValue) {
    const setValueField = document.getElementById(totalId);
    setValueField.innerText = totalValue;
}

function totalExpensesAndBalance() {
    const totalExpenses = getTotalExpanses();
    const incomeBalance = getInputFieldValue('income');
    const balance = incomeBalance - totalExpenses;

    if (isNaN(totalExpenses) || isNaN(incomeBalance)) {
        alert('please give number value')
    }
    else if (totalExpenses > incomeBalance) {
        alert('Please Dont Expenses Over your income')
    }
    else {
        setValue('total-expenses', totalExpenses)
        setValue('balance', balance)
    }
}

function totalSaveAndRemainingBalance() {
    const income = getInputFieldValue('income');
    const saveingAmount = (income * getInputFieldValue('savePercent')) / 100;

    const balance = getElementFieldValue('balance');
    const remainingBalance = balance - saveingAmount;
    if (balance < saveingAmount) {
        alert('You Cant Save Over your Balance');
    }
    else {
        if (isNaN(saveingAmount)) {
            alert('please give Number Value')
        }
        else {
            setValue('saving-amount', saveingAmount);
            setValue('remaining-balance', remainingBalance);
        }

    }
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    totalExpensesAndBalance()
})

document.getElementById('btn-save').addEventListener('click', function () {
    totalSaveAndRemainingBalance()
})