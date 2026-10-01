import { getRandomColor, getRandomInt } from "./utils.js";
import { drawArc, drawLine, drawRectangle } from "./canvas-utils.js";
// #0 - in this class we will always use ECMAScript 5's "strict" mode
// See what 'use strict' does here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode

let canvas, ctx, width, height;
let paused = false;
let createRect;
let createArcs;
let createLines;

const init = () =>{
    console.log("page loaded!");
    // #2 Now that the page has loaded, start drawing!
    
    // A - `canvas` variable points at <canvas> tag
    canvas = document.querySelector("canvas");
    width = canvas.width.valueOf();
    height = canvas.height.valueOf();

    createRect = document.querySelector("#cb-rectangles").checked;
    createArcs = document.querySelector("#cb-arcs").checked;
    createLines = document.querySelector("#cb-lines").checked;
    
    // B - the `ctx` variable points at a "2D drawing context"
    ctx = canvas.getContext("2d");

    drawRectangle(ctx, 20,20,600,440,"red");

    // creating the second rectangle
    drawRectangle(ctx, 120,120,400,300,"green");
    
    // creating a third rectangle
    drawRectangle(ctx, 50,50,200,200,"none",10, "purple");

    // creating a rectangle the "hard way"
    drawRectangle(ctx, 100,100,50,50,"white",2,"black")

    // creating two line paths
    drawLine(ctx, 34,45,120,35,5,"white");
    drawLine(ctx, 100,195,85,10,5,"white");

    // creating a circle
    drawArc(ctx, 500,300,80,"cyan",5,"black");

    // creating the semi circle
    drawArc(ctx, 400,300,80,"cyan",5,"black",0,Math.PI);

    // creating the two "eyes"
    // whites of eyes
    drawArc(ctx, 300,240,10,"white",2,"black");
    drawArc(ctx, 340,240,10,"white",2,"black");
    
    // pupils
    drawArc(ctx, 300,240,3,"black");
    drawArc(ctx, 340,240,3,"black");

    // creating the last line
    drawLine(ctx, 10,20,610,20,20)

    // setting up canvas animations & interactions
    setupUI();
    update();
}

// ===== canvas interaction functions
// updates
const update = () =>{
    if (paused){
        return;
    }
    else{
        if(createRect){
            drawRandomRect();
        }
        if(createArcs){
            drawRandomArc();
        }
        if(createLines){
            drawRandomLine();
        }
        requestAnimationFrame(update);
    }
}

// draws 10 circles of variable color and size around the user's mouse when clicking on canvas
const canvasClicked = (e) =>{
    let rect = e.target.getBoundingClientRect();
    let mouseX = e.clientX - rect.x;
    let mouseY = e.clientY - rect.y;
    console.log(mouseX,mouseY);

    for(let i = 0; i < 10; i++){
        let x = getRandomInt(-100, 100) + mouseX;
        let y = getRandomInt(-100, 100) + mouseY;
        let r = getRandomInt(10,30);
        let color = getRandomColor();
        drawArc(x, y, r, color);
    }
}

// declares and sets up button and 
const setupUI = () =>{
    document.querySelector("#btn-pause").onclick = (e) => {
        paused = true;
    }

    document.querySelector("#btn-play").onclick = (e) =>{
        paused = false;
        update();
    }

    document.querySelector("#btn-clear").onclick = (e) =>{
        ctx.clearRect(0,0,width,height);
    }

    document.querySelector("#cb-rectangles").onclick = (e) => {
        createRect = !createRect;
        console.log(createRect);
    }

    document.querySelector("#cb-arcs").onclick = (e) => {
        createArcs = !createArcs;
        console.log(createArcs);
    }

    document.querySelector("#cb-lines").onclick = (e) => {
        createLines = !createLines;
        console.log(createLines);
    }

    canvas.onclick = (e) => {
        if(createArcs){
            canvasClicked(e);
        }
    }
}

// ====== random drawing functions =====
// uses draw rectangle to draw a rectangle of random size and color in a random posiiton
const drawRandomRect = () =>{
    drawRectangle(
        ctx,
        getRandomInt(0,width),
        getRandomInt(0,height),
        getRandomInt(10,90),
        getRandomInt(10,90),
        getRandomColor()
    )
}        

// uses draw arc to draw a circle of random size, color, and stroke in a random position
const drawRandomArc = () =>{
    drawArc(
        ctx,
        getRandomInt(0,width),
        getRandomInt(0,height),
        getRandomInt(10,90),
        getRandomColor(),
        getRandomInt(1,20),
        getRandomColor()
    )
}

// uses draw line to draw a line of random thickness, length, and color in a random position
const drawRandomLine = () =>{
    drawLine(
        ctx,
        getRandomInt(0,width),
        getRandomInt(0,height),
        getRandomInt(0,width),
        getRandomInt(0,height),
        getRandomInt(1,20),
        getRandomColor()
    )
}

// #1 call the `init` function after the pages loads
init();