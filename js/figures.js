// figures.js

// SVG API
function circleSvg(radius, mode, color) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    svg.setAttribute("width", radius);
    svg.setAttribute("height", radius);

    circleElement.setAttribute("cx", radius);
    circleElement.setAttribute("cy", radius);
    circleElement.setAttribute("r", radius);

    if (mode === "outline") {
        circleElement.setAttribute("stroke", color);
        circleElement.setAttribute("fill", "none");
    } else {
        circleElement.setAttribute("fill", color);
        circleElement.setAttribute("stroke", "none");
    }

    svg.appendChild(circleElement);

    return svg;
}

// Canvas API version
//function circle(radius, mode, color) {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(radius, radius, radius, 0, Math.PI * 2);
        ctx.fill();
        console.log(ctx);


    //return canvas;
//}