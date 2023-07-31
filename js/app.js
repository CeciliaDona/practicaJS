console.log("------------ Ejercicio A ------------");
//😺 😸 😹 🐈 🐾 ⬛


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





