var position=0;
var index =  0;
var array =[];
var rectangles = [];

canvas = document.getElementById('canvas');

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if the click is inside any rectangle
    rectangles.forEach((rect) => {
        if (
            mouseX >= rect.x &&
            mouseX <= rect.x + rect.width &&
            mouseY >= rect.y &&
            mouseY <= rect.y + rect.height
        ) {
            alert('Rectangle Clicked!');
            canvas.fillStyle = "#d3d3d3";
            //canvas.fillOpacity = "20";
            //canvas.f
        }
    });
});

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
                context.strokeRect(position, 100, 100, 100);
                context.fillText(String(inputArray[i]), position+50, 150);
                context.fillText(index, position+50, 250);
                rectangles.push({x: position, y:100, width:100, height:100});
                position = position + 100;
                index = index+1;

        }
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
    //var canvas = document.getElementById('canvas');
    if (!isNaN(insertInput)) {
        array.splice(indexInput, 0, insertInput);
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            context.strokeRect(position, 100, 100, 100);
            context.fillText(String(insertInput), position+50, 150);
            context.fillText(index, position+50, 250);
            position = position + 100;
            index = index+1;

        } else {
            alert("Please enter a valid integer.");
        }
    }
}

function removeElement() {

    var removeIndexInput = document.getElementById("removeIndexInput");
    var removeIndexValue = removeIndexInput.value;
    var removeIndex = parseInt(removeIndexValue);

    var canvas = document.getElementById('canvas');
    if (!isNaN(removeIndex) && array.length > removeIndex) {
        if (removeIndex > -1) {
            array.splice(removeIndex, 1);
            if (canvas.getContext) {
                index = 0;
                position = 0;
                var context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < array.length; i++) {
                    context.strokeRect(position, 100, 100, 100);
                    context.fillText(String(array[i]), position + 50, 150);
                    context.fillText(index, position + 50, 250);
                    position = position + 100;
                    index = index + 1;
                }


            }
        }
    }
    else {
        alert("Array does not contain an element at that index!");
    }
}