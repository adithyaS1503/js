const heading = document.querySelector("h1")
heading.textContent="Counter"

let device1 = "Thinkpad"
let device2 = 'Legion 5 Pro'

device = device1+" & "+device2
console.log("My two devices are",device)

// Counter

var clicks = 0;
let button = document.getElementById('clicker-button');
let countText = document.getElementById('count-text');

const colors = ['green','red','blue','black','pink','orange','yellow'];

button.onclick = function(){
    clicks++;
    countText.innerHTML = clicks;
    console.log('Button clicked')
    
    // gen code
    const colIndex = clicks % colors.length;
    countText.style.color = colors[colIndex]

    if(clicks>20){
        alert("You have too much time on your hands");
    }
}