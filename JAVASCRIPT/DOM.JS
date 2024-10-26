// let heading=document.getElementById("heading");
// console.dir(heading);

// let headings=document.getElementsByClassName("headings");
// console.dir(headings);
// console.log(headings);

// let parahs=document.getElementsByTagName("p");
// console.dir(parahs);

// let firstelements = document.querySelector("p");
// console.dir("firstelements");

// let allelements=document.querySelectorAll("p");
// console.dir("allelements");

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText+"from apna college students";

// let divs=document.getElementsByClassName("box");
// divs[0].innerText="hey";
// divs[1].innerText="hope";
// divs[2].innerText="hello";



// let div = document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id");
// console.log(id);

// let para= document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));

// let diven = document.querySelector("diven");
// diven.style.backgroundColor="green";

// let newbtn=document.createElement("button");
// newbtn.innerText="clickme";
// console.log(newbtn);
// let div = document.querySelector("div");
// div.append(newbtn);
// div .remove();


let newbtn=document.createElement("button");
newbtn.innerText="clickme";

newbtn.style.backgroundColor="red";
newbtn.style.color="white";

document.querySelector("body").prepend(newbtn);