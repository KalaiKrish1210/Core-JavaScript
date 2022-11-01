let nums = [12, 11, 98, 99, 10, 05];
console.log(nums);

//foreach
// we need to print the array value one by one
nums.forEach ((n)=> { // using the foreach method we can the value one by one 
    console.log(n);
});

nums.forEach ((n, i, nums)=> { // in for each method we can pass the parameters value, index, array
    console.log(n,i, nums);
});

//Filter
console.log(nums.filter(n => n%2===0)); // Using the filter method we can filter the vaules

nums.filter((n) => n%2===0) 
    .forEach ((n)=> {
    console.log(n);
    });


// Map
nums.filter((n) => n%2===0) 
    .map((n) => n*2)        // Using the map method we are doubling the values
    .forEach ((n)=> {
    console.log(n);
    });

//Map Reduce we are using the method reduce
let result = nums.filter((n) => n%2===0) 
    .map((n) => n*2)   
    .reduce((a,b) => a+b)   // Using the reduce method we are adding the whole value of the array

console.log(result);