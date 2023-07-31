console.log("------------ Ejercicio C ------------")

var cantidadDeGatosC = 10;
var cantidadDePasosC = 4;

for (var i = 1; i <= cantidadDeGatosC; i++) {
    var gatoEmoji = (i % 2 === 0) ? "🐈⬛" : "🐈 ";
    var pasosC = "";
    for (var p = 0; p < cantidadDePasosC; p++) {
      pasosC += "🐾";
    }
    console.log("Gato #" + i + ": " + gatoEmoji + pasosC);
  }