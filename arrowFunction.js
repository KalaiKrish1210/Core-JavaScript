// Normal function

function greet(){
    console.log("Hello Kalai");
}

greet();

// Arrow function

let add = (num1, num2) =>{  //If we have an only one line after the function we can write it in the same line itself.
    return num1 + num2;
}

let result = add(11, 12);

console.log(result);