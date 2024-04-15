var n=0;
var index =  0;
var queue =[];





function createQueue() {
    var inputElement = document.getElementById("queueInput");
    var inputValue = inputElement.value;
    var inputArray = inputValue.split(',');

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

        var canvas = document.getElementById('canvas');
        for (let i = 0; i < inputArray.length; i++) {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');
                context.strokeRect(n, 100, 100, 100);
                context.fillText(String(inputArray[i]), n+50, 150);
                context.fillText(index, n+50, 250);
                n = n + 100;
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
    if (!isNaN(enqueueInput)) {
        queue.push(enqueueInput);
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            context.strokeRect(n, 100, 100, 100);
            context.fillText(String(enqueueInput), n+50, 150);
            context.fillText(index, n+50, 250);
            n = n + 100;
            index = index+1;


        } else {
            alert("Please enter a valid integer.");
        }
    }





}

function dequeueQueue() {

    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
            queue.shift();
            index = 0;
            n=0;
            var context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < queue.length; i++) {
                context.strokeRect(n, 100, 100, 100);
                context.fillText(String(queue[i]), n + 50, 150);
                context.fillText(index, n + 50, 250);
                n = n + 100;
                index = index + 1;

            }

        }






}