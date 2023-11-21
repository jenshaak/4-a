
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
}); 

const mouse1 = {
    x: 100,
    y: 100,
}

canvas1.addEventListener('click', function(event){
    mouse1.x = event.x;
    mouse1.y = event.y;
    drawCircle("30", "outline", "yellow");
});

canvas1.addEventListener('mousemove', function(event){
    mouse1.x = event.x;
    mouse1.y = event.y;
    drawCircle("6", "fill", "purple");
});

function drawCircle(ctx, x, y, radius, mode, color){
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    if (mode == "outline") {
        //ctx.fillStyle = 'transparent';
        ctx.strokeStyle = color;
        ctx.stroke();
    } else {
        ctx.fillStyle = color;
        ctx.fill();
    }
}
drawCircle(ctx1, "100", "200", "50", "outline", "yellow");






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