const gameBoard = {
    Array: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
};

const displayController = {
    fields: document.querySelectorAll(".board-field"),    
    renderBoard: () => {
        gameBoard.Array.forEach((element, index) => {
            displayController.fields[index].textContent = element;
        });
    },
};

const playerFactory = (name) => {
    return { name };
};

const playerOne = ("Scax");
const PlayerTwo = ("Lilith");

