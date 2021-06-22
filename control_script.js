var canvas = document.createElement('canvas');
canvas.id = "canvas";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

document.getElementById("width_box").value         = 800;
document.getElementById("height_box").value        = 800;
document.getElementById("columns").value           = 40;
document.getElementById("rows").value              = 40;
document.getElementById("cell_border_width").value = 1;

canvas.width = document.getElementById("width_box").value;
canvas.height = document.getElementById("height_box").value;

drawGrid();

function drawGrid() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    var width = document.getElementById("width_box").value;
    var height = document.getElementById("height_box").value;

    var columns = document.getElementById("columns").value;
    var rows = document.getElementById("rows").value;

    var border_width = document.getElementById("cell_border_width").value;

    var cell_width = width / columns;
    var cell_height = height / rows;;

    canvas.width = width;
    canvas.height = height;

    ctx.lineWidth = border_width;
    ctx.fillStyle = "black";

    for(var c = 0;c < columns;c++) {

        ctx.moveTo((c * cell_width) + cell_width,0);
        ctx.lineTo((c * cell_width) + cell_width, height);
        ctx.stroke();
        

    }

    for(var r = 0;r < rows;r++) {

        ctx.moveTo(0,(r * cell_height) + cell_height);
        ctx.lineTo(width, (r * cell_height) + cell_height);
        ctx.stroke();
        
    }

}