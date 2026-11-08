import * as utils from './utils.js';

let ctx, interval, width, height, baseColor, mainFont, smallFont;
let notes = [];
let colors = [
    "palevioletred",
    "salmon",
    "crimson",
    "orangered",
    "gold",
    "yellowgreen",
    "springgreen",
    "seagreen",
    "teal",
    "royalblue",
    "blueviolet",
    "orchid"
]

let angle = 0;

let currentNote = "--";

function setupCanvas(canvas){
    ctx = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;
    interval = 1;
    mainFont = '48px sans serif';
    smallFont = '24px poppins';
    baseColor = 'rgb(52, 52, 80)';
}

function assignNote(newNote){
    if(newNote != currentNote && newNote != "--"){
        notes.push(newNote);
    }

    currentNote = newNote;
}

function draw(fps){
    ctx.save();
    ctx.globalAlpha = 1/fps;
    clear();
    ctx.restore();

    // let x = 0;
    // for(let n of notes){
	// 	angle += 0.3;
    //     x += 10;

    //     ctx.save();
    //     ctx.fillStyle = `rgba(50,255,50, ${1 / x})`;
    //     ctx.font = smallFont;
    //     ctx.fillText(n, width / fps + x, height/2 + Math.sin(angle) * 100);
    //     ctx.restore();
    // }

    drawCurrentNote();
}

function drawCurrentNote(){
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.fillStyle = baseColor;
    ctx.fillRect(250,150,100,50);

    ctx.font = mainFont;
    ctx.fillStyle = "white";
    ctx.fillText(currentNote, 250, 200);
    ctx.restore();
}

function clear(){
    ctx.save();
    ctx.fillStyle = baseColor;
    ctx.fillRect(0,0,width,height);
    ctx.restore();
}

export { setupCanvas, assignNote, draw, clear }