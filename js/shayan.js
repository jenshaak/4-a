
                // Get the canvas element and its 2d context
                const canvas = document.getElementById('triforceCanvas');
                const ctx = canvas.getContext('2d');

                // Function to draw the Triforce symbol
                function drawTriforce() {
                // Clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Make a line around the triforce
                ctx.strokeStyle = 'black';
                // the line around triforce get thicker
                ctx.lineWidth = 3;

                // Set the fill color
                ctx.fillStyle = 'gold';

                // Draw the top triangle
                ctx.beginPath();
                ctx.moveTo(150, 50);
                ctx.lineTo(85, 170);
                ctx.lineTo(210, 170);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Draw the bottom-left triangle
                ctx.beginPath();
                ctx.moveTo(85, 169);
                ctx.lineTo(30, 280);
                ctx.lineTo(150, 280);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Draw the bottom-right triangle
                ctx.beginPath();
                ctx.moveTo(210, 169);
                ctx.lineTo(270, 280);
                ctx.lineTo(150, 280);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // making a triangle black
                ctx.fillStyle = 'black';
                  
                // Draw the middle triangle
                ctx.beginPath();
                ctx.moveTo(150, 280);
                ctx.lineTo(85, 170);
                ctx.lineTo(210, 170);
                ctx.closePath();
                ctx.fill();
                }

                // Call the drawTriforce function
                drawTriforce();
                /*
                <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">

                <rect width="100%" height="100%" fill="#ccc"/>
            
                <polygon points="150,50 85,170 210,170" fill="gold" stroke="black" stroke-width="3"/>
            
                <polygon points="85,169 30,280 150,280" fill="gold" stroke="black" stroke-width="3"/>
            
                <polygon points="210,169 270,280 150,280" fill="gold" stroke="black" stroke-width="3"/>
            
                <polygon points="150,280 85,170 210,170" fill="black" stroke="black" stroke-width="3"/>
              </svg> */
