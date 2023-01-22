// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
const emailRef = document.querySelector(".email");

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
console.log(1)
fetch("https://jsonplaceholder.typicode.com/users/1") // FIRST promise / fetching the route
  .then((Response) => {  //.then accepts it but the response is not readable
    console.log(2)
    return Response.json(); // this makes fetch, .then the whole thing response .json
  })
  .then((data) => { // this is how you unlock the promise and makes a call back "=>"
    console.log(3)
    console.log(data);
    emailRef.innerHTML = data.email // response the data
  });
  console.log(4)

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
