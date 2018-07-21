
var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    //alert('test');
    var firstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var fullName = firstNameValue + ' ' + lastNameValue;
    document.getElementById('fullName').value = fullName;
};

/*=================================================================*/

var additionValue = document.getElementById('addition');
    additionValue.onclick = function(){
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue+secondNumberValue;
    document.getElementById('result').value = result;
};

var subtractionValue = document.getElementById('subtraction');
    subtractionValue.onclick = function(){
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue-secondNumberValue;
    document.getElementById('result').value = result;
};

var multiplicationValue = document.getElementById('multiplication');
    multiplicationValue.onclick = function(){
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue*secondNumberValue;
    document.getElementById('result').value = result;
};

var divisionValue = document.getElementById('division');
    divisionValue.onclick = function(){
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue/secondNumberValue;
    document.getElementById('result').value = result;
};

var remainderValue = document.getElementById('remainder');
    remainderValue.onclick = function(){
    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var secondNumberValue = Number(document.getElementById('secondNumber').value);
    var result = firstNumberValue%secondNumberValue;
    document.getElementById('result').value = result;
};

/*=================================================================*/

