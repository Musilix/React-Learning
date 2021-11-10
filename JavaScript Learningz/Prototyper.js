////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Prototype w/ Function constructor Object
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Prototyper(name){
    this.name = name;
    // this method will return different shit for each instance of Prototyper, 
    // so we leave it as instance-specific
    this.verySpecificInstanceFunction = function() {
        let rando = Math.floor(Math.random() * 10);
        console.log(`This entity will be given this number: ${rando}`);
    }
}

// NOTE: proto function cannot be declared as an arrow function - messes with the scope context when referring to "this"
// This function will return the same thing for any instance of Prototyper no matter what, so it's better to
// write it out into the prototype to be SHARED across instances of Prototyper, instead of giving each Prototyper it's own version...
// MEMORY CONSERVATION BAEBEE
Prototyper.prototype.generalStaticMethod = function() {
    console.log(`Hello, this is a generic method that says: ${this.name}`);
}

let p1 = new Prototyper("blorgi");
let p2 = new Prototyper("blingi");


console.log("---------- Function Constructor Approach ----------")
p1.generalStaticMethod();
p2.generalStaticMethod();

p1.verySpecificInstanceFunction();
p2.verySpecificInstanceFunction();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Prototype w/ Class based Object
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Prototyper2 {
    constructor(name){
        this.name = name;
    }

    verySpecificInstanceFunction(){
        let rando = Math.floor(Math.random() * 10);
        console.log(`This entity will be given this number: ${rando}`);
    }
}

// We can define a prototype with a class-based Object the same exact was as when we defined a proto for a function-constructor based object. This
// This class construct probably get's transpiled into some form of what we have on top (function constructor), but I'm not 100%
Prototyper2.prototype.generalStaticMethod = function(){
    console.log(`Hello, this is a generic method that says: ${this.name}`);
}

let p1Class = new Prototyper2("shmingi");
let p2Class = new Prototyper2("bingi");

console.log("---------- Class Approach ----------")

p1Class.generalStaticMethod();
p2Class.generalStaticMethod();

p1Class.verySpecificInstanceFunction();
p2Class.verySpecificInstanceFunction();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Alt Object - no "new" keyword used
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Prototyper4(name){
    return {
        name: name,
        // first class function baebeee
        verySpecificInstanceFunction: function () {
            let rando = Math.floor(Math.random() * 10);
            console.log(`Here is a very specific value for this object: ${rando}`)
        }
    }
}

console.log("---------- Alt Object Approach ----------")

let p1Alt = Prototyper4("bingy");
p1Alt.verySpecificInstanceFunction();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Messing with Prototype of Prebuilt Object
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let x = [1,2,3];
let y= ["x", "y", "z"];
let z = [true, 2, "zzz"];

// Now all arrays can utilize a poopy method to add poopy in the array! :)
Array.prototype.addPoopy = function() {
    this.push("poopy");
}

x.addPoopy();
y.addPoopy();
z.addPoopy();

console.log("---------- Messing with predfined JS Obj Proto ----------");

console.log(x);
console.log(y);
console.log(z);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Prototype w/ Class based Inheritance
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fun Fact: Classes aren't hoisted...
class B {
    constructor(bVal = "bbb") {
        this.bVal = bVal;
    }

    superBoingy(){
        console.log(`boing boing boing, here's bVal: ${this.bVal}`);
    }
}

class A extends B{
    constructor(aVal = "aaa"){
        super();
        this.aVal = aVal;
    }

    miniBoingy() {
        console.log(`yonk yonk yonk, here's aVal: ${this.aVal}`);
    }
}


A.prototype.miniBoingy = function() {
    console.log(`HELP I'M STUCK IN THE PROTOTYPE`);
}

console.log("---------- Prototypes and Class Inheritance ----------");
let a = new A();
a.miniBoingy();
a.superBoingy();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Prototype w/ Function Constructor based Inheritance
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
