// function nice(name) {
//     console.log("hey " + name + " you are nicel");
//     console.log("hey " +  name+ " you are good");
//     console.log("hey " + name + " you are awsome");
//     console.log("hey " + name + " you are abd");
//     console.log("hey " + name + " you are nic0el");   
// }

// nice("rohan")
// nice("shivam")


// function sum(a,b,c=3) {
//     // console.log(a+b);
//     return a+b+c
// }
// result =sum(1,2,1)
// result2 =sum(6,5)
// console.log("the sum =",result);
// console.log("the sum =",result2);


// const func1 = (x)=>{
//     console.log("i am an arrow function",x)
// }

// func1(34);
// func1(67);





// function sum(x,y){ //function parameters are local variable 
//     s=x+y;
//     console.log(x);
//     return s;
// }

// let val =sum (3,4);
// console.log(val);



// function mulfunc(c,d){
//     return c*d;
// }


//arrow function
 
// const arrowmul=(c,d) => {
//     console.log (c*d);
// };
// arrowmul(3,4);



// let arrowmul=5;
// console.log(arrowmul);


//count vowels function
// function countvowels(str){
//     let count =0;
//     for(const char of str){
//         if(char=="a"|| char =="e"|| char=="i" || char=="o" || char=="u"){
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }
// countvowels ("apnacollege");




//by arrow function
// const countvowel=(str)=>{
//         let count =0;
//     for(const char of str){
//         if(char=="a"|| char =="e"|| char=="i" || char=="o" || char=="u"){
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }
// countvowel("apnacollege");




//for each loop in array

// let array = [1, 2, 3, 4, 5];
// array.forEach(function printVal(val) {
//     console.log(val);
// })
// array.forEach((val) =>{
// console.log(val);
// })

// array.forEach((sqr) =>
// {
//     console.log(sqr*sqr);
// })




//map


// let array=[1,2,3,4,5];
// let newarr=array.map((val)=>{
//     // console.log(val);
//     return val*2;
// });
// console.log(newarr);



//filter


// let array=[1,2,3,4,6,5];
// let even =array.filter((val)=>{
//     return val%2===0;
// })
// array.filter((val)=>{
//     console.log(val%2===0);

// })



//reduce


// let array=[1,2,3,4,6,5];
// const sum=array.reduce((res,cur)=>{
//     return res+cur;
// });
// console.log(sum);



//1

// function myfunction(msg){
//     console.log(msg);
// }

// myfunction("i love india");
// myfunction("i love myself");
// myfunction("i love my family");


//2

// function myfunction(){
//     console.log("i love india");
//     console.log("i love myself");
// }
// myfunction();



//3

// function sum(a,b){
//     let ans = a + b ;
//     console.log(ans);
// }
// sum(3,4);


//4


// function countvowel(str) {
//     let count = 0;
//     for (const char of str) 
//     {
//         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//             count++;
//         }

//     }
//     console.log(count);
// }


//scope

//1.global scope

// let a = " global scope";
// var b = " global scope";
// const c = " global scope";

// function scopeGlobal() {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// scopeGlobal();
// console.log(a);
// console.log(b);
// console.log(c);





//2.function scope


// let c = 50;
// function calsum(a, b) {
//     let c = a + b;
//     console.log(c);
// }
// calsum(5, 2);
// console.log(c);



//fiter out the marks of student who scored greater than 90

// let marks=[65,99,87,98,45];
// let toppers=marks.filter((val)=>{
//     return val>90;
// })
// console.log(toppers);