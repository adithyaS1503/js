let field2 = document.getElementById('field2');
let result = document.getElementById('result');
let button = document.getElementById('calc');
let operation = document.getElementById('operation')

subt = document.getElementById('subtract');
mult = document.getElementById('multiply');
modulo = document.getElementById('modulo');

let prefix = "Operation is: "
result.textContent = "";



let answer = 0;

button.onclick = function(){
    let field1 = document.getElementById('field1').value;
    let field2 = document.getElementById('field2').value;
    // let field1 = Number(document.getElementById('field1').value);
    // let field2 = Number(document.getElementById('field2').value);
    operation.textContent = prefix + field1 + " + " + field2
    answer = Number(field1) + Number(field2);
    console.log(answer, typeof answer);
    result.textContent = answer;
}

subt.onclick = function(){
    let field1 = document.getElementById('field1').value;
    let field2 = document.getElementById('field2').value;
    operation.textContent = prefix + field1 + " - " + field2
    answer = Number(field1) - Number(field2);
    console.log(answer, typeof answer);
    result.textContent = answer;
}

mult.onclick = function(){
    let field1 = document.getElementById('field1').value;
    let field2 = document.getElementById('field2').value;
    operation.textContent = prefix + field1 + " * " + field2
    answer = Number(field1) * Number(field2);
    console.log(answer, typeof answer);
    result.textContent = answer;
}

modulo.onclick = function(){
    let field1 = document.getElementById('field1').value;
    let field2 = document.getElementById('field2').value;
    operation.textContent = prefix + field1 + " % " + field2
    console.log("checking if valid")
    if(Number(field2) == 0)
    {
            alert("can't divide a number by 0")
    }
    answer = Number(field1) % Number(field2);
    console.log(answer, typeof answer);
    result.textContent = answer;
}