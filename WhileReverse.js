let num = 12345;

let rem;
let rev = 0;

while(num>0){
    rem = num%10;
    rev = rev*10+rem;
    num = parseInt(num/10);
}
console.log(rev);