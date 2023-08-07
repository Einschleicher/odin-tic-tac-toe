const gameBoard = (function() {

    const array = ["", "", "", "", "", "", "", "", ""];

    function addMarker(symbol, position) {
        if (gameBoard.array[position] === "") {
            gameBoard.array[position] = symbol;
            displayController.renderBoard();
            displayController.changeCurrentPlayer();
        }
        else alert("Error! Field has already been taken");

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
            gameBoard.addMarker(currentPlayer.marker, index);
        })
    });

    function changeCurrentPlayer() {
        if (currentPlayer === playerOne) currentPlayer = playerTwo;
        else currentPlayer = playerOne;
    }

    function checkWinner(indexOne, indexTwo, indexThree) {
        if (gameBoard.array[indexOne] === gameBoard.array[indexTwo]
            && gameBoard.array[indexTwo] === gameBoard.array[indexThree]) {
                alert("WINNER!");
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