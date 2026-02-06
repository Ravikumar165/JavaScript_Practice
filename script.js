// // let str = "ilovecoding";
// // str.slice(4,9); // "ecodi"
// // str.indexOf("lo"); // 2
// // str.replace("coding", "JavaScript");
// // let students = ["John", "Jane", "Jim", "Jill"];
// let nums =[2,4,6,8,10];
// nums.push(12); // [2,4,6,8,10,12] 
// print all odd number ( 1 to 15)
// for(let i=1; i<=15; i=i+2 ){
//     console.log(i);
// } 
// print even number ( 2 to 20)
// for(let i=2; i<=20; i=i+2 ){
//     console.log(i);
// } 
//print backward from 10 to 2   
// for(let i=10; i>=2; i=i-2 ){
//     console.log(i);
// }
// print the multiplication table of 5
// for(let i=1; i<=50; i=i+5 ){
//     console.log(i);
// }  
alert("JS connected!");

// const favmovies = "dhoom";
// console.log("Welcome to the movie guessing game!");

// let userguess = prompt("Guess the movie?");

// while (userguess !== favmovies && userguess !== "quit") {
//     console.log("Wrong guess, try again!");
//     userguess = prompt("Guess the movie?");
// }

// if (userguess === favmovies) {
//     console.log("Congratulations! You guessed it right!");
// }


// break keyword
// let i = 1;
// while (i <= 5) {
//     console.log(i); 
//     if (i === 3) {
//         break;
//     }
//     i++;
// }


// loops in array
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// for...of loop
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
for (let fruit of fruits) {
    console.log(fruit);
}


// neasted for of loop

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let list of matrix) {
//     for (letnum of list) {
//         console.log(num);
//     }
// }

// js ojcects literals
let myInformation = {
    name: "Ravi Kumar",
    age: 25,
    city: "Delhi",
    profession: "Software Developer",
};


//pq  threads /twitter posts
const post = {
    username: "@Ravi Kumar",
    content: "Hello, this is my first post!",
    timestamp: "2024-06-01T12:00:00Z",
    likes: 50,
    Reposts: 10,
    comments: [["thanks"],[ "great post!"], [ "wow "],["Great post!", "Thanks for sharing!"]], 
    tags : ["@ravi", "@pawan", "@sonu"],    
};

// get values
 let student = {
    name: "Ravi",
    marks: 85.5,
    
};

//prime number check


let num = 17;
let isPrimeNum = true;
if (num <= 1) {
    isPrimeNum = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrimeNum = false;
            break;
        }
    }
}

// prime number user input


let number = parseInt(prompt("Enter a number:"));
let isPrime = true; 

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    } 
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}



// object of objects (neasted objects)

let students = {
    student1: { name: "Ravi", age: 25, city: "Delhi" },
    student2: { name: "Pawan", age: 22, city: "Mumbai" },
    student3: { name: "Sonu", age: 24, city: "Bangalore" },
};


// object of arrays
const classinfo = [
    {
       name: "Ravi Kumar",
       age: 25,
       city: "Delhi"
    },
    {
        name: "Pawan Kumar",
        age: 22,
        city: "Mumbai"
    },
    {
        name: "Sonu Kumar",
        age: 24,
        city: "Bangalore"
    },
];   

// math object

// generate random number between 1 and 100
Math.floor(Math.random() * 100) + 1; // generates a random number between 1 and 100 


// generate random number between 1 and 10
Math.floor (Math.random() * 10 ) + 1;


// guessing game with random number 1 to max number

 const max =  prompt("Enter the maximum number:");

const randomNum = Math.floor(Math.random() * max) + 1;
 let guess = prompt("Guess the number between 1 and " + max + ":");
while (parseInt(guess) !== randomNum) {
    guess = prompt("Wrong guess! Try again. Guess the number between 1 and " + max + ":");
}   
alert("Congratulations! You guessed the number " + randomNum + "!");
    