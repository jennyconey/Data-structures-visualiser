let level = 4
let branch = 0
let blevel = 0

var position =300;
var stack = [];


function drawCactus() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.strokeRect(150, 200, 100, 50);
        context.strokeRect(150, 250, 100, 50);
        context.strokeRect(150, 300, 100, 50);
        context.strokeRect(150, 350, 100, 50);
    }
}

function popStack() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        if (level === 4 && branch === 0) {

            context.clearRect(149, 0, 102, 50)
            --level;
        }

        else if (level === 3) {
            context.clearRect(149, 100, 102, 50)
            --level;
        }

        else if (level === 2) {
            context.clearRect(149, 200, 102, 50)
            --level;
        }
        else if (level === 1) {
            context.clearRect(149, 300, 102, 50)
            --level;
        }
    }
}

function pushStack() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        if (level === 3) {
            context.strokeRect(150, 0, 100, 51);
            level++;
        }
        if (level === 2) {
            context.strokeRect(150, 100, 100, 51)
            level++;
        }
        if (level === 1) {
            context.strokeRect(150, 200, 100, 51)
            level++;
        }
        if (level === 0) {
            context.strokeRect(150, 300, 100, 51)
            level++;
        }
    }
}
function drawBranch() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        if (level === 4 && branch === 0) {
            context.strokeRect(250, 200, 100, 50);
            branch = 1;
        }
        else if (blevel === 3 && branch === 1) {
            context.strokeRect(350, 50, 100, 50);
            branch++;
            blevel++;
        }


    }
}

function pushBranch() {

    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        if (branch === 1 && blevel === 0) {
            context.strokeRect(250, 150, 100, 50);
            blevel++
        } else if (branch === 1 && blevel === 1) {
            context.strokeRect(250, 100, 100, 50);
            blevel++
        } else if (branch === 1 && blevel === 2) {
            context.strokeRect(250, 50, 100, 50);
            blevel++;
        }
        else if (blevel === 4 && branch === 2) {
            context.strokeRect(350, 0, 100, 50);
            blevel++;

        }


    }
}







