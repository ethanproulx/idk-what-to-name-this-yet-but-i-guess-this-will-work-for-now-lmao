//Create the canvas element and declare context
var canvas = document.createElement('canvas');
canvas.id = "canvas";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

//Sets default values for the sidebar
document.getElementById("width_box").value         = 800;
document.getElementById("height_box").value        = 800;
document.getElementById("columns").value           = 40;
document.getElementById("rows").value              = 40;
document.getElementById("cell_border_width").value = 1;
document.getElementById("cell_size_diff").value    = 0;
document.getElementById("dead_color").value        = "#FFFFFF";
document.getElementById("alive_color").value       = "#000000";

//Sets the canvas width and height
canvas.width = document.getElementById("width_box").value;
canvas.height = document.getElementById("height_box").value;

//draw the grid now ok
drawGrid();

function drawGrid() {

    //clear it first
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //these variables set all the sizes and dimensions needed later
    var width = document.getElementById("width_box").value;
    var height = document.getElementById("height_box").value;

    var columns = document.getElementById("columns").value;
    var rows = document.getElementById("rows").value;

    var border_width = document.getElementById("cell_border_width").value;

    var cell_width = width / columns;
    var cell_height = height / rows;

    var cell_diff = document.getElementById("cell_size_diff").value;

    var cell_dead = document.getElementById("dead_color").value;
    var cell_alive = document.getElementById("alive_color").value;

    canvas.width = width;
    canvas.height = height;

    ctx.lineWidth = border_width;

    //Draws a border to make it not look terrible on the edges when the offset is set to anything other than one
    if(cell_diff != 1) {

        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(canvas.width,0);
        ctx.lineTo(canvas.width,canvas.height);
        ctx.lineTo(0,canvas.height);
        ctx.lineTo(0,0)
        ctx.stroke();

    }



    //the two for loops below draw all the grid lines
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

    //the below code calculates the coordinates to draw rectangles later in the code
    var gridCoords = [];

    for(var cd = 0;cd < columns;cd++) {

        for(var rd = 0;rd < rows;rd++) {

            var x = (cd * cell_width) - (cell_width / 2);
            var y = (rd * cell_height) - (cell_height / 2);

            gridCoords.push(new Array(x,y));

        }

    }

    //This for loop is where the code randomly places a couple alive cells
    for(var i = 0;i < gridCoords.length;i++) {

        

    }

}

