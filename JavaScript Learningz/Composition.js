// Instead of writing out types like this:
class Animal {
    constructor(name){
        this.name = name;
    }

    poop(){
        console.log("I'm dooking");
    }
}

class Dog extends Animal {
    bark(){
        console.log(`Woof, I'm ${this.name}`);
    }
}

class Cat extends Animal {
    meow(){
        console.log(`Meow, I'm ${this.name}`);
    }
}

let cat = new Cat("Booba");
let dog = new Dog("Jimbo");
cat.meow();
dog.bark();
dog.poop();

// `=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`
// `=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`=`
// We can instead break out functionality into composable pieces and form a type like that. This can keep us from having to
// to predict the future and lay out what we see as the foreseeable taxonomy of our types... which can... come to be dangerous, as the future
// is unexpectable.
const barker = (state) => ({
    bark: () => {console.log(`Woof, I'm the better dog, ${state.name}`)}
});

const meower = (state) => ({
    meow: () => {console.log(`Meow, I'm the better cat, ${state.name}`)}
});

const pooper = (state) => ({
    poop: () => {console.log(`I'm dookin. I have ${--state.poopCount} left in me`)}
});

// Here we can lay out our types similar to classes. This is our Dog class equivalent, and you could expect something similar for a cat
// or a robot, or a dog robot, or a cat dog! The pieces are modular and provide extreme ease in mixing and mashing functionality
const composedDog = (name) => {
    let state = {
        name, 
        poopCount: 10
    };

    return Object.assign(
        {},
        barker(state),
        pooper(state)
    );
};

let betterDog = composedDog("Jimbo the Second");
betterDog.bark();
betterDog.poop();