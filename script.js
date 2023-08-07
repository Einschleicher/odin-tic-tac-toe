const gameBoard = (function() {

    const array = ["", "", "", "", "", "", "", "", ""];

    function addMarker(symbol, position) {
        if (gameBoard.array[position] === "") {
            gameBoard.array[position] = symbol;
            displayController.renderBoard();
            runCheckWinner();
            displayController.changeCurrentPlayer();
        }
        else alert("Error! Field has already been taken");

    }

    function runCheckWinner() {
        displayController.checkWinner(0,1,2);
        displayController.checkWinner(3,4,5);
        displayController.checkWinner(6,7,8);
        displayController.checkWinner(0,3,6);
        displayController.checkWinner(1,4,7);
        displayController.checkWinner(2,5,8);
        displayController.checkWinner(0,4,8);
        displayController.checkWinner(2,4,6);
    }

    return { array, addMarker };

})();

const displayController = (function() {
    
    const marker = document.querySelectorAll(".field-marker");
    
    function renderBoard() {
        gameBoard.array.forEach((element, index) => {
            marker[index].textContent = element;         
        });
    }

    const fields = document.querySelectorAll(".board-field");

    // EventListeners
    fields.forEach((element, index) => {
        element.addEventListener("click", () => {
            if (endGame === false) gameBoard.addMarker(currentPlayer.marker, index);
        })
    });

    function changeCurrentPlayer() {
        if (currentPlayer === playerOne) currentPlayer = playerTwo;
        else currentPlayer = playerOne;
    }

    const winner = document.querySelector("#winner-display");

    function checkWinner(indexOne, indexTwo, indexThree) {
        if (gameBoard.array[indexOne] === gameBoard.array[indexTwo]
            && gameBoard.array[indexTwo] === gameBoard.array[indexThree]) {
                if (gameBoard.array[indexOne] !== "") {
                    winner.textContent = `${currentPlayer.name} has won the game! gg wp`;
                    endGame = true;
                }
        }
    }

    return { renderBoard, changeCurrentPlayer, checkWinner };

})();

const playerFactory = (name, marker) => {
    return { name, marker };
};

const playerOne = playerFactory("Scax", "X");
const playerTwo = playerFactory("Lilith", "O");

let currentPlayer = playerOne;
let endGame = false;