//Bind - Hard Binding
function ThingThing(a){
    this.a = a;
}

let someObj = {};
// binding our object, someObj, to our function contructor ThingThing will end up creating a 
// a function which calls ThingThing where this is set to equal someObj.
let t1 = ThingThing.bind(someObj);
t1("dook");

console.log("========= Using Bind Method =========")
console.log(someObj.a);
console.log(t1.a); //undefined, as we didn't bind t1 to ThingThings context

//when we use the "new" binding, it will overlook any hard or explicit bindings made to the 'this' context 
//and instead just create a new context alongside the funciton constructor it's calling. It seems like it'll overwrite
//any binded context.
let t2 = new t1("spook");
console.log("========= Using New Keyword =========")
console.log(someObj.a);
console.log(t2.a); //not undefined, as the 'new' keyword created a new context associated with t2, overlooking the binded context in t1 

//Apply and Call - Explicit Binding
function BingBing(){
    console.log(`${this.b} and ${this.c}`);
}

let someOtherObj = {
    b: 0,
    c: 0,
    myMethod: BingBing
};

let someOtherObj2 = {
    b: 100,
    c: 100,
    myMethod: BingBing
};

// Calling either object's method directly, will give the expected result, printing out the fields specific to that object:
console.log("========= Using Apply/Call Method =========")
console.log("Obj1: ");
someOtherObj.myMethod();
console.log("Obj2: ");
someOtherObj2.myMethod();

// But if we were to bind the context of one object to the other, functionality would shift!
console.log("Obj1: ");
someOtherObj.myMethod.call(someOtherObj2);
console.log("Obj2: ");
someOtherObj2.myMethod.call(someOtherObj);


// We can also pass args in the call or apply method invocation
function ThingThingSecondComing(arg1, arg2){
    this.arg1 = arg1;
    this.arg2 = arg2;
    console.log(this);
}

const someObject = {
    arg3: 10,
    arg4: 20,
    arg5: 30,
    myMethod: ThingThingSecondComing
};

ThingThingSecondComing(1,2);

// explicit binding that sets this = someObject
// we can also pass in any args the function we're calling may need... see when we bind the variables to the context with 'this'
// it's now attaching it to our someObject object...
ThingThingSecondComing.call(someObject, 3, 4);
ThingThingSecondComing.apply(someObject, [4, 5]);
ThingThingSecondComing(1,2); // altered context in call/apply invocations isn't permanent