const gameBoard = (function() {

    const array = ["", "", "", "", "", "", "", "", ""];

    function addMarker(symbol, position) {
        if (gameBoard.array[position] === "") gameBoard.array[position] = symbol;
        else alert("Error! Field has already been taken");
        displayController.renderBoard();
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
            gameBoard.addMarker("X", index);
        })
    });

    return { renderBoard };

})();

const playerFactory = (name, marker) => {
    let onTurn = false;
    return { name, marker, onTurn };
};

const playerOne = playerFactory("Scax", "X");
const playerTwo = playerFactory("Lilith", "Y");

playerOne.onTurn = true;