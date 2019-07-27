 //variables for color and canvas
let color = document.getElementById('colorPicker');
let canvas = document.getElementById('pixelCanvas');
//added id submitButton on html page
let submit = document.getElementById('submitButton');
//height and width come from user input into fields
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;

//makeGrid function call when Submit is clicked
makeGrid(height, width);
submit.addEventListener('click', (event) => {
    event.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    //gets rid of extra square
    canvas.firstElementChild.remove();
    makeGrid(height, width);
});

//function for making grid
function makeGrid(height, width) {
    for (let x = 0; x < height; x++) {
        let row = canvas.insertRow(x);
        for (let y = 0; y < width; y++) {
            let cell = row.insertCell(y);
            //each cell has eventlistener to change to selected color on click
            cell.addEventListener('click', (event) => {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
