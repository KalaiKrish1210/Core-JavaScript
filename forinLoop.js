let alien = {
    name: "Kalai",
    tech: "JS",
    academics:{
        School : 91,
        College : 75
    }
}

for(let key in alien){
    console.log(key, alien[key]);
}
for(let key in alien.academics){
    console.log(key, alien.academics[key]);
}