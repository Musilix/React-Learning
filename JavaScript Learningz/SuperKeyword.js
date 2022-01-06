class Parent{
    constructor(build){
        // this = {}
        this.build = build; //this = {build: ...}
        // return this
    }

    showBuild(){
        console.log(`The Build is ${this.build}`);
    }
}

class Child extends Parent{
    constructor(toy){
        // This line seems to bind everything initiated in the Parent constructor to the childs this context is. Interesting things
        // I wonder how that really works... do we do some type of this.append(super.this)?

        // this = undefined
        super("small");
        //this = {build: ...}
        this.toy = toy; // this = {build: ..., toy: ...}
        // return this
    }

    // We can reference a parents field by using the this keyword, just as we reference a current context value...
    whoAreYou(){
        // by the time we call this Child method, the object which is calling it has already been initialized, and therefore
        // this has been as well. So when this is referenced here, it will point to what is currently stored in the Child instance variable
        console.log(`You have a ${this.build} build and hold a ${this.toy}`)
    }
}

// child = {} at first, and then the engine jumps into the constructor with this new empty object and startds building up the
// this context within, which it will eventually return after it goes thru it's lifecycle
let child = new Child("toy truck"); // {build: ..., toy: ..., [[Prototype]]: Child.prototype}
child.whoAreYou();