//use class to wrap up a object-based logic

class Dog {
  //variables
  name;
  age;

  //methods
  displayName() {
    return this.name;
  }
  displayAge() {
    return this.age;
  }
}

let myDog = new Dog();
myDog.age = 1;
myDog.name = 'BenBen';
