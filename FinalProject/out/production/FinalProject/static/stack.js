var position =300;
var stack = [];

function pushStack() {
    var pushElement = document.getElementById("pushInput");
    var pushValue = pushElement.value;
    var pushInput = parseInt(pushValue);

    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        context.strokeRect(150, position, 100, 101);
        context.fillText(String(pushInput), 200, position + 50);

        position = position - 100;


    }
}

function popStack() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        context.clearRect(149, position, 102, 100);
        position = position + 100;


    }
}

function buildStack() {

    var buildElement = document.getElementById("buildInput");
    var buildValue = buildElement.value;
    var inputArray = buildValue.split(',');

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

    stack = inputArray.slice();
    //TODO: Doesn't work

    if (allIntegers) {
        var canvas = document.getElementById('canvas');
            for (let i = 0; i < inputArray.length; i++) {
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');
                    context.strokeRect(150, position, 100, 101);
                    context.fillText(String(inputArray[i]), 200, position + 50);

                    position = position - 100;
                    index = index + 1;

            }
        }
    }
}

