//Initialise variables
var position = 0; // X-coordinate position for drawing rectangles
var index = 0; // Index for tracking position within the array
var array = []; // Array to store user input values

// Get canvas element and its 2D rendering context
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.strokeStyle = "#FFFFFF"; // Set stroke color
context.fillStyle = "#78A1E2"; // Set fill color
context.font = "20px Arial"; // Set font style
context.textAlign = "center"; // Set text alignment

// Function to create array from user input
function createArray() {
    var inputElement = document.getElementById("createInput");
    var inputValue = inputElement.value;
    var inputArray = inputValue.split(',');


    // Trim spaces from each array element
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].trim();
        inputArray[i] = parseInt(inputArray[i]);

    }
    let allIntegers;
    for (let i = 0; i < inputArray.length; i++) {
        if (!isNaN(i)) {
            allIntegers = true;
        }
    }

    array = inputArray.slice();

    if (allIntegers) {
        for (let i = 0; i < inputArray.length; i++) {
            context.fillRect(position,100,100,100);
            context.strokeRect(position, 100, 100, 100);
            context.strokeText(String(inputArray[i]), position+50, 150);
            context.strokeText(index, position+50, 250);
            //rectangles.push({x: position, y:100, width:100, height:100});
            position = position + 100;
            index = index+1;
        }
    }
    else {
        alert("Please enter a valid array.");
    }
}


function appendArray() {
    // Get the input element

    var insertElement = document.getElementById("insertValueInput");
    var insertValue = insertElement.value;
    var insertInput = parseInt(insertValue);

    var indexElement = document.getElementById("insertIndexInput");
    var indexValue = indexElement.value;
    var indexInput = parseInt(indexValue);

    //TODO: doesn't work, value is appended rather than inserted
    if (!isNaN(insertInput)) {
        array.splice(indexInput, 0, insertInput);
        context.fillRect(position,100,100,100);
        context.strokeRect(position, 100, 100, 100);
        context.strokeText(String(insertInput), position+50, 150);
        context.strokeText(index, position+50, 250);
        position = position + 100;
        index = index+1;

    } else {
        alert("Please enter a valid integer.");
    }

}

function removeElement() {

    var removeIndexInput = document.getElementById("removeIndexInput");
    var removeIndexValue = removeIndexInput.value;
    var removeIndex = parseInt(removeIndexValue);

    if (!isNaN(removeIndex) && array.length > removeIndex) {
        if (removeIndex > -1) {
            array.splice(removeIndex, 1);
            index = 0;
            position = 0;
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < array.length; i++) {
                context.fillRect(position,100,100,100);
                context.strokeRect(position, 100, 100, 100);
                context.strokeText(String(array[i]), position + 50, 150);
                context.strokeText(index, position + 50, 250);
                position = position + 100;
                index = index + 1;
            }


        }
    }

    else {
        alert("Array does not contain an element at that index!");
    }}

