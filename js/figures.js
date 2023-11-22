// bruker const figures for at man kan hente ut disse funksjonene i de andre .js-filene.
const figures = {

    // Først lager vi en funksjon for å lage en sirkel, med de samme parameterne som brukes i Pyret.
    circle: function (x, y, radius, farge, name) {
      var canvas = document.getElementById(name);
      var circle = canvas.getContext("2d");
  
      circle.beginPath();
      circle.arc(x, y, radius, 0, 2 * Math.PI);
      circle.stroke();
      circle.fillStyle = farge;
      circle.fill();
    },
    
    // Deretter lager vi en funksjon for å lage et rektangel
    rectangle: function(x, y, lengde, bredde, farge, name) {
      var canvas = document.getElementById(name);
      var rectangle = canvas.getContext("2d");
      rectangle.beginPath();
      rectangle.rect(x, y, lengde, bredde);
      rectangle.stroke();
      rectangle.fillStyle = farge;
      rectangle.fill();
    },
  
    // Her er funksjonen for å lage en trekant
    trekant: function (x, y, x1, y1, x2, y2, farge, name) {
      var canvas = document.getElementById(name);
      var trekant = canvas.getContext("2d");
  
      trekant.beginPath();
      trekant.moveTo(x, y);
      trekant.lineTo(x1, y1);
      trekant.lineTo(x2, y2);
      trekant.fillStyle = farge;
      trekant.fill();
    },
    
    // Lager ellipse
    ellipse: function (x, y, vertikalRaidus, horisontalRadius, rotation, startvinkel, farge, name) {
      var canvas = document.getElementById(name);
      var ellipse = canvas.getContext("2d");
  
      ellipse.beginPath();
      ellipse.ellipse(x, y, vertikalRaidus, horisontalRadius, rotation, startvinkel, 2 * Math.PI);
      ellipse.stroke();
      ellipse.fillStyle = farge;
      ellipse.fill();
    }, 
  };
  export default figures;