var list = [];
var index = 0;
var pos = 0;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.strokeStyle = "#FFFFFF";
context.fillStyle = "#E5C443";
context.font = "20px Arial";
context.textAlign = "center";

//TODO: reference this from stack overflow: https://stackoverflow.com/questions/808826/draw-arrow-on-canvas-tag
function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

function createList() {
    var inputElement = document.getElementById("createInput");
    var inputValue = inputElement.value;
    var inputList = inputValue.split(',');

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#E5C443";
    context.font = "20px Arial";
    context.textAlign = "center";

    // Trim spaces from each array element
    for (let i = 0; i < inputList.length; i++) {
        inputList[i] = inputList[i].trim();
        inputList[i] = parseInt(inputList[i]);

    }
    let allIntegers;
    for (let i = 0; i < inputList.length; i++) {
        if (!isNaN(i)) {
            allIntegers = true;
        }
    }

    list = inputList.slice();

    if (allIntegers) {
        for (let i = 0; i < inputList.length; i++) {
            if (canvas.getContext) {

                context.fillRect(pos,100,50,100);
                context.strokeRect(pos, 100, 50, 100);

                context.strokeRect(pos+50, 100, 50, 100);
                context.fillRect(pos+50,100,50,100);

                context.strokeText(String(inputList[i]), pos+25, 150);
                //context.strokeText(index, pos+25, 150);
                context.strokeText("next", pos+75, 150);


                context.beginPath();
                canvas_arrow(context, pos+100, 150, pos+150, 150);
                context.stroke();

                pos = pos + 150;
                index = index+1;

            }
        }
    }
    else {
        alert("Please enter a valid array.");
    }


}

function insertElement() {

    var insertElement = document.getElementById("insertValueInput");
    var insertValue = insertElement.value;
    var insertInput = parseInt(insertValue);

    var indexElement = document.getElementById("insertIndexInput");
    var indexValue = indexElement.value;
    var indexInput = parseInt(indexValue);

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#E5C443";
    context.font = "20px Arial";
    context.textAlign = "center";

    if (indexInput > -1) {
        if (canvas.getContext) {

            list.splice(indexInput, 0, insertInput)

            index = 0;
            pos = 0;
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < list.length; i++) {
                context.fillRect(pos,100,50,100);
                context.strokeRect(pos, 100, 50, 100);

                context.strokeRect(pos + 50, 100, 50, 100);
                context.fillRect(pos+50,100,50,100);

                context.strokeText(String(list[i]), pos + 25, 150);
                context.strokeText("next", pos+75, 150);

                context.beginPath();
                canvas_arrow(context, pos + 100, 150, pos + 200, 150);
                context.stroke();


                pos = pos + 200;
                index = index + 1;

            }
        }


    }
}

function removeElement() {
    var removeElement = document.getElementById("removeInput");
    var removeValue = removeElement.value;
    var removeIndex = parseInt(removeValue);

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#E5C443";
    context.font = "20px Arial";
    context.textAlign = "center";


    if (!isNaN(removeIndex) && list.length > removeIndex) {
        if (removeIndex > -1) {
            list.splice(removeIndex, 1);
            if (canvas.getContext) {
                if (canvas.getContext) {
                    index = 0;
                    pos = 0;
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    for (let i = 0; i < list.length; i++) {
                        context.fillRect(pos,100,50,100);
                        context.strokeRect(pos, 100, 50, 100);

                        context.strokeRect(pos + 50, 100, 50, 100);
                        context.fillRect(pos+50,100,50,100);

                        context.strokeText(String(list[i]), pos + 25, 150);
                        context.strokeText("next", pos + 75, 150);


                        context.beginPath();
                        canvas_arrow(context, pos + 100, 150, pos + 200, 150);
                        context.stroke();


                        pos = pos + 200;
                        index = index + 1;
                    }


                }
            }
        }

    }
}


