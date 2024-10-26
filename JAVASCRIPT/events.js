let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a);
//     btn1.onclick=(evt)=>{
//         console.log(evt);
//         console.log(evt.type);
//         console.log(evt.target);
//     }
// }

// btn1.addEventListener("click",(evt)=>{
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - handler2");
// });
// let div = document.querySelector("div");


//change mode

let modebtn=document.querySelector("#mode");
let crntmode="light";
modebtn.addEventListener("click",()=>{
    // console.log("you are trying to change the mode");
    if(crntmode=="light"){
        crntmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        crntmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(crntmode);
});

