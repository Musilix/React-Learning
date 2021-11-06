class Prototyper {
    constructor(poopoo, peepee){
        this.poopoo = poopoo;
        this.peepee = peepee;
    }

    verySpecificInstanceMethod(){
        let rando = Math.floor(Math.random() * 10);
        return `This is a instance specific value: ${rando}`;
    }

    // generalStaticMethod(){
    //     console.log(`This literally always prints the same thing`);
    // }
}

Prototyper.prototype.generalStaticMethod = () => {
    return `This literally always prints the same thing`;
};

const p1 = new Prototyper("dook", "deep");
const p2 = new Prototyper("spook", "speep");

// console.log(p1);

console.log(p1.verySpecificInstanceMethod());
console.log(p2.verySpecificInstanceMethod());

console.log(p1.generalStaticMethod());
console.log(p2.generalStaticMethod());