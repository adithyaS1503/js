let field2 = document.getElementById('field2');
let result = document.getElementById('result');
let button = document.getElementById('calc');
let operation = document.getElementById('operation')

subt = document.getElementById('subtract');
mult = document.getElementById('multiply');
modulo = document.getElementById('modulo');

function outputResult(answer){
    console.log("Operations completed.")
    result.textContent = answer;
}