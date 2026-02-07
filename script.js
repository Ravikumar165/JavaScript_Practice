// Function in js 
function sayHello() {
    console.log("Hello, World!");
};
// Call the functionsayHello();
sayHello();


// Function  call printname
function printname() {
    console.log("My name is John Doe.");
}
printname();



// Function with parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");

// Function with return value

function add(a, b) {
    return a + b;
}
var result = add(5, 3);
console.log("The sum is: " + result);

// function loop
function countToFive() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
countToFive();

// Function with default parameters

function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!

// Function expression
var sayGoodbye = function() {
    console.log("Goodbye, World!");
};
sayGoodbye();

// function adult 
function Adult(age) {
    
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are not an adult.");
    }
}

Adult(20); 


// taking input from user check adult or not
function checkadult() {
    var age = prompt("Please enter your age:");
    if age >= 18 {
        console.log("You are an adult.");
    } else {
        console.log("You are not an adult.");
    }
}
checkadult();

// print poem
function printpoem() {
    console.log("twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}   
printpoem();

// PQ create  a function  to roll a dice & always display the value of the dice between 1 to 6
function rollDice() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled a " + diceValue);
}
rollDice();

// function with arguments
function calculateArea(radius) {
    let area = Math.PI * radius * radius;
    console.log("The area of the circle is: " + area.toFixed(2));
}
calculateArea(5);

