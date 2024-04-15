var position =300;
var stack = [];


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.strokeStyle = "#FFFFFF";
context.fillStyle = "#C086EA";
context.font = "15px Arial";


function pushStack() {
    var pushElement = document.getElementById("pushInput");
    var pushValue = pushElement.value;
    var pushInput = parseInt(pushValue);

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#C086EA";
    context.font = "15px Arial";

    if (canvas.getContext) {
        context.fillRect(150,position,100,100);
        context.strokeRect(150, position, 100, 101);
        context.strokeText(String(pushInput), 200, position + 50);
        position = position - 100;

    }
}

function popStack() {
    if (canvas.getContext) {
        context.clearRect(149, position, 102, 100);
        position = position + 100;

    }
}

function buildStack() {
    var buildElement = document.getElementById("buildInput");
    var buildValue = buildElement.value;
    var inputArray = buildValue.split(',');

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#C086EA";
    context.font = "15px Arial";

    // Trim spaces from each array element and convert to integers
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = parseInt(inputArray[i].trim());
    }

    let allIntegers = true;
    for (let i = 0; i < inputArray.length; i++) {
        if (isNaN(inputArray[i])) {
            allIntegers = false;
            break;
        }
    }

    if (allIntegers) {
        position = canvas.height - 200; // Start from the bottom
        for (let i = 0; i < inputArray.length; i++) {
            if (context) {
                context.fillRect(150, position, 100, 100);
                context.strokeRect(150, position, 100, 101);
                context.strokeText(String(inputArray[i]), 200, position + 50);
                position -= 100;
            }
        }
    }
}

