//complete this code
class Animal {
	constructor(species){
	function makeSound() {
		Console.log("animal makes")
		
	}
	}
}

class Dog extends Animal {
	constructor(species)
	{
		super(species);
	}
	function bark(){
		console.log('woof');
		
	}
}

class Cat extends Animal {
	constructor(species)
	{
		super(species);
	}
	function bark(){
		console.log("pur");
		
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
