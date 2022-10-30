// Simple function
function greet(){
    console.log("Hello Kalai");
}

greet();
greet();
greet();

// Return the function
function greet1(){
    return "Return function Hello world";
    return "Helo Kalai"; //When a return statement is used in a function body, the execution of the function is stopped.
}

let str = greet1();

console.log(str);

// Pass value in function
function greet2(name){
    return `Pass function hello ${name} `;
}

let name = "Kalai";
let str1 = greet2(name);
console.log(str1);