var squarePosition= 0;
var elemPosition = 0
var index =  0;
var array =[];
var size = 0;



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
        var canvas = document.getElementById('canvas');
        for (let i = 0; i < inputArray.length; i++) {
            if (canvas.getContext) {
                var context = canvas.getContext('2d');
                //context.strokeStyle = "#FFFFFF";
                //context.fillStyle = "#FFFFFF";
                context.strokeRect(squarePosition, 100, 100, 100);
                context.fillText(String(inputArray[i]), squarePosition+50, 150);
                context.fillText(index, squarePosition+50, 250);
                squarePosition = squarePosition + 100;
                size = size + 1;
                index = index+1;

            }
        }
    }
    else {
        alert("Please enter a valid array.");
    }
}

function insertLast() {


    var appendElement = document.getElementById("insertLastInput");
    var appendValue = appendElement.value;
    var appendInput = parseInt(appendValue);

    var canvas = document.getElementById('canvas');


    if (size > array.length) {
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            context.fillText(String(appendInput), elemPosition + 150, 150);
            array.push(appendInput);
            //context.fillText(index, elemPosition + 50, 250);
            elemPosition = elemPosition + 100;
            index = index + 1;

        }
    }
        else {
            var newSize = array.length * 2;
            if (canvas.getContext) {
                var context = canvas.getContext('2d');
                context.fillText(String(appendInput), squarePosition + 50, 150);
                array.push(appendInput);
                for (let i = 0; i < newSize / 2; i++) {
                    context.strokeRect(squarePosition, 100, 100, 100);
                    context.fillText(index, squarePosition + 50, 250);
                    squarePosition = squarePosition + 100;
                    elemPosition = elemPosition + 100;
                    size = size + 1
                    index = index + 1;
                }
            }
        }



}