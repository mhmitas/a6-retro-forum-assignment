const person = {
    name: "JOE",
    address: {
        country: "India",
        home: {
            village: 'jadupur',
            road: 324
        }
    }
};

const name = person.name;
const addressRoad = person.address.home?.village

const t = addressRoad ?? 'undefined tar lega linu na'

console.log(name)
console.log(t)