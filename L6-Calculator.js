let result = Number(localStorage.getItem('result'));
let calculation = '';

function addeve(str) {
    calculation+=str;
    //console.log(calculation);
    document.querySelector('.display-values').innerHTML = calculation;
}

function cal() {
    result=eval(calculation)
    //calculation=result;
    //console.log(result);
    document.querySelector('.display-values').innerHTML = result;
    localStorage.setItem('result', String(result));
}

function displayDefault() {
    document.querySelector('.display-values').innerHTML = result;
}

function clr() {
    calculation = '';
    result=0;
    document.querySelector('.display-values').innerHTML = calculation + '<br>';
    
    localStorage.setItem('result', String(result));
}