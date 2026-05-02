class Animal {
    public name: string;

    constructor(name: string){
        this.name = name;
    }

    makeSound(): string {
        return `the ${this.name} makes sounds`
    }
}

class Dog extends Animal {
    
    constructor(name: string){
        super(name);
    }

    makeSound(): string {
        return "bark";
    }
}

const dog = new Dog('mailo');
console.log(dog.makeSound());