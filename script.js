
// get div where grid will be contained
const mainGrid = document.querySelector(".mainGrid");
rowNum = 16;

// create grid
function createGrid() {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");
        for (j = 0; j < rowNum; j++) {
            let column = document.createElement("div");
            column.setAttribute("class", "square");
            row.appendChild(column);
        }
        mainGrid.appendChild(row);
    };

    addEventListeners();

    //comment
}

let squareHandler = function(square){
    square.addEventListener("mouseover", mouseoverHandler);

}


let mouseoverHandler = (event) => {
    // here, we don't know about square... but we have
    // the event object. So event.currentTarget is
    //  the same reference as square in the other function!
    event.currentTarget.setAttribute("class", "coloured")
}
  
function addEventListeners() {
    let squares = document.querySelectorAll(".square");
  
    squares.forEach( squareHandler );
}

function removeEventListeners() {
    let squares = document.querySelectorAll(".square");
  
    squares.forEach( squareHandler );
}
createGrid();
//addEventListeners();

function removeRows() {
    document.querySelectorAll(".row").forEach(element=> element.remove());
}

function getSize() {
    let rowNum = prompt("How big do you want the grid to be? Enter number of squares per side (max 100): ");
    return rowNum;
}

function resetGrid() {
    removeRows();
    rowNum = getSize();
    createGrid(rowNum);
}
