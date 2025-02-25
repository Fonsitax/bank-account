class Car {
    constructor(brand, model, year) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }
    get fullName() {
        return `${this._brand} ${this._model}`;
    }

    
    get age() {
        const currentYear = new Date().getFullYear();
            if (this._year > currentYear) {
                return "---";
            }
            return currentYear - this._year;   
    }

    get honk() {
        const honk = "Beep beep!";
        return honk;  
    }

}

const car1 = new Car("BMW","Series 123",1992);
const car2 = new Car("Mazda", "4", 2027);

console.log(`Selected product: ${car1.fullName}. Age: ${car1.age} years old. ${car1.honk}.`);
console.log(`Selected product: ${car2.fullName}. Age: ${car2.age} years old. ${car2.honk}.`);
