let alien = {} // Simple object

console.log(alien, typeof alien);

let alien1 = {
    name: "Kalai",   // Created a properties in the object
    tech: "JS"
}

console.log(alien1);

// Call the specific properties
let alien2 = {
    name: "Kalai",   // Created a properties in the object
    tech: "JS"
}
console.log(alien2.name);

/*Square braket approach (1.If we have a property name as two words that scenario we can use
                          2. Else we get input value from user*/
let input = 'name';

let alien3 = {
    name: "Kalai",   // Created a properties in the object
    tech: "JS",
    'Work Exp': 4 
}
console.log(alien3['Work Exp']);
console.log(alien3[input]); 
