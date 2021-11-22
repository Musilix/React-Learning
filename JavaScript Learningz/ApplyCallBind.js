//Bind
function ThingThing(a){
    this.a = a;
}

let someObj = {};
// binding our object, someObj, to our function contructor ThingThing will end up creating a 
// a function which calls ThingThing where this is set to equal someObj.
let t1 = ThingThing.bind(someObj);
t1("dook");
console.log(someObj.a);
console.log(t1.a); //undefined, as we didn't bind t1 to ThingThings context

//when we use the "new" binding, it will overlook any hard or explicit bindings made to the 'this' context 
//and instead just create a new context alongside the funciton constructor it's calling. It seems like it'll overwrite
//any binded context.
let t2 = new t1("spook");
console.log(someObj.a);
console.log(t2.a); //not undefined, as the 'new' keyword created a new context associated with t2, overlooking the binded context in t1 

//Apply and Call