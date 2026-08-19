class Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

const car = new Car("Toyota");

console.log(car.brand);
car.start();
car.drive();