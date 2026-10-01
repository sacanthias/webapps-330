// draws rectangle
const drawRectangle = (ctx, x, y, width, height, fillStyle="black", lineWidth=0, strokeStyle="black") =>{
    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fill();
    if(lineWidth > 0){
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }
    ctx.closePath();
    ctx.restore();
}

// draws arc
const drawArc = (ctx, x, y, radius, fillStyle="black", lineWidth=0, strokeStyle="black", startAngle=0, endAngle=(Math.PI*2)) =>{
    ctx.save();
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
    if(lineWidth > 0){
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }
    ctx.closePath();
    ctx.restore();
}

// draws line
const drawLine = (ctx, startX, startY, endX, endY, lineWidth=1, strokeStyle="black") =>{
    ctx.save();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}

export {drawArc, drawLine, drawRectangle}