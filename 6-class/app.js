'use strict';

class Car {
    #model;
    #brend;
    #_mileage;

    constructor (model, brend, mileage) {
        this.#model = model;
        this.#brend = brend;
        this.#mileage = mileage;
    }

    set #mileage(mileage) {
        this.#_mileage = mileage;
    }

    get #mileage() {
        return this.#_mileage;
    }

    info() {
        return `Марка ${this.#brend}, модель ${this.#model}, пробег ${this.#_mileage}`;
    }

    changedMileage (newValue) {
        if (newValue < this.#_mileage) {
            console.log('Не можем установить пробег меньше текущего');
            return;
        }
        this.#mileage = newValue;
    }
}

let car1 = new Car('A8', 'audi', 1000);
console.log(car1);
console.log(car1.info());
car1.changedMileage(900);
car1.changedMileage(1050);
console.log(car1.info());