let num1 = 6
let num2 = 8 
let num3 = 10

// if else
if (num1>num2){
    console.log ("Num1 is greater then Num2");
}
else{
    console.log ("Num2 is greater then Num1")
}

// elseif
if ((num1>num2) && (num1>num3)){
    console.log ("Num1 is greater");
}
else if((num2>num1) && (num2>num3)){
    console.log ("Num2 is greater");
}
else if((num3>num1) && (num3>num2)){
    console.log ("Num3 is greater");
}

// Unary operator
let num = 10;
let result;

// Normal approch
if (num%2===0){
    result = "Even";
}
else{
    result = "Odd";
}
console.log(result)

//Comprehenced approch

result = num % 2 === 0 ? "Even" : "Odd";
console.log(result)