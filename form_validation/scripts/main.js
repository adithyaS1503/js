submitButton = document.getElementById('submitButton');

submitButton.onclick = function(){
    let userName = document.querySelector('#userName').value;
    let userContact = document.querySelector('#userContact').value;
    let userAddress = document.querySelector('#userAddress').value;

    // userName can be empty
    if((userAddress == "") || (userContact == "") || (userName == "")){
        alert("Fields are empty")
    }
    else
    {
        alert(`Name: ${userName}\nContact: ${userContact}\nAddress: ${userAddress}`);
    }
}   

function consolePlay(){
    console.log("Testing")
}

// Why declare and initialize the fields inside?