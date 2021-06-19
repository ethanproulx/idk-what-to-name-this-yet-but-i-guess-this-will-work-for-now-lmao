var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

document.getElementById("width_box").value = 500;
document.getElementById("height_box").value = 500;

function resizeCanvas() {

    var width = document.getElementById("width_box").value;
    var height = document.getElementById("height_box").value;

    console.log("User Input: " + width + "x" + height);

    canvas.width = width;
    canvas.height = height;

    console.log("Canvas resized to " + width + "x" + height);

}