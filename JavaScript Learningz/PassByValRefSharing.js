// JS is a pass by value language generally, but there are some instances that seem to emualted
// pass by reference, when in actuality it's something called pass by sharing. 

let a1 = [1,2,3,4,5];
let a2 = a1;

// doesnt do anything - copied value of other var to new one
a1 = a1.map((e) => e * 3);
console.log(`a1: ${a1}`);
console.log(`a2: ${a2}`);
console.log("\n");


// Doesnt do anything - passes parameters as values
console.log(`a2: ${a2}`);
checkThisOut(a2);
function checkThisOut(arr){
    arr.map((e) => e * 3);
}

console.log(`a2: ${a2}`);
console.log("\n");

let obj = {
    x: 1,
    y: 2,
    z: {
        a: 4,
        b: 5,
        c: 6
    }
};

// now THIS... fucks shit up. We pass our object to the function, but the operations we do
// to the obj persist outside just the function! FUCK!
console.log(`obj: ${JSON.stringify(obj)}`);
fuckShitUp(obj);
function fuckShitUp(obj){
    obj.x *= 1000;
    obj.y *= 1000;
    obj.z.a *= 1000;
    obj.z.b *= 1000;
    obj.z.c *= 1000;
}
console.log(`obj: ${JSON.stringify(obj)}`);
console.log("\n");

// Looking even further, if we alter an obj that equals another obj, they seem to have some type of
// link, which ends up changing them both.... hmmmm
let obj2 = obj;
function unFuckShitUp(obj){
    obj.x /= 1000;
    obj.y /= 1000;
    obj.z.a /= 1000;
    obj.z.b /= 1000;
    obj.z.c /= 1000;
}

unFuckShitUp(obj2);
console.log(`obj: ${JSON.stringify(obj)}`);
console.log(`obj2: ${JSON.stringify(obj2)}`);