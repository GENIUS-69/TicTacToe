let boxes = document.querySelectorAll(".box")
let resetbutton = document.querySelector("#reset")
let newGamebutton = document.querySelector("#new-game")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

newGamebutton.disabled = true;

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableButton();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");

        if (turnO === true) {
            box.innerText = "O"
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableButton = (params) => {
    for (let box of boxes) box.disabled = true;
}

const enableButton = (params) => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableButton();
}

const checkWinner = () => {
    for (let pattern of winPattern) {

        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                msg.innerHTML = `${pos1val} is Winner`
                showWinner(pos1val);
            }
        }
    }
};

newGamebutton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);