function appendToInput(value) {
    document.getElementById('input').value += value;
}

function clearInput() {
    document.getElementById('input').value = '';
}

function calculate() {
    var input = document.getElementById('input').value;
    var result;
    try {
        result = eval(input);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('input').value = result;
}
