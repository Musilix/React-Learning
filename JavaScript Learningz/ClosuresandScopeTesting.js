
// This doesn't work as expected - printing a sequence of 5s... 

// for is not a function, so in this case, i gets bound to the global scope.
// In each iteration, the setTimeout web API is called to initiate the timeout callbacks.
// After some time, the first timeout's callback get's pushed to the queue. There shouldnt be anything
// on the stack in this case, so it immediately get's pushed to the stack and get's executed. It references 
// i in it's body, so it tries to resolve i by looking in the current scope (the timeout callback) and once
// it doesn't find it there, it moves onto the upper scope (being the global scope in this case) 
for(var i = 0; i < 5; i++){
    setTimeout(()=>{
        console.log(i);
    }, i * 1000);
}

for(var i = 0; i < 5; i++){
    // i has now become function scoped as we've utilized an IIFE
    // all functionality is still the same, we've just altered the defined scopes
    // there's no longer 1 single global scope being used. Now with this IIFE used, it creates
    // individual function scopes, where i is privatized and no longer affected by changes in the global scope... all thanks to the magic of closures!

    // I blieve that when setTimeout's callback eventually get's called, it'll be comparable to if we had said:
    // function(){
    //     var i = 1;
    //     console.log(i);
    // }
    (function(i){
        setTimeout(()=>{
            console.log(i);
        }, i * 1000);
    })(i);
}

// Using the let keyword scope i to the block and prints out the expected 0 1 2 3 4... 
// because each time one of thoe timeout callbacks get called, they have a block-scoped variable in
// which was defined in the upper, for loop block. 
for(let i = 0; i < 5; i++){
    setTimeout(()=>{
        console.log(i);
    }, i * 1000);
}