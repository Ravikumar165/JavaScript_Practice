// java script part 7


// arrow function 
 const sum = (a,b) => {
    console.log(a+b);
 }


 // implicit return 
 const mul =(a,b)=>{
    a*b
 };


 // set interval
  let id = setInterval (() => {
    console.log("ravi kumar");
  }, 2000);
  console.log(id);

  let id2 = setInterval (() => {
    console.log("hello world");
  }, 4000);
  console.log(id2);// ye run hota rahega // stop karne ke liye clearInterval(id) karenge

//this with arrow function 

const student = {
    name: "Ravi kumar",
    age:21,
    marks:86,
    prop: this // global scope
    getName:function(){
        return this.name;
    },
  
};





