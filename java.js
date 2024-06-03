let currentValue = "";
let previousValue = "";
let operator = " ";
document.addEventListener("DOMContentLoaded", function(){

    let clear = document.querySelector(".clear");
    let equals = document.querySelector(".equals");
    
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let upperDisplay = document.querySelector(".upper");
    let lowerDisplay = document.querySelector(".lower");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        lowerDisplay.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        upperDisplay.textContent = previousValue + " " + operator;
        lowerDisplay.textContent = currentValue;
    }))

    clear.addEventListener("click", function(e){
        lowerDisplay.textContent = "0";
        upperDisplay.textContent = "0";
        currentValue = '';
        previousValue = '';
    })   

    equals.addEventListener("click", function(){
        calculate()
        lowerDisplay.textContent = previousValue;
        upperDisplay.textContent = "";
        currentValue = previousValue;
    });


})

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function handleNumber(num){
    if(currentValue.length < 8)
        currentValue += num;
}

function calculate(){    
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    console.log(previousValue);
    console.log(currentValue);

    switch(operator){
        case '+':
            previousValue += currentValue;
            break;
        case '-':
            previousValue -= currentValue;
            break;
        case '*':
            previousValue *= currentValue;
            break;
        case '/':
            previousValue /= currentValue;
            break;
    }

    previousValue = roundOff(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function roundOff(value){
    return Math.round(value * 100000000) / 100000000;
}
