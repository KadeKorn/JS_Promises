// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
// const emailRef = document.querySelector(".email");

// 1. Then
// 2 promise objects - 1. fetch, 2. is .then
// to make it compatible with the front-end we use response to change the data to a json
// RAW RAW RAW :This is 'raw' not as clean but a good example
// fetch("https://jsonplaceholder.typicode.com/users/1").then((Response) => {
//   // console.log(Response.json())
//   Response.json().then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email;
//   });
// });

// POLISHED POLISHED POLISHED : This is the same as the one above but better practice and readability
// console.log(1)
// fetch("https://jsonplaceholder.typicode.com/users/1") // FIRST promise / fetching the route
//   .then((Response) => {  //.then accepts it but the response is not readable
//     console.log(2)
//     return Response.json(); // this makes fetch, .then the whole thing response .json
//   })
//   .then((data) => { // this is how you unlock the promise and makes a call back "=>"
//     console.log(3)
//     console.log(data);
//     emailRef.innerHTML = data.email // response the data
//   });
//   console.log(4)
// THEN adds a bit more complexity as shown by the console.logged methods
// 2. Async/Await
// async function main (){
//     console.log(1)
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1") // this fetches the data but it is not unlocked and in a unreadable state
//     console.log(2)
//     const data = await response.json() // this unlocks the promise and formats it as a json
//     console.log(3)        //console.log(data)
//     emailRef.innerHTML = data.email
// }
// main()

// const statusRef = document.querySelector(".status")

// // How to create and use a Promise
// function getSubscriptionStatus() {
//     return new Promise ((resolve,reject) => {
//       setTimeout(() => { // this gives it 2 seconds of delay
//           resolve("VIP")
//       }, 2000)
//     })
// } // above ^ we created a promise and then returned it // "=>" is a callback

// // 1. Then
// getSubscriptionStatus().then(response => console.log(response))

// // 2. Async/Await
// async function main() {
//     const status = (await getSubscriptionStatus()) //const status  is how we unlock the value in the await
//     statusRef.innerHTML = status
// } // above we used async/await to unlock that promise

// main()
// new problem

const statusRef = document.querySelector(".status")
const videoRef = document.querySelector(".video")
// How to create and use a Promise
function getSubscriptionStatus() {
    return new Promise ((resolve,reject) => {
      setTimeout(() => { // this gives it 2 seconds of delay
          resolve(undefined)
      }, 2000)
    })
} // above ^ we created a promise and then returned it // "=>" is a callback

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
      if (subscriptionStatus === "VIP") {
        resolve("Show Video");
        console.log("Show Video")
      } else if (subscriptionStatus === "FREE") {
        resolve("Show Trailer");
        console.log("Show Trailer")
      } else {
        reject("No Video");
        console.log("No Video")
      }
    });
  }


async function main() {
    const status = await getSubscriptionStatus() //const status  is how we unlock the value in the await
    statusRef.innerHTML = status
    try {
        console.log(await getVideo(status))
    }
    catch(e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
    } // above we used async/await to unlock that promise
main()

// fixed ^^



//My attempt on ^ daves problem
// const statusRef = document.querySelector(".status");

// function getSubscriptionStatus() {
//     return new Promise ((resolve,reject) => {
//       setTimeout(() => { // this gives it 2 seconds of delay
//           resolve("VIP")
//       }, 2000)
//     })
// }


// function getVideo(subscriptionStatus) {
//   return new Promise((resolve, reject) => {
//     if (subscriptionStatus = "VIP") {
//       resolve("Show Video");
//     } else if ((subscriptionStatus = "FREE")) {
//       resolve("Show Trailer");
//     } else {
//       reject("No Video");
//     }
//   });
// }

// async function main(getVideo) {
//   const status = await subscriptionStatus(); //const status is how we unlock the value in the await
//   statusRef.innerHTML = status;
//   console.log(getVideo(status));
// }
// //Davs solution ^
