const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;    
});

    ctx.fillStyle = red;
    ctx.fillStroke = red;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(20, 10, 30, 0, Math.PI * 2);
    ctx.stroke();
