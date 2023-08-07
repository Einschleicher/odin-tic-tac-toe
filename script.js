const playerFactory = (name, marker) => {
    return { name, marker };
};

const gameBoard = (function() {

    let array = ["", "", "", "", "", "", "", "", ""];

    function addMarker(symbol, position) {
        array[position] = symbol;
    }

    function clearArray() {
        array = ["", "", "", "", "", "", "", "", ""]; 
    }

    // No benefit compared to returning the array straight away, right?
    const getArray = () => array;

    return { addMarker, clearArray, getArray };

})();

const displayController = (function() {

    const playerOne = playerFactory("Player 1", "X");
    const playerTwo = playerFactory("Player 2", "O");

    let endGame = false;
    let currentPlayer = playerOne;
    let board = gameBoard.getArray();
    
    const marker = document.querySelectorAll(".field-marker");
    
    function renderBoard() {
        board.forEach((element, index) => {
            marker[index].textContent = element;         
        });
    }

    const winner = document.querySelector("#winner-display");

    function changeCurrentPlayer() {
        currentPlayer = (currentPlayer === playerOne) ? playerTwo : playerOne;
        winner.textContent = `${currentPlayer.name}, its your turn!`;
    }

    function checkWinner(indexOne, indexTwo, indexThree) {
        if (board[indexOne] === board[indexTwo]
            && board[indexTwo] === board[indexThree]) {
                if (board[indexOne] !== "") {
                    winner.textContent = `${currentPlayer.name} has won the game! gg wp`;
                    endGame = true;
                }
        }
    }

    function runCheckWinner() {
        checkWinner(0,1,2);
        checkWinner(3,4,5);
        checkWinner(6,7,8);
        checkWinner(0,3,6);
        checkWinner(1,4,7);
        checkWinner(2,5,8);
        checkWinner(0,4,8);
        checkWinner(2,4,6);
    }

    function checkTie() {
        if (counter === 9 && endGame === false) {
            winner.textContent = `It's a tie! Fair game.`;
            endGame = true;
        }
    }

    const fields = document.querySelectorAll(".board-field");
    let counter = 0;

    // Run turn when a player clicks on a field
    fields.forEach((element, index) => {
        element.addEventListener("click", () => {
            // Cancel turn if field has already been taken
            if (board[index] !== "" && endGame === false) {
                alert("Error! Field has already been taken");
            }
            // Else execute turn
            else if (endGame === false) {
                gameBoard.addMarker(currentPlayer.marker, index);
                counter++;
                renderBoard();
                checkTie();
                runCheckWinner(); // may turn endGame into true, so double check next line
                if (endGame === false) changeCurrentPlayer();
            }
        })
    });

    const restartButton = document.querySelector("#restart");

    // Restart the game when a player clicks on the restart button
    restartButton.addEventListener("click", () => {
        gameBoard.clearArray();
        board = gameBoard.getArray();
        renderBoard();
        currentPlayer = playerOne;
        winner.textContent = `${currentPlayer.name}, its your turn!`;
        endGame = false;
        counter = 0;
    });

    const playerOneButton = document.querySelector("#name-player-one");
    const playerTwoButton = document.querySelector("#name-player-two");

    playerOneButton.addEventListener("click", () => {
        playerOne.name = prompt("Please enter the name of Player 1");
        winner.textContent = `${currentPlayer.name}, its your turn!`;
    });

    playerTwoButton.addEventListener("click", () => {
        playerTwo.name = prompt("Please enter the name of Player 2");
        winner.textContent = `${currentPlayer.name}, its your turn!`;
    });

    // No need to return anything in this module, all encapsulated
    // return { };

})();