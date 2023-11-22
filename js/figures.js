//Lager en const for alle funksjonene sånn at man kan pakke den opp og sende den til andre javascript filer.
const figures = {
    //Her har vi laget en funksjon for å lage en circle.
    circle: function (x, y, radius, farge, navn) {
      var canvas = document.getElementById(navn);
      var circle = canvas.getContext("2d");
  
      circle.beginPath();
      circle.arc(x, y, radius, 0, 2 * Math.PI);
      circle.stroke();
      circle.fillStyle = farge;
      circle.fill();
    },
    // Her har vi laget en funksjon for å lage rectangle / rektangel.
    rectangle: function(x, y, lengde, bredde, farge, navn) {
      var canvas = document.getElementById(navn);
      var rectangle = canvas.getContext("2d");
      rectangle.beginPath();
      rectangle.rect(x, y, lengde, bredde);
      rectangle.stroke();
      rectangle.fillStyle = farge;
      rectangle.fill();
    },
  
    // Her har vi laget en funksjon for å lage trekant.
    trekant: function (x, y, x1, y1, x2, y2, farge, navn) {
      var canvas = document.getElementById(navn);
      var trekant = canvas.getContext("2d");
  
      trekant.beginPath();
      trekant.moveTo(x, y);
      trekant.lineTo(x1, y1);
      trekant.lineTo(x2, y2);
      trekant.fillStyle = farge;
      trekant.fill();
    },
    
    ellipse: function (
      x,
      y,
      vertikalRaidus,
      horisontalRadius,
      rotering,
      startvinkel,
      farge,
      navn
    ) {
      var canvas = document.getElementById(navn);
      var ellipse = canvas.getContext("2d");
  
      ellipse.beginPath();
      ellipse.ellipse(
        x,
        y,
        vertikalRaidus,
        horisontalRadius,
        rotering,
        startvinkel,
        2 * Math.PI
      );
      ellipse.stroke();
      ellipse.fillStyle = farge;
      ellipse.fill();
    }, 
  };
  
  // Eksporterer funksjonene fra konstanten.
  export default figures;