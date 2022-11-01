let data = [12, 11, 98, 99];

data.push(1011); // push method add value in array FIFO
console.log(data);

data.pop();     // pop method delete a value in array FIFO
console.log(data);

data.unshift(1011); // unshift method add a value in array right side
console.log(data);

data.shift();   // Shift method delete a value in array right side
console.log(data);

data.splice(2,1, 1211) // splice method we can delete, add a values specifically
console.log(data);