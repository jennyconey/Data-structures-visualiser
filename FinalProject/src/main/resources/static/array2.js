// Initialize variables
let position = 0; // X-coordinate position for drawing rectangles
let index = 0; // Index for tracking position within the array
let array = []; // Array to store user input values

// Get canvas element and its 2D rendering context
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.strokeStyle = "#FFFFFF"; // Set stroke color
context.fillStyle = "#78A1E2"; // Set fill color
context.font = "20px Arial"; // Set font style
context.textAlign = "center"; // Set text alignment

// Function to draw rectangle with text
function drawRectangle(x, y, width, height, text) {
    context.fillRect(x, y, width, height); // Fill rectangle
    context.strokeRect(x, y, width, height); // Stroke rectangle border
    context.strokeText(text, x + width / 2, y + height / 2); // Draw text in the center
}

// Function to create array from user input
function createArray() {
    const inputElement = document.getElementById("createInput");
    const inputValue = inputElement.value;
    const inputArray = inputValue.split(',');

    // Trim spaces from each array element and convert to integers
    const trimmedArray = inputArray.map(item => parseInt(item.trim())).filter(item => !isNaN(item));

    if (trimmedArray.length > 0) {
        array = trimmedArray;
        position = 0;
        index = 0;
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        // Draw each element of the array
        array.forEach((item, i) => {
            drawRectangle(position, 100, 100, 100, item); // Draw rectangle with text
            context.strokeText(array[i], position + 50, 250); // Draw index below rectangle
            position += 100; // Move to next position
            index += 1; // Increment index
        });
    } else {
        alert("Please enter a valid array.");
    }
}

// Function to append element to array
function appendArray() {
    const insertElement = document.getElementById("insertValueInput");
    const insertValue = parseInt(insertElement.value);
    const indexElement = document.getElementById("insertIndexInput");
    const indexValue = parseInt(indexElement.value);

    if (!isNaN(insertValue) && indexValue >= 0 && indexValue <= array.length) {
        array.splice(indexValue, 0, insertValue); // Insert value at specified index
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        position = 0;
        index = 0;
        // Draw each element of the array
        array.forEach((item, i) => {
            drawRectangle(position, 100, 100, 100, item); // Draw rectangle with text
            context.strokeText(i, position + 50, 250); // Draw index below rectangle
            position += 100; // Move to next position
            index += 1; // Increment index
        });
    } else {
        alert("Please enter a valid integer for value and index.");
    }
}

// Function to remove element from array
function removeElement() {
    const removeIndexInput = document.getElementById("removeIndexInput");
    const removeIndexValue = parseInt(removeIndexInput.value);

    if (!isNaN(removeIndexValue) && removeIndexValue >= 0 && removeIndexValue < array.length) {
        array.splice(removeIndexValue, 1); // Remove element at specified index
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        position = 0;
        index = 0;
        // Draw each element of the array
        array.forEach((item, i) => {
            drawRectangle(position, 100, 100, 100, item); // Draw rectangle with text
            context.strokeText(i, position + 50, 250); // Draw index below rectangle
            position += 100; // Move to next position
            index += 1; // Increment index
        });
    } else {
        alert("Array does not contain an element at that index!");
    }
}