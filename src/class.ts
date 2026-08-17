// --> Creating first class <-- \\ 

class Student {
    name:string
    roll:number
    age:number
    batch:Number

    constructor(name:string, roll:number, age:number, batch:number) {
        this.name = name
        this.roll = roll
        this.age = age
        this.batch = batch
    }
}

// Instantiate and Instance!
const Talukder = new Student("Talukder", 151, 23, 45)
console.log(Talukder);
