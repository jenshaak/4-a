
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}); 

const mouse = {
    x: 100,
    y: 100,
}

canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle("30", "outline", "yellow");
});

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle("6", "fill", "purple");
});

function drawCircle(radius, mode, color){
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
    if (mode == "outline") {
        //ctx.fillStyle = 'transparent';
        ctx.strokeStyle = color;
        ctx.stroke();
    } else {
        ctx.fillStyle = color;
        ctx.fill();
    }
}
drawCircle(50, "outline", "yellow");






const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
}); 

function drawRect(ctx, x, y, width, height, mode, color){
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.rect(x, y, width, height, 0, Math.PI * 2);
    if (mode == "outline") {
        ctx.strokeStyle = color;
        ctx.stroke();
    } else {
        ctx.fillStyle = color;
        ctx.fill();
    }
}

drawRect(ctx2, "200", "200", "70", "90", "outline", "yellow"); 