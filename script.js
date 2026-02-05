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

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let list of matrix) {
    for (letnum of list) {
        console.log(num);
    }
}