const gameBoard = {
    Array: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
};

const displayController = (function() {
    
    const fields = document.querySelectorAll(".board-field");
    
    function renderBoard() {
        gameBoard.Array.forEach((element, index) => {
            fields[index].textContent = element;
        });
    }

    return { renderBoard };
})();

const playerFactory = (name) => {
    return { name };
};

const playerOne = ("Scax");
const PlayerTwo = ("Lilith");

