
function Alien(name, tech) { // Constructor function starts with capital letter.
    this.name = name;
    this.tech = tech;

    this.work = function (){ //Inside constructor method operation
        console.log("Inside constructor method operation");
    }
}

let alien1 = new Alien("Kalai", "JS");
let alien2 = new Alien("Krish", "JS");

alien2.tech = "Java";

console.log(alien2);

alien2.work();