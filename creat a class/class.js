class Human {
    static numHumans = 0;
    static humanTypes = ['child', 'adult', 'elderly'];
    
    constructor(name, age, humanType) {
      this.name = name;
      this.age = age;
      this.humanType = humanType;
      Human.numHumans++;
    }
    
    static getNumHumans() {
      return Human.numHumans;
    }
  }
  
  // Using/accessing the class/static properties and methods
  console.log(Human.numHumans);  // Accessing the class property directly
  console.log(Human.humanTypes);  
  
  let human1 = new Human('Alice', 25, 'adult');
  let human2 = new Human('Bob', 10, 'child');
  
  console.log(Human.getNumHumans());  // Accessing the class method to get the number of humans
  