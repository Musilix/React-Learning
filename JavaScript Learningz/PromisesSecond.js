let MyResponse = function(myField){
	this.myField = myField;
	this.mySecondPromise = function(){
        return new Promise((resolve, reject) => {
            if(this.myField === true){
                resolve("everything went fine!");
            }else{
                reject("everything's fucked up!");
            }
        });
    }
}

let myPromise = new Promise((resolve, reject) => {
	let ourOperationOutputs = Math.floor(Math.random() * 1);
	if(true){
		resolve(new MyResponse(true));
	}else{
		reject();
	}
});

console.log("calling my promise");
myPromise
    .then((res) => res.mySecondPromise())
	.then((data) => console.log("data:" + data))
	.catch((err) => console.error(err));