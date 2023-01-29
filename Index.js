// Residents

class human  {
    name = String;
    age = String;
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
      }
}

const firstHuman = new human('Adam', "Male");
const secondHuman = new human('Lilith', "Female");

// Apartments

class apartment  {
    residents = [];
    addResident(human) {
        this.residents.push(human.name, human.gender);
    };
}

let firstApartment = new apartment()
let secondApartment = new apartment()
let thirdApartment = new apartment()

// Buildings

class building  {
    apartments = [];
    maxApartments = Number;
    constructor(maxApartments) {
        this.maxApartments = maxApartments;
      }
    addApartment(apartment) {
        if (this.apartments.length >= this.maxApartments) {
            console.log("Sorry. but the building is out of apartments");
        } else {
            this.apartments.push(this.apartment);
        }
    }
}

let firstBuilding = new building(1);

// Settling in

firstApartment.addResident(firstHuman);
firstApartment.addResident(secondHuman);
console.log(firstApartment);

// Adding apartment

firstBuilding.addApartment(firstApartment);
console.log(firstBuilding);
firstBuilding.addApartment(secondApartment);
console.log(firstBuilding);