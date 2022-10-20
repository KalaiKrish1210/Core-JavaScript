let alien = {
    name: "Kalai",
    tech: "JS",
    academics:{
        School : 91,
        College : 75
    }
}

console.log(alien);

console.log(alien.academics); 
// Print only the inside objects is same as printing the specfic properties

console.log(alien.academics.School); 
// Print specfic property inside of the object

console.log(alien.name.length); 
// If we want to find any length of the property


// Normal approach for check the availability
if (alien.tech1 === undefined){
    console.log(undefined);
}
else{
    console.log(alien.tech);
}

// ? mark approach for check the availability
console.log(alien.tech1?.length);
//console.log(alien.tech1.length);    // if we not put the ? mark it will give error 

//delete a property 
delete alien.tech;
console.log(alien); // tech property is deleted 

