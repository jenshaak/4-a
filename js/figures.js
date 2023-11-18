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
function circle(radius, mode, color) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    canvas.width = 2 * radius;
    canvas.height = 2 * radius;

    if (mode === "outline") {
        context.strokeStyle = color;
        context.beginPath();
        context.arc(radius, radius, radius, 0, 2 * Math.PI);
        context.stroke();
    } else {
        context.fillStyle = color;
        context.beginPath();
        context.arc(radius, radius, radius, 0, 2 * Math.PI);
        context.fill();
    }

    return canvas;
}