const gameBoard = (function() {

    const array = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];

    return { array };

})();

const displayController = (function() {
    
    const fields = document.querySelectorAll(".field-marker");
    
    function renderBoard() {
        gameBoard.array.forEach((element, index) => {
            fields[index].textContent = element;         
        });
    }

    function addMarker(symbol, position) {
        gameBoard.array[position] = symbol;
    }

    return { renderBoard, addMarker, fields };

})();

const playerFactory = (name) => {
    return { name };
};

const playerOne = ("Scax");
const PlayerTwo = ("Lilith");