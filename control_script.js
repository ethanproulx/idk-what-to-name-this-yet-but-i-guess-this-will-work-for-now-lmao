//Create the canvas element and declare context
var canvas = document.createElement('canvas');
canvas.id = "canvas";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

//Sets default values for the sidebar
document.getElementById("width_box").value         = 800;
document.getElementById("height_box").value        = 800;
document.getElementById("columns").value           = 20;
document.getElementById("rows").value              = 20;
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
    let width = document.getElementById("width_box").value;
    let height = document.getElementById("height_box").value;

    let cell_sparcity = 2;

    let columns = [document.getElementById("columns").value];
    let rows = [document.getElementById("rows").value];

    let border_width = document.getElementById("cell_border_width").value;

    let cell_width = width / columns;
    let cell_height = height / rows;

    let cell_diff = document.getElementById("cell_size_diff").value;

    var cell_dead = document.getElementById("dead_color").value;
    var cell_alive = document.getElementById("alive_color").value;

    let gridCoords = [];

    let state = make2DArray(20, 20);

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

        for(var r = 0;r < rows;r++) {

            ctx.moveTo(0,(r * cell_height) + cell_height);
            ctx.lineTo(width, (r * cell_height) + cell_height);
            ctx.stroke();
            
        }
        

    }

    //the below code calculates the coordinates to draw rectangles later in the code
    for(var cd = 0;cd < columns;cd++) {

        for(var rd = 0;rd < rows;rd++) {

            var x = (cd * cell_width);
            var y = (rd * cell_height);

            gridCoords.push(new Array(x,y));

        }

    }

    //This for loop is where the code randomly places a couple alive cells

    var cellCount = getRandomValue((columns * rows) * 0.1,(columns * rows) * 0.8);
    console.log(cellCount);

    for(var i = 0;i < state.length;i++) {

        for(var j = 0;j < state.length;j++) {

            var sparce_rand = Math.floor(Math.random() * (cell_sparcity + 1));

            if (sparce_rand = 1) {

                if(c <= cellCount){
                
                    state[Math.floor(Math.random() * columns)][Math.floor(Math.random() * rows)] = 0;
    
                }

            }
            
        }

    }

    var counter = 0;

    for(var i = 0;i < columns;i++) {

        for(var j = 0;j < rows;j++) {

            ctx.beginPath();

            var tempState = state[i];
            tempState = tempState[j];
            
            if(tempState == 0) {

                ctx.fillStyle = "white";

            } else {

                ctx.fillStyle = "black";

            }

            ctx.fillRect(gridCoords[counter][0],gridCoords[counter][1],cell_width,cell_height);
            ctx.stroke();

            counter++;
    
        }

    }

}

function getRandomValue(min, max) {

    var rand = Math.floor(Math.random() * (max - min + 1)) + min;

    return rand;

}

function make2DArray(col, rows) {

    var arr = new Array(arguments[0]);

    for(var g = 0;g < arr.length;g++) {

        arr[g] = new Array(arguments[1]);

    }

    return arr;

}