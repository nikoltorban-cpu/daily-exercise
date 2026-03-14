class Dog {
  constructor(name) {
    this.name = name;
  }
};

 // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};

 // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}; //this constructor will extend the Dog class,
//  since it sends the name to the 'parent' class(Dog),
//and it has both parameters in the constructor

 // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};

// 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};