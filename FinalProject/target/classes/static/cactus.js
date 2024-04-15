var position = 300;
var branchY = 200;
var hasBranch = false;
var branchNum = 0;
var index = 0;
var stack = [];

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.strokeStyle = "#FFFFFF";
context.fillStyle = "#7BB274";
context.font = "15px Arial";
context.textAlign = "center";


function pushStack() {
    var pushElement = document.getElementById("pushInput");
    var pushValue = pushElement.value;
    var pushInput = parseInt(pushValue);

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#7BB274";
    context.font = "15px Arial";
    context.textAlign = "center";


    if (canvas.getContext) {
        if (hasBranch === false) {
            context.fillRect(150,position,100,50);
            context.strokeRect(150, position, 100, 50);
            context.strokeText(String(pushInput), 200, position + 25);
            position = position - 50;
        }
    }
}

function popStack() {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#7BB274";
    context.font = "15px Arial";


    if (context) {
        if (branchNum < 0) {
            context.clearRect(149, position, 102, 51);
            position = position + 50;
        }

        else if (branchNum === 0) {
            context.clearRect(249, position, 102, 52);
            context.clearRect(149, position, 102, 52);
            position = position + 50;

        }


        else {
            context.clearRect(249, position, 102, 50);
            position = position + 50;
            branchNum--;


        }

    }
}



function newBranch() {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#7BB274";
    context.font = "15px Arial";

    var insertElement = document.getElementById("branchInput");
    var insertValue = insertElement.value;
    var branchInput = parseInt(insertValue);

    hasBranch = true;

    if (canvas.getContext) {
        context.fillRect(250,position+50,100,50);
        context.strokeRect(250, position+50, 100, 50);
        context.strokeText(String(branchInput), 300, position+75);
        //position = position - 50;
        branchNum++;


    }

}

function pushBranch() {

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#7BB274";
    context.font = "15px Arial";

    var branchElement = document.getElementById("branchPush");
    var branchValue = branchElement.value;
    var branchPush = parseInt(branchValue);

    context.fillRect(250,position,100,50);
    context.strokeRect(250, position, 100, 50);
    context.strokeText(String(branchPush), 300, position+25);
    position = position - 50;
    branchNum++;

}





