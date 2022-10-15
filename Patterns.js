// Square pattern

let num = 5;
let string = "";

for(let i=1;i<=num;i++){
    for(let j=1;j<=num;j++){
        string = string + "*";
    }
    string = string + "\n";
}

console.log(string);

// While 

let num1 = 5, num2 = 5;
let a=1,b=1;
string = "";
while (a<=num1){
    
    while(b<=num2){
        string = string + "*";
        b++;
        
    }
    a++;
    //string = string + " @";
    console.log(string);
    //break;
}


let n = 5;
string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);