import fetch from "node-fetch";
// const fetch = require('node-fetch');

/* 
    Promises in their most basic form are, to me, some operation which is we want to go run in the background (async)
    which will eventually get back to us on whether it failed or succeeded. Where we'd handle it accordingly.

    In the most basic example, we could have a Promise which will resolve on even numbers, and fail on odd numbers
    we pass a Promise a callback which can take a resolve and reject object, and then call the resolve or reject
    accrdoingly, based on whatever happens in our operations... in our case, resolve on even numbers, reject on odds! 
*/
let babysFirstPromise = new Promise((resolve, reject) => {
  let rando = Math.floor(Math.random() * 1000 + 1);

  if (rando % 2 === 0) {
    resolve();
  } else {
    reject();
  }
});

/* 
    We can call our promise by the name of the variable it's stored in, which will invoke the operations within the Promises
    callback. We can then utilize the .then() suffix for handling success, and parsing through the returned object(s) thereafter
    and also handling any rejections/error from the Promise with catch() 
*/
babysFirstPromise
  .then(() => console.log("passed!"))
  .catch(() => console.log("failed!"));

/*
 We can also utilize the fetch api to make XHR requests
 The fetch() request would in turn return a Promise which would at some point resolve or reject, depending on
 what we sent to the API/server. In a super simple example, there isn't much area for fault, other than Headers.
*/
console.log("========= Using Fetch =========");
fetch("https://www.boredapi.com/api/activity")
  .then((res) => res.json()) // A call to json() actually returns a Promise too, so we would append another .then() onto that!
  .then((data) => console.log(`Today, you should... ${data.activity}`))
  .catch((err) => console.error(`There was an issue calling the API: ${err}`));


/*
 ======= SIDENOTE =======
 What's interesting to note is the showcasing of the JS Event loop right under our very noses! Running this code, we see that
 our console.log "using fetch" get's printed before our babysFirstPromise is resolved. Even though that should literally be resolved
 almost immediately! Probably even before the console.log() call...

 But since the JS event loop will first go through all "synchronous" calls on the call stack before popping in "async" code from
 the message queue, we get that weird funcitonality... cool.
*/