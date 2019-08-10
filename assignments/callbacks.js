// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}


getLength(items,function(length){
      console.log(length);
});


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(items,function(item) {
  console.log(item);
});


let num1 =3;
let num2 = 4;
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
};

sumNums(num1,num2,(sum =>console.log(sum)));


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
};

multiplyNums(num1,num2,(product =>console.log(product)));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (i=0;i<list.length && bool===false;i++){
    console.log(item + list[i]);
   if (item === list[i]) {
     bool=true;
   }
    else {
      bool=false;
    }
  }    
  cb(bool)  ; 
}
contains(items[1],items,(bool1 => console.log(bool1)));
/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
//}

function removeDuplicates(array, cb) 
{
 let found=1;
  let newlist = [];
  array = items;
  newlist[0]=array[0];
 
  for(let i=1;i<array.length;i++) {
     
     for (let j=0;j<newlist.length && found !==2;j++){  
       
       if (array[i] !== newlist[j]){
         found=1;
        }
       else {
         found= 2;
       };
       
     };
      if (found ===1){
        
        newlist.push(array[i]);
        
       };  
    found = 0;  
  };
   cb(newlist);
}
 
 
removeDuplicates(items,(noDup => console.log(noDup)));


