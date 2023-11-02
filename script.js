class Person{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}

class Apartment{
    residents = new Array();

    addResident(person){
        this.residents.push(person);
    }
}

class Building{
    apartments = new Array();

    constructor(maxApartments){
        this.maxApartments = maxApartments;
    }

    addApartment(apartment){
        if(this.apartments.length<this.maxApartments){
            this.apartments.push(apartment);
            return;
        }
        console.log(`The maximum number of apartments cannot be more than ${this.maxApartments}.`);
    }
}

const person1 = new Person("Iryna", "female");
const person2 = new Person("Vladyslav", "male");
const person3 = new Person("Julia", "female");
const person4 = new Person("Oleg", "male");

const apart1 = new Apartment();
apart1.addResident(person1);

const apart2 = new Apartment();
apart2.addResident(person2);

const apart3 = new Apartment();
apart3.addResident(person3);
apart3.addResident(person4);

const house = new Building(2);
house.addApartment(apart1);
house.addApartment(apart2);
house.addApartment(apart3);