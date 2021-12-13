let arr = [1,2,3,4];
let newArr =[];
let sum = 0;

// forEach will perform some operation for each element in a given array. It wont modify anything in place nor create a new modified array.
// we can though, for some reason, if we want to, create a new array based around anothr array, while utilizing forEach will
// We can also perform accumulation type operations utilizing each element in the array
arr.forEach((element, index, arrayItself) => {
    newArr.push(element * 2);
    sum += element;
});

console.log("forEach");
console.log(`arr: ${arr}`);
console.log(`newArr: ${newArr}`);

//===============================================================================================================================================================

// map() will perform an operation for each element in an array and place it in a new array with matching index values
newArr = arr.map((e) => {
    return e * 2;
});
console.log("\nUsing Map: ");
console.log(`arr: ${arr}`);
console.log(`newArr: ${newArr}`);

//===============================================================================================================================================================

let arr2 = [1,2,3,4];
let newArr2 = arr2;

// we could use forEach as an accumulator or we could just use plain old reduce()!
// should return a single value based around all the elements from a given array
let sum2 = arr2.reduce((prev, curr, index, arrayItself) => {
    return prev + curr;
});

// we can also provide an initial value to begin with - in this case 10
let newSum2 = newArr2.reduce((prev, curr, index, arrayItself) => {
    return prev + curr;
}, 10);

console.log("\nUsing Reduce: ");
console.log(`arr: ${sum2}`);
console.log(`newArr: ${newSum2}`);

//===============================================================================================================================================================

// Perhaps we just want to remove some elements... well, we can use the filter() method for that
// returns the elements of array that fit the filter criteria
let arr3 = [1,2,3,4,5,6,7,8];
let filteredArr3 = arr3.filter((element, index, arrayItself) => {
    if(element % 2 === 0){
        return element;
    }
});

console.log("\nUsing Filter: ");
console.log(`arr3: ${arr3}`);
console.log(`filteredArr3: ${filteredArr3}`);