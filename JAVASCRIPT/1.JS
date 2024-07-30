console.log("Hey this is jsavascript")

// let is a  block scope
// var is a global scope
let a=5;
let b=10;
// this is aloud
a=a+11;
let c="Harshita";

console.log(a+b+8)
console.log(a)
console.log(typeof a,typeof b, typeof c)

// const a1 =6;
// not aloud
// a1=a1+5;

let x="Harshita";
let y=22;
let z=3.33;
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

let o={
    "name" : "Harry",
    "job code" : 5600,
    "is_handsome" : true
}

o.salary = "100crores"
console.log(o)


