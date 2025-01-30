const head = document.getElementById('heading');
const button = document.getElementById('button1');
head.textContent = "Hello";

function doSomething(){
    console.log(Math.random());
}

const arrowFunction = () =>{
    console.log("Arrow Function called");
}


button.addEventListener('click', arrowFunction);