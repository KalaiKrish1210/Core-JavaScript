// Type conversion
// 1. Number to String
let num1 = 100
console.log(num1, typeof num1)
let num1str = String(num1)
console.log(num1str, typeof num1str)

//2. String to Number
let str = "1234"
console.log(str,  typeof str)
let strnum = Number(str)
console.log(strnum, typeof strnum)
    // here string and number in same varible also we can type cast
    let str1 = "1234 Kalai" // we can't give the string value intially
    console.log(str1, typeof str1)
    let numstr1 = parseInt(str1)
    console.log(numstr1, typeof numstr1)

//3. Dates to Number
let dat = new Date();
console.log(dat, typeof dat )
let datstr = String(dat)
console.log(datstr)