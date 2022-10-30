// Simple function
let add = function(num1, num2){
    return num1 + num2;
}

let result = add(11, 12);

console.log(result);

// Default value for parameters and passing values for the function
let add1 = function(num1, num2, num3=98){ // here the num3 value is set as 98 default
    return num1 + num2;
}

let result1 = add1(11, 12, 99); // if passing the value it will take the passing value instead of default value

console.log(result);


// Local variable global variable

let Globalvar = 10;
console.log("Global print Globalvar " + Globalvar);
let sum = function(){
    console.log("Access the Globalvar inside the function block "+Globalvar); // Global variable able to use universely
    let Localvar = 20;
    console.log("Local print Localvar " +Localvar); // Local variable able to access in this block only
}

//console.log("Global print Localvar " +Localvar); // If i am trying to acces the local variable outside of the block get might got the error

sum();

