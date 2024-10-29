//synchronous

// console.log("one");
// console.log("two");
// console.log("three");


//asynchronous

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() => {
//    console.log("hello");
// }, 4000);

// console.log("one");
// console.log("two");
// console.log("three");


//call back

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);



//callbackhell

// function getdata(dataid) {
//     setTimeout(() => {
//         console.log("data", dataid);
//         if (getnextdata) {
//             getnextdata();
//         }
//     }, 4000);
// }
// getdata(1, () => {
// console.log("getting data2");
//     getdata(2, () => {
//         getdata(3,()=>{
// getdata(4);
//});
//     });
// });



//promises


// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     resolve("success");
//     reject("some error");
// });


// function getdata(dataid, getnextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             if (getnextdata) {
//                 getnextdata();
//             }
//         }, 4000);
//     });
// }


// const getpromise = () => {
//     new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         resolve("success");
//     });
// };


// let promise = getpromise();
// promise.then((res) => {
//     console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });



// function asyncfunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 2000);
//     });
// }
// function asyncfunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 2000);
//     });
// }

// console.log("fetchig data1");
// let p1 = asyncfunc();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetchig data2");
// let p2 = asyncfunc();
// p2.then((res) => {
//     console.log(res);
// });
// });



// async function hello() {
//     console.log("hello");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);

//     });
// }



//async wait

// async function getweatherdata() {
//     await api(); //1st call
//     await api();  //2nd call
// }

// function getdata(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve("success");
//         }, 2000);
//     });
// }

