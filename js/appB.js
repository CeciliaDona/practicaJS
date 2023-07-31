console.log("------------ Ejercicio B ------------")

var cantidadDeGatosB = 6;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatosB; i++) {
  var gato = "🐈 ";
  var pasos = "🐾".repeat(cantidadDePasos);
  console.log("Gato #" + i + ": " + gato + pasos);
}