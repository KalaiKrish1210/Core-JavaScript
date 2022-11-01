let nums = [5,6,7,8];

console.log(nums);

let [a,b,c,d] = nums;

console.log(a,b,c,d); // Assigned the array values uniquely to the variables

// Using array destructuring we can swap values
let x = 12;
let y = 11;

[x,y] = [y,x]; // swaping but this is not recommended

console.log(x,y);

// String value destructuring
let words = "My Name is Kalai Selvan Krishnamoorthy".split(" ");   // We can get it as array

console.log(words);

let [i,j,k,l,m,n] = words;
console.log(i,j,k,l,m,n); // assigning a values to the variable

let [o,p,q,...r] = words; // using the three dots we can split the array another array
console.log(r);