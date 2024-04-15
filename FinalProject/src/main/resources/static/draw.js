
function drawStack() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.strokeRect(150, 0, 100, 100);
        context.strokeRect(150, 100, 100, 100);
        context.strokeRect(150, 200, 100, 100);
        context.strokeRect(150, 300, 100, 100);
    }
}

function drawArray() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.strokeRect(0, 100, 100, 100);
        context.strokeRect(100, 100, 100, 100);
        context.strokeRect(200, 100, 100, 100);
        context.strokeRect(300, 100, 100, 100);
        context.strokeRect(400, 100, 100, 100);
    }
}
    function drawQueue() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var context = canvas.getContext('2d');

            context.strokeRect(0, 100, 100, 100);
            context.strokeRect(100, 100, 100, 100);
            context.strokeRect(200, 100, 100, 100);
            context.strokeRect(300, 100, 100, 100);
            context.strokeRect(400, 100, 100, 100);
        }
    }

        function drawSLL() {
            var canvas = document.getElementById('canvas');
            if (canvas.getContext) {
                var context = canvas.getContext('2d');

                context.strokeRect(0, 100, 50, 100);
                context.strokeRect(50, 100, 50, 100);

                context.strokeRect(200, 100, 50, 100);
                context.strokeRect(250, 100, 50, 100);

                context.strokeRect(400, 100, 50, 100);
                context.strokeRect(450, 100, 50, 100);

                drawSingleLines();

            }
        }

            function drawDLL() {
                var canvas = document.getElementById('canvas');
                if (canvas.getContext) {
                    var context = canvas.getContext('2d');

                    context.strokeRect(0, 100, 50, 100);
                    context.strokeRect(50, 100, 50, 100);

                    context.strokeRect(200, 100, 50, 100);
                    context.strokeRect(250, 100, 50, 100);

                    context.strokeRect(400, 100, 50, 100);
                    context.strokeRect(450, 100, 50, 100);

                    drawDoubleLines();

                }
            }

                function drawSingleLines() {
                    var canvas = document.getElementById('canvas');
                    if (canvas.getContext) {
                        var ctx = canvas.getContext('2d');
                        ctx.strokeStyle = 'black';
                        ctx.lineWidth = 2;

                        // draw a line
                        ctx.beginPath();
                        ctx.moveTo(75, 150);
                        ctx.lineTo(200, 150);
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.moveTo(275, 150);
                        ctx.lineTo(400, 150);
                        ctx.stroke();

                    }
                }

                    function drawDoubleLines() {
                        var canvas = document.getElementById('canvas');
                        if (canvas.getContext) {
                            var ctx = canvas.getContext('2d');
                            ctx.strokeStyle = 'black';
                            ctx.lineWidth = 2;

                            // draw a line
                            ctx.beginPath();
                            ctx.moveTo(75, 130);
                            ctx.lineTo(200, 130);
                            ctx.stroke();

                            ctx.beginPath();
                            ctx.moveTo(75, 170);
                            ctx.lineTo(200, 170);
                            ctx.stroke();

                            ctx.beginPath();
                            ctx.moveTo(275, 130);
                            ctx.lineTo(400, 130);
                            ctx.stroke();

                            ctx.beginPath();
                            ctx.moveTo(275, 170);
                            ctx.lineTo(400, 170);
                            ctx.stroke();

                            //finish


                        }
                    }







