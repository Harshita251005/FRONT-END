// const student={
//     fullname:"harshita",
//     marks:94.4,
// };
// console.log(student.marks);


// const employee={
//     calctax(){
//         console.log("tax rate is 10%");
//     },
// };

// const karanarjun={
//     salary:5000,
// };
// karanarjun.__proto__=employee;
// console.log(karanarjun);


// class toyotacar {
//     constructor(brand) {
//         console.log("creating an object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setbrand(brand) {
//         this.brand = brand;
//     }
// };
// let fortuer = new toyotacar("fortuner", 10);
// fotuner.setbrand("fortuner");
// let lexus = new toyotacar("lexus", 12);
// lexus.setbrand("lexus");


// class parent{
//     hello(){
//         console.log("hello");
//     }
// };
// class child extends parent{}
//     let obj=new child();



// class person {
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }
// class engineer extends person{
//     work() {
//         console.log("solve problems");
//     }
// }

// let obj = new engineer();



// class person {
//     constructor() {
//         this.species = "homo sapines";
//     }
//     eat() {
//         console.log("eat");
//     }
// }
// class engineer extends person {
//     constructor(branch) {
//         super();
//         this.branch = branch;
//     }
//     work() {
//         console.log("solve problem,build somethig");
//     }
// }

// let engobj = new engineer("chemical eng");
// console.log(engobj);


// let data="secret information";
// class user  {
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewdata()
//     {
//         console.log("view data",data);
//     }
// };
// class admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editdata(){
//         data="some new value";
//     }
// }
// let student1=new user("shraghj","dffghjkl");
// let student2=new user("shraghj","dffghjkl");


// let teacher1=new user("dean","sadfghjkm");