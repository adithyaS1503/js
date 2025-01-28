// Define an object with functions
const myFunctions = {
    sayHello: () => console.log("Hello!"),
    sayGoodbye: () => console.log("Goodbye!"),
    sayRandom: () => console.log("This is random!"),
    sayThankYou: () => console.log("Thank you!"),
};

// Get the keys of the object (function names)
const functionNames = Object.keys(myFunctions);

// Pick a random key
const randomKey = functionNames[Math.floor(Math.random() * functionNames.length)];

// Call the random function
myFunctions[randomKey]();
