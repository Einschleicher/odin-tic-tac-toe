const gameBoard = (function() {

    const array = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

    return { array };

})();

const displayController = (function() {
    
    const fields = document.querySelectorAll(".board-field");
    
    function renderBoard() {
        gameBoard.array.forEach((element, index) => {
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

