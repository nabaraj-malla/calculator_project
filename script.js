var operand1 = 0;
var operand2 = 0;
var operator = null;
var keys = document.getElementsByClassName('keyElement');
var displayId = document.getElementById('display-board');
for(let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function() {
    var value = this.getAttribute('data-value');
    if (value == '+') {
        operator = '+';
        operand1 = parseFloat(displayId.innerText);
        displayId.innerText = null;
    } else if(value == '-'){
        operator = '-';
        operand1 = parseFloat(displayId.innerText);
        displayId.innerText = null;
    } else if(value == '*') {
        operator = '*';
        operand1 = parseFloat(displayId.innerText);
        displayId.innerText = null;
    } else if(value == '/') {
        operator = '/';
        operand1 = parseFloat(displayId.innerText);
        displayId.innerText = null;
    }
    else if(value == '='){
        operand2 = parseFloat(displayId.innerText);
        displayId.innerText = eval(operand1+" "+operator+" "+operand2);
    } else if(value == 'AC') {
        displayId.innerHTML = null;
    } else if(value == 'DEL') {
        let currentValue = parseFloat(displayId.innerText);
        currentValue = Math.floor(currentValue / 10);
        displayId.innerText = currentValue;
    } else if(value == '%') {
        let currentValue = parseFloat(displayId.innerText);
        displayId.innerText = currentValue / 100;
        // displayId.innerText = null;
    }
     else {
        displayId.innerText += value;
    }
    })
}