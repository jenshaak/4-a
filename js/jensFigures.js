const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}); 

ctx.fillStyle = 'red';
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'black';
ctx.strokeStyle = 'pink';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.rect(400, 200, 100, 100, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'orange';
ctx.strokeStyle = 'green';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.triangle(200, 400, 100, 100, Math.PI * 2);
ctx.fill();
ctx.stroke();

drawCircle()



const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}); 

ctx.fillStyle = 'black';
ctx.strokeStyle = 'pink';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.rect(400, 200, 100, 100, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'orange';
ctx.strokeStyle = 'green';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.triangle(200, 400, 100, 100, Math.PI * 2);
ctx.fill();
ctx.stroke();




/*
function triangleSvg(radius, mode, color) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const triangleElement = document.createElementNS("http://www.w3.org/2000/svg", "triangle");

    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    triangleElement.setAttribute("cx", radius);
    triangleElement.setAttribute("cy", radius);
    triangleElement.setAttribute("r", radius);

    if (mode === "outline") {
        triangleElement.setAttribute("stroke", color);
        triangleElement.setAttribute("fill", "none");
    } else {
        triangleElement.setAttribute("fill", color);
        triangleElement.setAttribute("stroke", "none");
    }

    svg.appendChild(triangleElement);

    return svg;
}*/