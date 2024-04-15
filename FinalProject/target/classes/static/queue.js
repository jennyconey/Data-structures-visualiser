var position=0;
var index =  0;
var queue =[];

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.strokeStyle = "#FFFFFF";
context.fillStyle = "#DB8F57";
context.font = "15px Arial";


function createQueue() {
    var inputElement = document.getElementById("queueInput");
    var inputValue = inputElement.value;
    var inputArray = inputValue.split(',');

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#DB8F57";
    context.font = "20px Arial";
    context.textAlign = "center";

    // Trim spaces from each array element
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i].trim();

    }
    let allIntegers = true;

    //TODO: change this to something else
    for (let i = 0; i < inputArray.length; i++) {
        if (!isNaN(i)) {
            allIntegers = true;
        }
    }

    if (allIntegers) {
        queue = inputArray.slice();
        for (let i = 0; i < inputArray.length; i++) {
            if (canvas.getContext) {
                context.fillRect(position,100,100,100);
                context.strokeRect(position, 100, 100, 100);
                context.strokeText(String(inputArray[i]), position+50, 150);
                context.strokeText(index, position+50, 250);
                position = position + 100;
                index = index+1;

            }
        }
    }
    else {
        alert("Please enter a valid queue.");
    }


}
function enqueueQueue() {
    var enqueueElement = document.getElementById("enqueueInput");
    var enqueueValue = enqueueElement.value;
    var enqueueInput = parseInt(enqueueValue);

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#DB8F57";
    context.font = "20px Arial";
    context.textAlign = "center";


    //var canvas = document.getElementById('canvas');
    if (!isNaN(enqueueInput)) {
        queue.push(enqueueInput);
        if (canvas.getContext) {
            //var context = canvas.getContext('2d');
            context.fillRect(position,100,100,100);
            context.strokeRect(position, 100, 100, 100);
            context.strokeText(String(enqueueInput), position+50, 150);
            context.strokeText(index, position+50, 250);
            position = position + 100;
            index = index+1;


        } else {
            alert("Please enter a valid integer.");
        }
    }

}

function dequeueQueue() {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#DB8F57";
    context.font = "20px Arial";
    context.textAlign = "center";

    if (canvas.getContext) {
        queue.shift();
        index = 0;
        position=0;
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < queue.length; i++) {
            context.fillRect(position,100,100,100);
            context.strokeRect(position, 100, 100, 100);
            context.strokeText(String(queue[i]), position + 50, 150);
            context.strokeText(index, position + 50, 250);
            position = position + 100;
            index = index + 1;

        }

    }


}