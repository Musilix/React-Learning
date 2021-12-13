let MyResponse = function(myField, randVal){
	this.myField = myField;
	this.mySecondPromise = function(){
        return new Promise((resolve, reject) => {
            if(this.myField === true){
                resolve(`All good! We got this value: ${randVal}`);
            }else{
                reject("everything's fucked up!");
            }
        });
    }
}

let myPromise = new Promise((resolve, reject) => {
	let ourOperationOutputs = Math.floor(Math.random() * 10) + 1;
	if(true){
		resolve(new MyResponse(true, ourOperationOutputs));
	}else{
		reject();
	}
});

// Promise Chaining Syntactic Sugar helps avoid the pyramid of doom - or, callback hell. But it isn't void of it's own drawbacks
console.log("Calling Basic Promise");
myPromise
    .then((res) => res.mySecondPromise())
	.then((data) => console.log(`Data:" ${data}`))
	.catch((err) => console.error(err));

// Trying to avoid the Tower of Terror, pursuing even further syntactic azucar...
// Encapsulate and abstract out Promise lifecycle and functionality into an async function...
// Async functions implicitly return Promises, no matter if you return a Promise or not...
// So when invoking an async function, you are naturally invoking a Promise type function
async function handlePromiseyStuff(){
	// Error handling is simple with a try-catch block
	try{
		// we await our first promise before moving onto the next step in the process...
		let callFirstPromise = await myPromise;
		// we hold the newly returned promise from this function call
		let holdSecondPromise = callFirstPromise.mySecondPromise();
		// we then await the newly held Promise just as we did the fisrt promise... this will hold our final expected result
		let callSecondPromise = await holdSecondPromise;

		return callSecondPromise;
	}catch(e){
		console.error(e);
	}
}

console.log("\nCalling Async/Await Type Promise");
// We can await an async function? Apparantly... But I thought the await keyword could only be used IN an async function... not IN and ON an async function. Interesting...
// Either way, if we are returning something from our async function, instead of just logging something out, we must await the response. Just as we await the res from each
// step inside the async function
let data = await handlePromiseyStuff();
console.log(`Data: ${data}`);
