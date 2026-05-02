
type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const person1: PersonWithAddress = {
  name: "Nikol",
  age: 22,
  street: "Herzl 10",
  city: "Tel Aviv"
};

console.log(person1);