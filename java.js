
let color = "black";

function poluteBoard (size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i=0; i<amount; i++) {
        let square = document.createElement ("div");
        square.addEventListener("mouseover", colourSquare);
        square.style.backgroundColor = "white";
        board.appendChild(square);
    };
};


poluteBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        poluteBoard (input)
    } else {
        console.log("too many square")
    };
};

function colourSquare (square) {
    if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
    this.style.backgroundColor = color;
    }
};

function changeColor(choice) {
    color = choice;
};

function resetBoard () {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white")
};