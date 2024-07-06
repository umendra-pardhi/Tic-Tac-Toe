const boxes = document.querySelectorAll(".box");
const btnReset = document.querySelector("#btn-reset");
const newGame = document.querySelector("#new-game");
const dialog = document.querySelector(".dialog-bg");
const dialogContent = document.querySelector(".dialog");
const dPlayer = document.querySelector("#player");

let player1 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let clickCount = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        clickCount++;
        if (player1) {
            box.innerText = "X";
            box.classList.add("player1");
            player1 = false;

        } else {
            box.innerText = "O";
            box.classList.add("player2");
            player1 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 == val2 && val2 == val3) {
                disableAll();
                matchWin(val3);
            }
        }
    }
    if (clickCount == 9) {
        matchDraw();
    }
}

newGame.addEventListener("click", () => {
    resetGame();
});

btnReset.addEventListener("click", () => {
    resetGame();
});

const disableAll = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const resetGame = () => {
    player1 = true;
    clickCount = 0;
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        box.className = "box";
    }
    hideDialog();
}

const showDialog = () => {
    dialog.classList.remove('hide-dialog');
}
const hideDialog = () => {
    dialog.classList.add('hide-dialog');
}

const matchWin = (winner) => {
    clickCount = 0;
    dialogContent.innerHTML = `<h2>PLAYER <span id="player" style="color: #ff6969;">${winner}</span></h2>
            <h4>is</h4>
            <h2>WINNER</h2>
            <h4>of</h4> 
            <h2>GAME</h2>
            <button onclick="resetGame()" id="new-game">START NEW GAME</button>`
    showDialog();
}

const matchDraw = () => {
    clickCount = 0;
    dialogContent.innerHTML = `<h2>MATCH draw!\n<button onclick="resetGame()" id="new-game">START NEW GAME</button>`;
    showDialog();
}