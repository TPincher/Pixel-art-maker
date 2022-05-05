// Assigning variables 
const fullTable = document.getElementById('pixelCanvas');
const sizeSubmit = document.getElementById('sizePicker');

// The function to remove the extant table, otherwise the new table is just added to the old one.
function removeGrid() {
    while (fullTable.firstChild) {
        fullTable.removeChild(fullTable.firstChild);
    }
}

// The function to make a new table
function makeGrid() {
    let rows = document.querySelector('#inputHeight').value;
    let columns = document.querySelector('#inputWidth').value;
// Limit the size of the canvas to 40x40 cells
    if (rows > 40) {
        rows = 40;
    }
    if (columns > 40) {
        columns = 40;
    }
// Loops to create rows and then cells in those rows
    for (let r = 0; r <= rows - 1; r++) {
        let newRow = fullTable.insertRow();
        for (let c = 0; c <= columns - 1; c++) {
            let newCell = newRow.insertCell();
// Creating the Event Listener that will take the colour from the colorPicker and apply it when the mouse button is depressed.
            newCell.addEventListener('mousedown', function(evt) {
                let color = document.getElementById('colorPicker').value;
                evt.target.style.backgroundColor = color;
            }
        )}
    }
}

// When size is submitted by the user, remove any extant table, then create a new one with the selected parameters.
sizeSubmit.addEventListener('submit', function (create) {
    create.preventDefault();
    removeGrid();
    makeGrid();
})