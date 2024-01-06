let isNegative = false;

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
    isNegative = false;
}

function toggleNegative() {
    let result = document.getElementById('result').value;

    if (result !== '' && result !== '0') {
        if (isNegative) {
            document.getElementById('result').value = result.substring(1);
            isNegative = false;
        } else {
            document.getElementById('result').value = '-' + result;
            isNegative = true;
        }
    }
}

function calculateResult() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
    isNegative = false;
}

document.getElementById('equal').addEventListener('click', () => {
    calculateResult();
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calculateResult();
    }
});

function appendDecimal(decimal) {
    const result = document.getElementById('result');
    if (!result.value.includes(decimal)) {
        result.value += decimal;
    }
}
