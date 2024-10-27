let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");

const computergame = () => {
    const options = ["rock", "paper", "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const draw = () => {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, computerchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! You chose ${userchoice}, Computer chose ${computerchoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        compscorepara.innerText = computerscore;
        msg.innerText = `You Lose! You chose ${computerchoice}, Computer chose ${userchoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const computerchoice = computergame();
    if (userchoice === computerchoice) {
        draw();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = computerchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = computerchoice === "scissor" ? false : true;
        } else {
            userwin = computerchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, computerchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});