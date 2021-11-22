////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Calculator Object
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Approach 1
function Calculator(){
    this.total = 0;
    this.arg1;
    this.arg2;
    
    this.read = function(arg1, arg2){
        this.arg1 = arg1;
        this.arg2 = arg2;
    }

    this.sum = function(){
        return this.arg1 + this.arg2;
    }

    this.mul = function(){
        return this.arg1 * this.arg2;
    }
}

let calculator = new Calculator();
calculator.read(1, 2);
console.log("Calculator Approach 1:")
console.log(calculator.sum());
console.log(calculator.mul());

// Approach 2
// I do not like this approach; feels less structured...
calculator = {
    read(arg1, arg2){
        this.arg1 = arg1;
        this.arg2 = arg2;
    },
    sum(){
        return this.arg1 + this.arg2;
    },
    mul(){
        return this.arg1 * this.arg2;
    }
}

calculator.read(1,2);
console.log("Calculator Approach 2:")
console.log(calculator.sum());
console.log(calculator.mul());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Chaining with This
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Ladder(){
    this.step = 0;
    this.up = function(){
        this.step++;
        return this;
    };
    this.down = function(){
        this.step--;
        return this;
    };
    this.showStep = function(){
        console.log(this.step);
    }
}

console.log("Ladder Steppin");
let L1 = new Ladder();
// We can chain functions on the original object by returning the actual obj in question (with 'this') after each method call
// kewl
L1.up().up().up().down().showStep();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// This keyword and functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 it should be noted that we can't just look at some function declaration and figure out what it's 'this' keyword would be pointing to.
 We'd need to reference the context in which it is called or used. In the first case, it was called in the global scope and so, 'this'
 binded to the global Object on runtime. But in the 2nd case, it was called from within the scope of MyObject, and so, 'this' was binded
 to MyObject. This is the work of implicit binding in JS. If we want, we can even do explicit binding, hard binding, and new bindings. 
 Those will be in a different file though...
*/

//Named functions
console.log("======= Named Functions =======")
const myFunction = function(){
    console.log(this);
}

function myFunction2(){
    console.log(this);
}

console.log("\nCalling this inside of 2 named function delcarations - these will bind 'this' to the scope they're called in, which is the global Window object")
myFunction();
myFunction2();

let myObject = {
    objectsMethod: myFunction,
    objectsMethod2: myFunction2
}

console.log("\nCalling this inside of 2 named function delcarations - these will bind 'this' to the scope they're called in, which is the global Window object")
myObject.objectsMethod();
myObject.objectsMethod2();


console.log("======= Arrow Functions =======");
// Arrow Functions
const myArrowFun = () => {
    console.log(this);
}

let myArrowObj = {
    myArrowMethod: myArrowFun
}

// On a direct call to our arrow function in the global scope, we'll get the same exact output we saw with our named function call
// But the reasoning isn't the same. In the case of our named function, it binded to the global scope Object, but in the case of our
// arrow function, it doesn't bind to anything; rather, it inherits the scope of it's parent - in this case, still being the global Object
console.log("\nIn the first case, just calling our arrow function, as we did with our named function, we will get the same result")
myArrowFun();

// Where the issue of arrow functions begin to show is when we try to call a method on our object (which happened to be defined as an arrow func)
// Instead of having it's 'this' be binded to the Object it's defined in, it instead inherits the context/scope from it's parent. 
// In this case, the parent is myArrowObj, and it's scope/context is again the global Object... so we get the same result!
console.log("\nIn the 2nd case, calling an arrow func defined as a method in an Object, we wont get the expected result")
myArrowObj.myArrowMethod();

// A workaround for this would be laying out an object as such:
let myNewArrowObj = {
    myArrowMethod: null,
    myNormalMethod: function(){
        this.myArrowMethod = () => console.log(this);
    }
}

//In this case, we'd have to first call the normalMethod to initialize myArrowMethod
//In that case, myArrowMethod should inherit it's context from the parent (myNormalMethod)
// If we look back to the second named function example above, named functions bind to the object context they're defined in as normal,
// So myNormalMethod is binded to myNewArrowObj, and so myArrowMethod inherits that context when defined...
console.log("\nIn the 3rd case, calling an arrow func defined within a named method in an Object, we get the expected result")
myNewArrowObj.myNormalMethod();
myNewArrowObj.myArrowMethod();