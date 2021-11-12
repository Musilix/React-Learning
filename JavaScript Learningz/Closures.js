// Any Function can truly be a closure. For instance, a function in the global scope can form a closure w/ a global variable
let x = "dook";
function globalClosure(){
    console.log(x);
}

globalClosure();

console.log("========================================================================================================");

/* We can get more complicated tho and begin utilizing the power of closures w/ nest functions
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