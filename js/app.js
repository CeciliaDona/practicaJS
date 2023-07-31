console.log("------------ Ejercicio A ------------");

for (var cantidadDeGatos = 1; cantidadDeGatos <= 10; cantidadDeGatos++) {
    if (cantidadDeGatos % 3 === 1) {
        console.log("Gato #" + cantidadDeGatos + ": 😺");
    } else if (cantidadDeGatos % 3 === 2) {
        console.log("Gato #" + cantidadDeGatos + ": 😸");
    } else {
        console.log("Gato #" + cantidadDeGatos + ": 😹");
    }
}


console.log("------------ Ejercicio B ------------")

var cantidadDeGatosB = 6;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatosB; i++) {
  var gato = "🐈 ";
  var pasos = "🐾".repeat(cantidadDePasos);
  console.log("Gato #" + i + ": " + gato + pasos);
}


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


