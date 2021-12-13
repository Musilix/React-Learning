class Parent{
    constructor(build){
        this.build = build;
    }

    showBuild(){
        console.log(`The Build is ${this.build}`);
    }
}

class Child extends Parent{
    constructor(toy){
        // This line seems to bind everything initiated in the Parent constructor to the childs this context is. Interesting things
        // I wonder how that really works... do we do some type of this.append(super.this)?
        super("small");
        this.toy = toy;
    }

    // We can reference a parents field by using the this keyword, just as we reference a current context value...
    whoAreYou(){
        console.log(`You have a ${this.build} build and hold a ${this.toy}`)
    }
}

let child = new Child("toy truck");
child.whoAreYou();