let idValue = Math.round(Math.random() * 5);
let setOfId = [idValue, idValue];
let timeOut = false;
let score = 0;

function Mole() {
    this.id = setOfId[0];
    this.status = false;

    this.changeMoleId = function (id) {
        this.id = id;

    }
    this.changeMoleStatus = function () {
        this.status = !this.status;
    }
}

function changeStatus(mole, id) {
    mole.changeMoleStatus();
    let e = document.getElementById("" + id);
    if (mole.status) {
        e.style.visibility = "visible";
    } else {
        e.style.visibility = "hidden";
    }

}

function GameBoard(mole) {
    this.start = function () {
        setInterval(
            function () {
                changeStatus(mole, setOfId.pop());
                idValue = Math.round(Math.random() * 5);
                setOfId.unshift(idValue, idValue);
                mole.changeMoleId(setOfId[0]);
            }, 650);
    }
}
function hit() {
    score += 1;
    document.getElementById("showScore").innerHTML = "Score: " + score;
}

function startGame(gameBoard) {
    document.getElementById("start").remove();
    gameBoard.start();
    checkOver();
}

function checkOver() {
    setTimeout(function () {
        timeOut = true;
        if (timeOut && score < 10) {
                alert("You lose!");
            }
        }, 20000);
    function checkWin(){
        if (score === 10){
            alert("You win!");
            stopFunction();
        }
    }
    let checkWinInterval = setInterval(checkWin, 1);
    function stopFunction() {
        clearInterval(checkWinInterval);
    }
}

let newMole = new Mole();
let newGameBoard = new GameBoard(newMole);

