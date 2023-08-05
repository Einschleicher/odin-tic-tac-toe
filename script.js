const gameBoard = (function() {

    const array = ["", "", "", "", "", "", "", "", ""];

    function addMarker(symbol, position) {
        if (gameBoard.array[position] === "") gameBoard.array[position] = symbol;
        else alert("Error! Field has already been taken");
    }

    return { array, addMarker };

})();

const displayController = (function() {
    
    const fields = document.querySelectorAll(".field-marker");
    
    function renderBoard() {
        gameBoard.array.forEach((element, index) => {
            fields[index].textContent = element;         
        });
    }

    return { renderBoard };

})();

const playerFactory = (name, marker) => {
    let onTurn = false;
    return { name, marker, onTurn };
};

const playerOne = playerFactory("Scax", "X");
const playerTwo = playerFactory("Lilith", "Y");

playerOne.onTurn = true;