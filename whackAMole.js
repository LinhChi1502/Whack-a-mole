let temp = Math.round(Math.random() * 5);
let arr = [temp, temp];
let timeOut = false;
let score = 0;

function Mole() {
    this.id = arr[0];
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
                changeStatus(mole, arr.pop());
                temp = Math.round(Math.random() * 5);
                arr.unshift(temp, temp);
                mole.changeMoleId(arr[0]);
            }, 700);
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
            myStopFunction();
        }
    }
    let checkWinInterval = setInterval(checkWin, 1);
    function myStopFunction() {
        clearInterval(checkWinInterval);
    }
}

let newMole = new Mole();
let newGameBoard = new GameBoard(newMole);

