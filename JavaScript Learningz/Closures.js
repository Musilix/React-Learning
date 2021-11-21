// Any Function can truly be a closure. For instance, a function in the global scope can form a closure w/ a global variable
let x = "dook";
function globalClosure(){
    console.log(x);
}

globalClosure();

console.log("========================================================================================================");

/* We can get more complicated tho and begin utilizing the power of closures w/ nested functions
 * Here, our inner function has access to both the function it's nested in + the global scope. What's
 * useful though is we can return the inner function and it will save the lexical scope it was defined in.

 * So we'd end up saving the state of z, even after the stack frame for outter() has finished. We would also have
 * the state of y, but that wont really matter, as we can just reference y in the context we define privateMethod() in.
 * What we can't do is directly reference z, that inner defined value from the same context privateMethod() is defined in.
 * Rather, we have to invoke privateMethod(), which was defined to utilize that inner value, z...

 * Thereby emulating a private scope. Inaccesbile from the current scope unless we use a predefined accesor/mutator method.
*/
let y = "yook";
function outter(){
    let z = "zook";
    let inner = function() {
        console.log(`We have inner: ${z}`);
        console.log(`And outter: ${y}`)

    }

    return inner;
}

let privateMethod = outter();
privateMethod();

console.log("========================================================================================================");

// We can also utilize IIFE to begin creating even more practical examples
let counter = (() => {
    let count = 0;
    console.log(`Count is initialized at: ${count}`);
    return () => {console.log(`Count is: ${count+=1}`)}
})();

// now whenever we call counter(), it will increment our private counter
// a user must use our mutator closure function we returned from our executed IIFE
counter();
counter();
counter();

/* 
* Another useful instance of utilizing Closures could come in the following example:
* In this case we are performing some functionality in the returned function, but we have
* a persisted state/object that we are performing these functions on, all due to the closure.

* I think if we wanted, we could even persist the total steps of the thingToMove by creating a
* closure-variable (yeah, I coined that) that keeps track of such a thing for each instance... let' see
* Yep, that's doable. Cool! Closures are a good means to privatizing data, but also seem like a good way of doing
* record keeping what we are actually working on and working with...
*/
function makeItMove(thing){
    let thingToMove = thing;
    let totalSteps = 0;
    function step(){
        let steps = Math.floor(Math.random() * 10 + 1);
        totalSteps+=steps;
        console.log(`whoa... your ${thingToMove} just moved ${steps} steps! It's moved a total of ${totalSteps} steps now`);
    }

    return step;
}

let moveableFish = makeItMove("🐟");
let moveableFeline = makeItMove("🐈");

moveableFish();
moveableFish();
moveableFish();

moveableFeline();
moveableFeline();

/* 
* I wonder if you can return a object composed of functions, while still utilizing a closure. Lets see... it seems that you can
* be a true emulation of OO Classes.

* Oo whoa you really can just return an object literal that hold a bunch of closure-functions, all of which can access that same
*closure variable; in this case, beersDrank. Nice
*/
function Bowler(){
    let beersDrank = 0;

    return {
        takeADrink: function(){
            beersDrank++;
            console.log(`The bowler just took a drink. Their count is now at ${beersDrank} beers drank`);
        },
        vomit: function(){
            beersDrank--;
            console.log(`The bowler just took vomited. They're now down to ${beersDrank} beers drank`);
        },
        goToBed: function(){
            beersDrank = 0;
            console.log(`The bowler is sweepy. Their taking a nap, they'll be back tomorrow!`);
        }
    }
}

let jimTheBowler = Bowler();
jimTheBowler.takeADrink();
jimTheBowler.takeADrink();
jimTheBowler.takeADrink();
jimTheBowler.vomit();
jimTheBowler.goToBed();