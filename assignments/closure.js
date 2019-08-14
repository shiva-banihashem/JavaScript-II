// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// This function returns a function when invoked creates a power of 3 and returns a product variable
const powerof3 = () => {
  let a =3;
  console.log("a:" + a)
  return function() { 
    
    return a=a*3;};
};
newpower=powerof3();
newpower();   //9
newpower();   //27

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const counter = () => {
  let counter =0;
  
  return function() { 
    
    return ++counter;};
};
newCounter=counter();
newCounter();       //1
newCounter();       //2



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
//const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
//};
const counterFactory = () => {
  let counter =0;
  let obj = {
    increment:() => { return ++counter;},
    decrement:() => {return --counter;}
     };
    
    return obj; 
  
};
newobj=counterFactory();
newobj.increment();     //1
newobj.increment();     //2
newobj.decrement();     //1
